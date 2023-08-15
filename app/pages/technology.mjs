/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store} = state
  const {blurb} = store
  return html`
    <jl-layout hero="${blurb.image}">
      <div class="blurb bg-navy radius5 pb-2 pi-2">
        ${blurb._html}
      </div>
      <jl-buttons key="buttons"></jl-buttons>
    </jl-layout>
  `
}
