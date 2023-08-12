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
 *   link?: string,
 *   links?: Record<string, string>,
 *   date?: string,
 * }} Project
 */

const projectProps = /** @type const */({
  ...blurbProperties,
  link: {type: 'string', nullable: true},
  links: {type: 'object', propertyNames: {type: 'string'}, required: [], nullable: true},
  date: {type: 'string', nullable: true},
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
 * @typedef {Project & {
 *   isCurrent?: boolean
 * }} TechProject
 */
/**
 * @type {JSONSchemaType<TechProject>}
 */
export const techProjectSchema = {
  type: 'object',
  properties: {
    ...projectProps,
    isCurrent: {type: 'boolean', nullable: true},
  },
  required: [],
}
export const TECH_PROJECT = 'techproject'

/**
 * @template T
 * @typedef {import('ajv').JSONSchemaType<T>} JSONSchemaType
 */
