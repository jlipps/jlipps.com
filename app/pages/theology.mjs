/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {
    blurb,
    backgroundBlurb,
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

        <a name="background"></a><h2>${backgroundBlurb.title}</h2>
        <jl-sectionhero class="sectionHero" src="${backgroundBlurb.image}"></jl-sectionhero>
        ${backgroundBlurb._html}
        <div class="clear"></div>

        <a name="works"></a><h2>${worksBlurb.title}</h2>
        ${worksHtml}

      </jl-mdcontent>

    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project>} Project */
