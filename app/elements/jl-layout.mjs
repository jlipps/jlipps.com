/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLLayout({html, state}) {
  const {attrs, store} = state
  const {title} = store
  const titleExtra = title ? `: ${title}` : ''
  const {hero} = attrs
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
        max-width: 26rem;
      }
    </style>

    <header class="bg-navy pb0">
      <h2 class="m-auto font-title text3 italic text-center"><a href="/">Jonathan Lipps</a>${titleExtra}</h2>
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
