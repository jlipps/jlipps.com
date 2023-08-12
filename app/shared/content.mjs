import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import MarkdownDB from 'muaddib';
import {staticFile} from './utils.mjs';
import { BLURB, blurbSchema, PROJECT, projectSchema, TECH_PROJECT, techProjectSchema } from './schema.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url))
const contentDir = resolve(__dirname, '..', 'content')
export const db = new MarkdownDB({baseDir: contentDir})

db.addObjectType(BLURB, blurbSchema)
db.addObjectType(PROJECT, projectSchema, {dirName: 'projects'})
db.addObjectType(TECH_PROJECT, techProjectSchema)

/**
 * @param {string} name
 */
export async function getBlurb(name) {
  /** @type {import('muaddib').ParsedObject<Blurb>} */
  const blurb = await db.findById(BLURB, name)
  if (blurb.image) {
    blurb.image = staticFile(`content/blurbs/${blurb.image}`)
  }
  return blurb
}

/** @typedef {import('./schema.mjs').Blurb} Blurb */
