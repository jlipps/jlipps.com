import { getBlurb } from '../shared/content.mjs'
import { staticFile } from '../shared/utils.mjs'

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
  return {
    json: {
      title: 'Technology',
      blurb,
      highlightsBlurb,
      speakingBlurb,
      philosophyBlurb,
      buttons
    }
  }
}
