import { BLURB, db } from '../shared/content.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  /**
   * @type {import('muaddib').ParsedObject<Blurb>}
   */
  const intro = await db.findById(BLURB, 'intro')
  return {json: {intro}}
}

/** @typedef {import('../shared/content.mjs').Blurb} Blurb */
