import { getBlurb } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  const about = await getBlurb('about')
  const bio = await getBlurb('about-bio')
  const delights = await getBlurb('about-delights')
  /** @type {Button[]} */
  const buttons = [{
    title: 'Professional Bio',
    href: '#professional-bio',
  }, {
    title: 'Résumé',
    href: '/downloads/Jonathan-Lipps-CV.pdf'
  }, {
    title: 'Headshot',
    href: 'todo'
  }, {
    title: 'Blog',
    href: 'https://jlipps.com',
    openNew: true,
  }]
  return {json: {title: 'About', about, bio, delights, buttons}}
}

/** @typedef {import('../shared/utils.mjs').Button} Button */
