/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {
    blurb,
    highlightsBlurb,
    highlights,
    speakingBlurb,
    talks,
    philosophyBlurb,
  } = store


  const highlightsHtml = /** @type {Project[]} */(highlights).map((h) => {
    context[h.id] = h
    return html`<jl-project contextkey="${h.id}"></jl-project>`
  }).join('\n')

  const talksHtml = /** @type {Project[]} */(talks).map((t) => {
    context[t.id] = t
    return html`<jl-project contextkey="${t.id}"></jl-project>`
  }).join('\n')

  return html`
    <jl-layout hero="${blurb.image}">
      <div class="blurb bg-navy radius5 pb-2 pi-2">
        ${blurb._html}
      </div>

      <jl-buttons key="buttons"></jl-buttons>

      <jl-mdcontent>

        <div>
          <h2>${highlightsBlurb.title}</h2>
          <img class="sectionHero" src="${highlightsBlurb.image}" />
          ${highlightsBlurb._html}
          ${highlightsHtml}
        </div>

        <div class="clear">
          <h2>${speakingBlurb.title}</h2>
          <img class="sectionHero" src="${speakingBlurb.image}" />
          ${speakingBlurb._html}
          ${talksHtml}
        </div>

        <div class="clear">
          <h2>${philosophyBlurb.title}</h2>
          <img class="sectionHero" src="${philosophyBlurb.image}" />
          ${philosophyBlurb._html}
        </div>

      </jl-mdcontent>

    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project>} Project */
