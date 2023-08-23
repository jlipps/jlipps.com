import { staticFile } from '../shared/utils.mjs'

/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {about, bio, profBio, delights} = store
  /** @type {import('../shared/utils.mjs').Button[]} */
  context.buttons = [{
    title: 'Professional Bio',
    href: '#professional-bio',
  }, {
    title: 'Résumé',
    href: staticFile('downloads/Jonathan-Lipps-CV.pdf'),
  }, {
    title: 'Headshot',
    href: staticFile('downloads/jlipps-headshot.jpg'),
  }, {
    title: 'Blog',
    href: 'https://jlipps.com',
    openNew: true,
  }]
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
        <a name="professional-bio"></a><h2>${profBio.title}</h2>
        ${profBio._html}
      </jl-mdcontent>
    </jl-layout>
  `
}
