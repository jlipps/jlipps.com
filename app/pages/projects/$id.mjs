/** @type {import('@enhance/types').EnhanceElemFn} */
export default function projectPage({html, state}) {
  const {store, context} = state
  const {project} = store

  context[project.id] = project

  return html`
    <jl-layout>
      <jl-mdcontent>
        <jl-project hidetitle="true" contextkey="${project.id}"></jl-project>
      </jl-mdcontent>

      <div class="flex align-items-center">
        <jl-button class="mi-auto mbs1" href="/projects">See all projects...</jl-button>
      </div>
    </jl-layout>
  `
}
