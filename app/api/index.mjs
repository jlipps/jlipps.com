import { getBlurb } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  return {json: {intro: await getBlurb('intro'), linkTitle: false}}
}
