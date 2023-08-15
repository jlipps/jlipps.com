import arc from '@architect/functions'

/**
 * @param {string} img
 */
export function staticImg(img) {
  return arc.static(`img/${img}`)
}

/**
 * @param {string} style
 */
export function staticStyle(style) {
  return arc.static(`styles/${style}`)
}

/**
 * @param {string} file
 */
export function staticFile(file) {
  return arc.static(file)
}

/** @typedef {{
 *    href: string,
 *    title: string,
 *    openNew?: boolean,
 *    isPrimary?: boolean,
 *  }} Button
*/
