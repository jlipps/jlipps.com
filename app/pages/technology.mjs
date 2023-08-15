/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store} = state
  const {
    blurb,
    highlightsBlurb,
    speakingBlurb,
    philosophyBlurb,
  } = store
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
        </div>

        <div class="clear">
          <h2>${speakingBlurb.title}</h2>
          <img class="sectionHero" src="${speakingBlurb.image}" />
          ${speakingBlurb._html}
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
