import { getBlurb, getProjectsBy, getProjectsByType } from '../shared/content.mjs'
import { compareStartedFinished, prettifyProjectDates, compareDate } from '../shared/utils.mjs'


/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const blurb = await getBlurb('technology')
  const highlightsBlurb = await getBlurb('tech-highlights')
  const speakingBlurb = await getBlurb('tech-speaking')
  const philosophyBlurb = await getBlurb('tech-philosophy')
  const highlights = (await getProjectsByType('job'))
    .sort(compareStartedFinished)
    .reverse()
    .map(prettifyProjectDates)
  const talks = (await getProjectsByType('talk'))
    .sort(compareDate)
    .reverse()
    .map(prettifyProjectDates)
  const articles = (await getProjectsBy({type: 'article', tags: ['technology', 'philosophy']}))
    .sort(compareDate)
    .reverse()
    .map(prettifyProjectDates)
  return {
    json: {
      title: 'Technology',
      blurb,
      highlightsBlurb,
      speakingBlurb,
      philosophyBlurb,
      highlights,
      articles,
      talks,
      urlPath: req.path,
    }
  }
}
