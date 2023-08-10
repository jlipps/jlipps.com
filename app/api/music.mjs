import { BLURB, db } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  /**
   * @type {import('muaddib').ParsedObject<Blurb>}
   */
  const blurb = await db.findById(BLURB, 'music')
  return {json: {blurb}}
}

/** @typedef {import('../shared/content.mjs').Blurb} Blurb */
