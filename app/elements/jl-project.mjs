/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLProject({html, state}) {
  const {context, attrs} = state
  /** @type {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project} */
  const project = context[attrs.contextkey]
  const wrapWithLink = (/** @type {any} */wrapped) => project.link ? html`<a href="${project.link}">${wrapped}</a>`: ''
  const titleHtml = wrapWithLink(project.title)
  const imgHtml = wrapWithLink(project.image ?
    html`
      <style>
        .projectImg {
          border-radius: 5px;
          max-width: 3rem;
          margin-inline-end: var(--space--2);
        }
      </style>
      <img class="projectImg" src="${project.image}" />
    ` :
    '')

  if (project.type === 'job') {
    return html`
      <h3>${titleHtml}</h3>
      <div class="flex align-items-center">
        ${imgHtml}
        <div>
          <div class="text-1"><strong>${project.role ?? ''}</strong></div>
          <div class="text-1"><span class="tag">${project._startedAtText}</span> to <span class="tag">${project._finishedAtText}</span></div>
        </div>
      </div>
      <div>${project._html}</div>
    `
  }

  if (project.type === 'talk') {
    let vidLink = project?.links?.video
    const slideLink = project?.links?.slides
    if (vidLink === '') {
      vidLink = project.link
    }
    const vidLinkHtml = vidLink ? html`<jl-icon name="video" href="${vidLink}" alt="Video"></jl-icon>` : ''
    const slideLinkHtml = slideLink ? html`<jl-icon name="slides" href="${slideLink}" alt="Slides"></jl-icon>` : ''
    const vidSlidesHtml = (vidLinkHtml || slideLinkHtml) ? `${vidLinkHtml}${slideLinkHtml}` : ''

    return html`
      <style>
        jl-icon svg {
          fill: var(--white);
          height: 1.5rem;
          width: 1.5rem;
          margin-inline-end: 0.5rem;
        }
        .tag {
          margin-inline-end: 0.5rem;
          margin-block-end: 0.25rem;
        }
      </style>
      <h3>${titleHtml}</h3>
      <div class="text-1 flex align-items-center flex-wrap">
        ${vidSlidesHtml}
        <span class="tag">${project.event}</span>
        <span class="tag">${project._dateText}</span>
        <span class="tag">${project.location}</span>
      </div>
      <div>${project._html}</div>
    `
  }

  throw new Error(`Don't know how to display project with type '${project.type}'`)
}
