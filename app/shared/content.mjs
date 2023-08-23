import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import MarkdownDB from 'muaddib';
import {staticFile} from './utils.mjs';
import { BLURB, blurbSchema, PROJECT, projectSchema } from './schema.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url))
const contentDir = resolve(__dirname, '..', 'content')
export const db = new MarkdownDB({baseDir: contentDir})

db.addObjectType(BLURB, blurbSchema)
db.addObjectType(PROJECT, projectSchema, {dirName: 'projects'})

/**
 * @param {string} id
 */
export async function getBlurb(id) {
  /** @type {ParsedObject<Blurb>} */
  const blurb = await db.findById(BLURB, id)
  if (!blurb._decorated) {
    if (blurb.image) {
      blurb.image = staticFile(`content/blurbs/${blurb.image}`)
    }
    blurb._decorated = true
  }
  return blurb
}

/**
 * @typedef {'date'|'addedAt'|'startedAt'|'finishedAt'} DateKey
 */

/**
 * @template T
 * @typedef {T & {
 *   _date?: Date,
 *   _addedAt?: Date,
 *   _startedAt?: Date,
 *   _finishedAt?: Date,
 *   _decorated?: boolean,
 * }} DecoratedItem<T>
 */

/**
 * @param {DecoratedItem<Project>} item
 * @param {string} path
 */
function decorateProject(item, path) {
  if (!item._decorated) {
    if (item.image) {
      item.image = staticFile(`content/${path}/${item.image}`)
    }
    for (const dateKey of /** @type {DateKey[]} */(['date', 'addedAt', 'startedAt', 'finishedAt'])) {
      if (item[dateKey]) {
        item[`_${dateKey}`] = new Date(/** @type {string} */(item[dateKey]))
      }
    }
    item._decorated = true
  }

  return item
}

/**
 * @param {string} id
 */
export async function getProject(id) {
  /** @type {ParsedObject<Project>} */
  const p = await db.findById(PROJECT, id)
  return decorateProject(p, 'projects')
}

/**
 * @param {string} type
 */
export async function getProjectsByType(type) {
  /** @type {ParsedObject<Project>} */
  return (await db.find(PROJECT, {type})).map(p => decorateProject(p, 'projects'))
}

/**
 * @param {Record<string, any>} requirements
 */
export async function getProjectsBy(requirements) {
  /** @type {string[]} */
  let tags = []

  // handle tags specially
  if (requirements.tags) {
    tags = requirements.tags
    delete requirements.tags
  }

  /** @type {ParsedObject<Project>[]} */
  const projects = await db.find(PROJECT, requirements)
  return projects
    .filter(p => {
      for (const tag of tags) {
        if (!p.tags || !p.tags.map(s => s.toLowerCase()).includes(tag.toLowerCase())) {
          return false
        }
      }
      return true
    })
    .map(p => decorateProject(p, 'projects'))
}

/**
 * @template T
 * @typedef {import('muaddib').ParsedObject<T>} ParsedObject
 */
/** @typedef {import('./schema.mjs').Blurb} Blurb */
/** @typedef {import('./schema.mjs').Project} Project */
