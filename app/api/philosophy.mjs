import { getBlurb, getProjectsBy } from '../shared/content.mjs'
import { prettifyProjectDates, compareDate } from '../shared/utils.mjs'


/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const blurb = await getBlurb('philosophy')
  const stanfordBlurb = await getBlurb('philosophy-stanford')
  const worksBlurb = await getBlurb('philosophy-works')
  const works = (await getProjectsBy({tags: ['philosophy']}))
    .sort(compareDate)
    .reverse()
    .map(prettifyProjectDates)
  return {
    json: {
      title: 'Philosophy',
      blurb,
      stanfordBlurb,
      worksBlurb,
      works,
      urlPath: req.path,
    }
  }
}
