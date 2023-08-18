import { getBlurb, getProjectsBy, getProjectsByType } from '../shared/content.mjs'
import { compareStartedFinished, prettyYearMonth, compareDate, prettyDate } from '../shared/utils.mjs'

/** @param {import('../shared/content.mjs').DecoratedItem<import('../shared/schema.mjs').Project>} project */
function prettifyDate(project) {
  return {
    ...project,
    _dateText: project._date ? prettyDate(project._date) : undefined,
    _startedAtText: project._startedAt? prettyYearMonth(project._startedAt) : undefined,
    _finishedAtText: project._finishedAt ? prettyYearMonth(project._finishedAt) : 'now',
  }
}

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  const blurb = await getBlurb('technology')
  const highlightsBlurb = await getBlurb('tech-highlights')
  const speakingBlurb = await getBlurb('tech-speaking')
  const philosophyBlurb = await getBlurb('tech-philosophy')
  const highlights = (await getProjectsByType('job'))
    .sort(compareStartedFinished)
    .reverse()
    .map(prettifyDate)
  const talks = (await getProjectsByType('talk'))
    .sort(compareDate)
    .reverse()
    .map(prettifyDate)
  const articles = (await getProjectsBy({type: 'article', tags: ['technology', 'philosophy']}))
    .sort(compareDate)
    .reverse()
    .map(prettifyDate)
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
    }
  }
}
