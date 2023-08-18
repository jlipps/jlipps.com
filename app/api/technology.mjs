import { getBlurb, getProjectsByType } from '../shared/content.mjs'
import { compareStartedFinished, prettyYearMonth, compareDate, prettyDate,
  staticFile } from '../shared/utils.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  /** @type {import('../shared/utils.mjs').Button[]} */
  const buttons = [{
    title: 'Résumé',
    href: staticFile('downloads/Jonathan-Lipps-CV.pdf'),
    openNew: true,
  }, {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/jlipps',
    openNew: true,
  }]
  const blurb = await getBlurb('technology')
  const highlightsBlurb = await getBlurb('tech-highlights')
  const speakingBlurb = await getBlurb('tech-speaking')
  const philosophyBlurb = await getBlurb('tech-philosophy')
  const highlights = (await getProjectsByType('job')).sort(compareStartedFinished).reverse().map((h) => {
    return {
      ...h,
      _startedAtText: prettyYearMonth(h._startedAt),
      _finishedAtText: prettyYearMonth(h._finishedAt) || 'now',
    }
  })
  const talks = (await getProjectsByType('talk')).sort(compareDate).reverse().map((t) => {
    return {...t, _dateText: prettyDate(t._date)}
  })
  return {
    json: {
      title: 'Technology',
      blurb,
      highlightsBlurb,
      speakingBlurb,
      philosophyBlurb,
      highlights,
      talks,
      buttons,
    }
  }
}
