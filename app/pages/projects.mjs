/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {
    blurb,
    projectsSortedByYear
  } = store

  const projectsHtml = /** @type {Array<[string, Project[]]>} */(projectsSortedByYear).map(([year, ps]) => {
    const projectsForYearHtml = ps.map((p) => {
      context[p.id] = p
      return html`<jl-project contextkey="${p.id}"></jl-project>`
    }).join('\n')

    return html`
      <h2 class="year">${year}</h2>
      ${projectsForYearHtml}
    `
  }).join('\n')

  return html`
    <style>
      .year {
        border-bottom: 2px solid var(--white);
      }
    </style>
    <jl-layout hero="${blurb.image}">
      <div class="blurb bg-navy radius5 pb-2 pi-2">
        ${blurb._html}
      </div>

      <jl-mdcontent>
        ${projectsHtml}
      </jl-mdcontent>

    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/content.mjs').DecoratedItem<import('../shared/schema.mjs').Project>>} Project */
