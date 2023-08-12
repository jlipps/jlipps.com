import { getBlurb } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  const about = await getBlurb('about')
  const bio = await getBlurb('about-bio')
  const delights = await getBlurb('about-delights')
  return {json: {title: 'About', about, bio, delights}}
}
