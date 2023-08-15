/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store} = state
  const {about, bio, delights} = store
  return html`
    <jl-layout hero="${about.image}">
      <jl-socials></jl-socials>
      <jl-mdcontent>
        <section>${about._html}</section>
        <jl-buttons key="buttons"></jl-buttons>
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
