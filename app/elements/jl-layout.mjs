/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLLayout({html, state}) {
  const {attrs, store} = state
  const {title, linkTitle} = store
  const titleExtra = title ? `: ${title}` : ''
  const {hero} = attrs
  const titleHtml = linkTitle === false ?
    html`Jonathan Lipps${titleExtra}` :
    html`<a href="/">Jonathan Lipps</a>${titleExtra}`
  const currentYear = new Date().getFullYear().toString()
  return html`
    <style>
      jl-icon svg {
        fill: var(--navy);
      }

      main {
        min-width: 17rem;
        max-width: 52rem;
        height: auto;
      }

      h1, h2, h3, h4 {
        font-family: var(--font-title);
        font-style: italic;
        margin-block-start: var(--space-1);
        margin-block-end: var(--space--5);
      }

      h3, h4 {
        font-style: normal;
      }

      h2 {
        font-size: var(--text-2);
      }

      h3 {
        font-size: var(--text-1);
      }

      p {
        margin-block-start: var(--space--1);
        margin-block-end: var(--space--1);
      }

      section > p:first-child {
        margin-block-start: 0;
      }

      section > p:last-child {
        margin-block-end: 0;
      }

      ul, ol {
        margin-inline-start: 1rem;
      }

      li {
        margin-block-end: 1rem;
      }

      strong {
        font-weight: 500;
      }
      .hero {
        width: 20rem;
      }

      .hero img {
        width: 100%;
      }

      @media only screen and (min-width:36em) {
        .hero {
          width: 24rem;
        }
      }
    </style>

    <header class="pbs0">
      <h2 class="m-auto font-title text3 italic text-center">${titleHtml}</h2>
    </header>
    <main class="m-auto pbs2 pbe2 pi2 color-light font-sans">
      <div class="hero mi-auto pi2 mbe2">
        <enhance-image
           defaultwidth="300"
           variant1="(min-width: 36em) 450"
           src="${hero}"
           alt="Hero image for page"
           class="circle">
        </enhance-image>
      </div>
      <slot></slot>
    </main>
    <footer class="m-auto pbe2 text-center color-light font-sans text-2">
      &copy; 2013 - ${currentYear} Jonathan Lipps
    </footer>
  `
}
