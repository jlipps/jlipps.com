import { staticFile } from '../shared/utils.mjs'

/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {about, bio, profBio, delights, whySite, tech} = store
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
        <a name="why-site"></a><h2>${whySite.title}</h2>
        <jl-sectionhero src="${whySite.image}"></jl-sectionhero>
        ${whySite._html}
        <a name="bio"></a><h2>${bio.title}</h2>
        <jl-sectionhero class="sectionHero" src="${bio.image}"></jl-sectionhero>
        ${bio._html}
        <h2>${delights.title}</h2>
        <jl-sectionhero class="sectionHero" src="${delights.image}"></jl-sectionhero>
        ${delights._html}
        <a name="professional-bio"></a><h2>${profBio.title}</h2>
        ${profBio._html}
        <a name="about-tech"></a><h2>${tech.title}</h2>
        <jl-sectionhero class="sectionHero" src="${tech.image}"></jl-sectionhero>
        ${tech._html}
      </jl-mdcontent>
    </jl-layout>
  `
}
