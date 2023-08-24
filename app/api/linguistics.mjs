import { getBlurb, getProjectsBy } from '../shared/content.mjs'
import { prettifyProjectDates, compareDate } from '../shared/utils.mjs'


/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const blurb = await getBlurb('linguistics')
  const oxfordBlurb = await getBlurb('linguistics-oxford')
  const worksBlurb = await getBlurb('linguistics-works')
  const works = (await getProjectsBy({tags: ['linguistics']}))
    .sort(compareDate)
    .reverse()
    .map(prettifyProjectDates)
  return {
    json: {
      title: 'Linguistics',
      blurb,
      oxfordBlurb,
      worksBlurb,
      works,
      urlPath: req.path,
    }
  }
}
