/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLMDContent({html}) {
  return html`
    <style>
      h1, h2, h3, h4 {
        font-family: var(--font-title);
        font-style: italic;
        margin-block-start: var(--space-1);
        margin-block-end: var(--space--5);
      }

      h2 {
        font-size: var(--text-2);
      }

      p {
        padding-block-start: var(--space--2);
        padding-block-end: var(--space--2);
      }

      ul {
        margin-inline-start: 1rem;
      }

      li {
        margin-block-end: 1rem;
      }

      strong {
        font-weight: 500;
      }

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