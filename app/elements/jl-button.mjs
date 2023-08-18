/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLButton({html, state}) {
  const {attrs} = state
  const {href, target, primary} = attrs
  const targetExtra = target ? `target="${target}"` : ''
  return html`
    <style>
      a, a:active, a:visited {
        color: var(--white);
        text-decoration: none;
      }
    </style>
    <a
      href="${href}"
      ${targetExtra}
      class="
             link-btn
             p1
             flex
             justify-content-center
             align-items-center
             radius5
             ${primary ? 'bg-navy' : 'bg-mdgrey'}
             font-title
             text2
    ">
      <slot></slot>
    </a>
  `
}
