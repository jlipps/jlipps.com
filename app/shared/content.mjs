import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import MarkdownDB from 'muaddib';

const __dirname = dirname(fileURLToPath(import.meta.url))
const contentDir = resolve(__dirname, '..', 'content')
export const db = new MarkdownDB({baseDir: contentDir})

/**
 * @typedef {{image?: string, addedAt: string}} Blurb
 */

/**
 * @type {JSONSchemaType<Blurb>}
 */
const blurbSchema = {
  type: 'object',
  properties: {image: {type: 'string', nullable: true}, addedAt: {type: 'string'}},
  required: ['addedAt'],
}
export const BLURB = 'blurb'
db.addObjectType(BLURB, blurbSchema)

/**
 * @typedef {{image?: string, addedAt: string, title: string}} Music
 */

/**
 * @type {JSONSchemaType<Music>}
 */
const musicSchema = {
  type: 'object',
  properties: {
    image: {type: 'string', nullable: true}, addedAt: {type: 'string'},
    title: {type: 'string'},
  },
  required: [],
}
export const MUSIC = 'music'
db.addObjectType(MUSIC, musicSchema, {dirName: 'music'})

/**
 * @typedef {Object} BaseItem
 * @property {string|undefined} image
 * @property {Date} addedAt
 */

/**
 * @template T
 * @typedef {import('ajv').JSONSchemaType<T>} JSONSchemaType
 */
