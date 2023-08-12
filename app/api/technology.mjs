import { getBlurb } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  return {json: {title: 'Technology', blurb: await getBlurb('technology')}}
}
