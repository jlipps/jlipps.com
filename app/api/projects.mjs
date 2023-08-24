import { getBlurb, getProjectsBy } from '../shared/content.mjs'
import { prettifyProjectDates, compareDate } from '../shared/utils.mjs'


/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const blurb = await getBlurb('projects')
  const projects = (await getProjectsBy({}))
    .sort(compareDate)
    .reverse()
    .map(prettifyProjectDates)
  /** @type {Record<string, Array<Project>>} */
  const projectsByYear = {}
  for (const p of projects) {
    const year = p._date?.getFullYear().toString() ?? p._startedAt?.getFullYear().toString()
    if (!year) {
      throw new Error(`Project ${p.title} has no date`)
    }
    if (!projectsByYear[year]) {
      projectsByYear[year]  = []
    }
    projectsByYear[year].push(p)
  }
  const projectsSortedByYear = Object.keys(projectsByYear)
    .map((year) => [year, projectsByYear[year]])
    .sort()
    .reverse()

  return {
    json: {
      title: 'All Projects',
      blurb,
      projectsSortedByYear,
      urlPath: req.path,
    }
  }
}

/** @typedef {import('../shared/content.mjs').DecoratedItem<import('../shared/schema.mjs').Project>} Project */
