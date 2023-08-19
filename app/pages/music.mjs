/** @type {import('@enhance/types').EnhanceElemFn} */
export default function aboutPage({html, state}) {
  const {store, context} = state
  const {
    blurb,
    projectsBlurb,
    projects,
  } = store

  const projectsHtml = /** @type {import('./technology.mjs').Project[]} */(projects).map((p) => {
    context[p.id] = p
    return html`<jl-project contextkey="${p.id}"></jl-project>`
  }).join('\n')

  return html`
    <jl-layout hero="${blurb.image}">
      <div class="blurb bg-navy radius5 pb-2 pi-2">
        ${blurb._html}
      </div>

      <jl-mdcontent>
        <div>
          <a name="projects"></a><h2>${projectsBlurb.title}</h2>
          ${projectsBlurb._html}
          ${projectsHtml}
        </div>
      </jl-mdcontent>

    </jl-layout>
  `
}
