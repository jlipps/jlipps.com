import { getBlurb } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  const about = await getBlurb('about')
  const bio = await getBlurb('about-bio')
  const delights = await getBlurb('about-delights')
  const profBio = await getBlurb('about-prof-bio')
  const whySite = await getBlurb('about-why')
  const tech = await getBlurb('about-tech')
  return {
    json: {
      title: 'About',
      about,
      bio,
      delights,
      profBio,
      whySite,
      tech,
    }
  }
}

/** @typedef {import('../shared/utils.mjs').Button} Button */
