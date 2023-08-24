import { getBlurb, getProjectsBy } from '../shared/content.mjs'
import { prettifyProjectDates, compareDate } from '../shared/utils.mjs'


/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const blurb = await getBlurb('theology')
  const backgroundBlurb = await getBlurb('theology-background')
  const worksBlurb = await getBlurb('theology-works')
  const works = (await getProjectsBy({tags: ['theology']}))
    .sort(compareDate)
    .reverse()
    .map(prettifyProjectDates)
  return {
    json: {
      title: 'Theology',
      blurb,
      backgroundBlurb,
      worksBlurb,
      works,
      urlPath: req.path,
    }
  }
}
