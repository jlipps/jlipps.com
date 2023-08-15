/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLButtons({html, state}) {
  const {store, attrs} = state
  const {key} = attrs
  if (!key || !store[key]) {
    throw new Error(`Can't use <jl-buttons> without a store key for a buttons list`)
  }
  /** @type {import('../shared/utils.mjs').Button[]} */
  const buttons = store[key]
  const buttonsHtml = buttons.map((b) => html`
    <jl-button href="${b.href}" ${b.openNew ? 'target="_blank"' : ''} class="col-start-1 col-end-3 col-auto-lg">${b.title}</jl-button>`
  ).join('\n')

  return html`
    <div class="grid gap1 col-2 pbs2">
      ${buttonsHtml}
    </div>
  `
}
