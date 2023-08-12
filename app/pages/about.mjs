/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store} = state
  const {about, bio, delights} = store
  const links = [
    ['Professional Bio', '#professional-bio'],
    ['Résumé', 'todo'],
    ['Headshot', 'todo'],
    ['Blog', 'https://jlipps.com'],
  ]
  const linksHtml = links.map(([title, href]) => html`
    <jl-button href="${href}" class="col-start-1 col-end-3 col-auto-lg">${title}</jl-button>`
  ).join('\n')

  return html`
    <jl-layout hero="${about.image}">
      <jl-socials></jl-socials>
      <jl-mdcontent>
        <section>${about._html}</section>
        <div class="grid gap1 col-2 pbs2">
          ${linksHtml}
        </div>
        <h2>${bio.title}</h2>
        <img class="sectionHero" src="${bio.image}" />
        ${bio._html}
        <h2>${delights.title}</h2>
        <img class="sectionHero" src="${delights.image}" />
        ${delights._html}
      </jl-mdcontent>
    </jl-layout>
  `
}
