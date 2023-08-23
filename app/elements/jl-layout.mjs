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

      .hero {
        width: 20rem;
      }

      .hero img {
        width: 100%;
      }

      @media only screen and (min-width:44em) {
        .hero {
          width: 24rem;
        }
      }
    </style>

    <header class="pb0">
      <h2 class="m-auto font-title text3 italic text-center">${titleHtml}</h2>
    </header>
    <main class="m-auto pbs2 pbe2 pi2 color-light font-sans">
      <div class="hero mi-auto pi2 mbe2">
        <img src="${hero}" alt="hero" class="radius-100 border-navy border2">
      </div>
      <slot></slot>
    </main>
    <footer class="m-auto pbe2 text-center color-light font-sans text-2">
      &copy; 2013 - ${currentYear} Jonathan Lipps
    </footer>
  `
}
