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
  return {json: {title: 'Technology', blurb: await getBlurb('technology'), buttons}}
}
