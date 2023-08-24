/** @type {import('@enhance/types').EnhanceElemFn} */
export default function indexPage({html, state}) {
  const {store, context} = state
  const {intro, projects} = store
  const aboutLinks = [
    ['About', '/about', false],
    ['Blog', 'https://blog.jlipps.com', true],
  ]
  const links = [
    ['Technology', '/technology'],
    ['Music', '/music'],
    ['Philosophy', '/philosophy'],
    ['Theology', '/theology'],
    ['Linguistics', '/linguistics'],
    ['All Projects', '/projects'],
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

  const projectsHtml = /** @type {Project[]} */(projects).map((p) => {
    context[p.id] = p
    return html`<jl-project contextkey="${p.id}"></jl-project>`
  }).join('\n')


  return html`
    <style>
      jl-icon a:hover svg {
        fill: var(--mdgray);
      }

    </style>

    <jl-layout hero="${intro.image}">
      <jl-socials></jl-socials>
      <!--<section class="p2 mbe2 text0 bg-navy radius5 font-light italic">
        ${intro._html}
      </section>-->
      <div class="grid gap1 col-2">
        ${aboutLinksHtml}
        ${linksHtml}
      </div>
      <h2 class="h2strong">Recent Projects</h2>
      ${projectsHtml}
      <div class="flex align-items-center">
        <jl-button class="mi-auto mbs1" href="/projects">See all projects...</jl-button>
      </div>
    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project>} Project */
