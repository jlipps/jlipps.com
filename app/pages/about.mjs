/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store} = state
  const {about} = store
  return html`
    <jl-layout hero="${about.image}">
      <jl-mdcontent>${about._html}</jl-mdcontent>
    </jl-layout>
  `
}
