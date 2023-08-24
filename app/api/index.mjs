import { getBlurb, getProjectsBy } from '../shared/content.mjs'
import { prettifyProjectDates, compareDate } from '../shared/utils.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const projects = (await getProjectsBy({}))
    .sort(compareDate)
    .reverse()
    .slice(0, 10)
    .map(prettifyProjectDates)
  return {
    json: {
      intro: await getBlurb('intro'),
      linkTitle: false,
      projects,
      urlPath: req.path,
    }
  }
}
