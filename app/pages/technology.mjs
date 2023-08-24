import { staticFile } from '../shared/utils.mjs'

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
    articles,
  } = store

  /** @type {import('../shared/utils.mjs').Button[]} */
  context.buttons = [{
    title: highlightsBlurb.title,
    href: '#highlights',
  }, {
    title: speakingBlurb.title,
    href: '#speaking',
  }, {
    title: philosophyBlurb.title,
    href: '#philosophy',
  }, {
    title: 'Résumé',
    href: staticFile('downloads/Jonathan-Lipps-CV.pdf'),
    openNew: true,
  }, {
    title: 'GitHub',
    href: 'https://github.com/jlipps',
    openNew: true,
  }, {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/jlipps',
    openNew: true,
  }]

  const highlightsHtml = /** @type {Project[]} */(highlights).map((h) => {
    context[h.id] = h
    return html`<jl-project contextkey="${h.id}"></jl-project>`
  }).join('\n')

  const talksHtml = /** @type {Project[]} */(talks).map((t) => {
    context[t.id] = t
    return html`<jl-project contextkey="${t.id}"></jl-project>`
  }).join('\n')

  const articlesHtml = /** @type {Project[]} */(articles).map((a) => {
    context[a.id] = a
    return html`<jl-project contextkey="${a.id}"></jl-project>`
  }).join('\n')

  return html`
    <jl-layout hero="${blurb.image}">
      <div class="blurb bg-navy radius5 pb-2 pi-2">
        ${blurb._html}
      </div>

      <jl-buttons key="buttons"></jl-buttons>

      <jl-mdcontent>

        <div>
          <a name="highlights"></a><h2>${highlightsBlurb.title}</h2>
          <jl-sectionhero class="sectionHero" src="${highlightsBlurb.image}"></jl-sectionhero>
          ${highlightsBlurb._html}
          <div class="clear"></div>
          ${highlightsHtml}
        </div>

        <div>
          <a name="speaking"></a><h2>${speakingBlurb.title}</h2>
          <jl-sectionhero class="sectionHero" src="${speakingBlurb.image}"></jl-sectionhero>
          ${speakingBlurb._html}
          <div class="clear"></div>
          ${talksHtml}
        </div>

        <div>
          <a name="philosophy"></a><h2>${philosophyBlurb.title}</h2>
          <jl-sectionhero class="sectionHero" src="${philosophyBlurb.image}"></jl-sectionhero>
          ${philosophyBlurb._html}
          <div class="clear"></div>
          ${articlesHtml}
        </div>

      </jl-mdcontent>

    </jl-layout>
  `
}

/** @typedef {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project>} Project */
