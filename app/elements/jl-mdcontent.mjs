/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLMDContent({html}) {
  return html`
    <style>
      section {
        background-color: var(--navy);
        border-radius: 5px;
        padding-block: var(--space--2);
        padding-inline: var(--space--2);
      }
    </style>
    <slot></slot>
  `
}
