import { getBlurb } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  const about = await getBlurb('about')
  const bio = await getBlurb('about-bio')
  const delights = await getBlurb('about-delights')
  const profBio = await getBlurb('about-prof-bio')
  return {json: {title: 'About', about, bio, delights, profBio}}
}

/** @typedef {import('../shared/utils.mjs').Button} Button */
