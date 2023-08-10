import {staticImg} from '../shared/utils.mjs'

/**
 * @param {string} name
 */
function icon(name) {
  return staticImg(`icons/${name}.svg`)
}

/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLIcon({html, state}) {
  const {attrs = {}} = state
  const {name, href, alt, size='2'} = attrs
  const altHtml = alt ? `alt="${alt}"` : ''
  let iconHtml = html`
    <img src="${icon(name)}" ${altHtml} style="width: var(--text-${size})" />
  `
  if (href) {
    iconHtml = html`<a href="${href}">${iconHtml}</a>`
  }

  return html`
    <style>
      img {
        display: inline;
      }
    </style>
    ${iconHtml}
  `
}
