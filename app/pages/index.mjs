/** @type {import('@enhance/types').EnhanceElemFn} */
export default function indexPage({html, state}) {
  const {store} = state
  const {intro} = store
  const aboutLinks = [
    ['About Me', '/about', false],
    ['Blog', 'https://blog.jlipps.com', true],
  ]
  const links = [
    ['Technology', '/technology'],
    ['Music', '/music'],
    ['Philosophy', '/philosophy'],
    ['Theology', '/theology'],
    ['Linguistics', '/linguistics'],
    ['Photos', '/photos'],
  ]

  const aboutLinksHtml = aboutLinks.map(([title, href, openNew]) =>
    html`
      <jl-button href="${href}" primary="true" ${openNew && 'target="_blank"'}>${title}</jl-button>
    `
  ).join('\n')
  const linksHtml = links.map(([title, href]) =>
    html`
      <jl-button href="${href}" class="col-start-1 col-end-3 col-auto-lg">${title}</jl-button>
    `
  ).join('\n')

  return html`
    <style>
      jl-icon a:hover svg {
        fill: var(--mdgray);
      }

      a:hover.link-btn {
        text-decoration: none;
        border: 2px solid var(--light);
      }
    </style>

    <jl-layout hero="${intro.image}">
      <jl-socials></jl-socials>
      <section class="p2 mbe2 text0 bg-navy radius5 font-light italic">
        ${intro._html}
      </section>
      <div class="grid gap1 col-2">
        ${aboutLinksHtml}
        ${linksHtml}
      </div>
    </jl-layout>
  `
}
