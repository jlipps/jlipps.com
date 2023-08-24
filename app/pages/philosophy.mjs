
/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {
    blurb,
    stanfordBlurb,
    worksBlurb,
    works,
  } = store

  const worksHtml = /** @type {Project[]} */(works).map((h) => {
    context[h.id] = h
    return html`<jl-project contextkey="${h.id}"></jl-project>`
  }).join('\n')

  return html`
    <jl-layout hero="${blurb.image}">
      <div class="blurb bg-navy radius5 pb-2 pi-2">
        ${blurb._html}
      </div>

      <jl-mdcontent>

        <a name="stanford"></a><h2>${stanfordBlurb.title}</h2>
        <jl-sectionhero class="sectionHero" src="${stanfordBlurb.image}"></jl-sectionhero>
        ${stanfordBlurb._html}
        <div class="clear"></div>

        <a name="works"></a><h2>${worksBlurb.title}</h2>
        <jl-sectionhero class="sectionHero" src="${worksBlurb.image}"></jl-sectionhero>
        ${worksBlurb._html}
        <div class="clear"></div>
        ${worksHtml}

      </jl-mdcontent>

    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project>} Project */
