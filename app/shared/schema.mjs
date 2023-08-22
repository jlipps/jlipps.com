/**
 * @typedef {{image?: string, addedAt?: string, title?: string}} Blurb
 */

const blurbProperties = /** @type const */({
  image: {type: 'string', nullable: true},
  addedAt: {type: 'string', nullable: true},
  title: {type: 'string', nullable: true}
})

/**
 * @type {JSONSchemaType<Blurb>}
 */
export const blurbSchema = {
  type: 'object',
  properties: blurbProperties,
  required: [],
}
export const BLURB = 'blurb'

/**
 * @typedef {Blurb & {
 *   type: string,
 *   link?: string,
 *   links?: Record<string, string>,
 *   startedAt?: string,
 *   finishedAt?: string,
 *   role?: string,
 *   event?: string,
 *   artist?: string,
 *   location?: string,
 *   publication?: string,
 *   date?: string,
 *   tags?: string[],
 * }} Project
 */

const projectProps = /** @type const */({
  ...blurbProperties,
  type: {type: 'string'},
  link: {type: 'string', nullable: true},
  links: {type: 'object', propertyNames: {type: 'string'}, required: [], nullable: true},
  date: {type: 'string', nullable: true, format: 'date'},
  event: {type: 'string', nullable: true},
  location: {type: 'string', nullable: true},
  artist: {type: 'string', nullable: true},
  tags: {type: 'array', items: {type: 'string'}, nullable: true},
  startedAt: {type: 'string', nullable: true, format: 'date'},
  finishedAt: {type: 'string', nullable: true, format: 'date'},
  role: {type: 'string', nullable: true},
})

/**
 * @type {JSONSchemaType<Project>}
 */
export const projectSchema = {
  type: 'object',
  properties: projectProps,
  required: [],
}
export const PROJECT = 'project'

/**
 * @template T
 * @typedef {import('ajv').JSONSchemaType<T>} JSONSchemaType
 */
