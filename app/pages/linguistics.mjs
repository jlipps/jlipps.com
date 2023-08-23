/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {
    blurb,
    oxfordBlurb,
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

        <a name="oxford"></a><h2>${oxfordBlurb.title}</h2>
        <img class="sectionHero" src="${oxfordBlurb.image}" />
        ${oxfordBlurb._html}
        <div class="clear"></div>

        <a name="works"></a><h2>${worksBlurb.title}</h2>
        <img class="sectionHero" src="${worksBlurb.image}" />
        ${worksBlurb._html}
        <div class="clear"></div>
        ${worksHtml}

      </jl-mdcontent>

    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project>} Project */
