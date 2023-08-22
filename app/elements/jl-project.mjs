/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLProject({html, state}) {
  const {context, attrs} = state
  /** @type {import('muaddib').ParsedObject<import('../shared/schema.mjs').Project} */
  const project = context[attrs.contextkey]
  const wrapWithLink = (/** @type {any} */wrapped) => project.link ? html`<a href="${project.link}" target="_blank">${wrapped}</a>`: wrapped
  let titleHtml = wrapWithLink(project.title)
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
          <div class="text-1"><span class="tag inline-tag">${project._startedAtText}</span> to <span class="tag">${project._finishedAtText}</span></div>
        </div>
      </div>
      <div>${project._html}</div>
    `
  }

  if (['talk', 'article', 'musicvideo', 'song', 'album'].includes(project.type)) {
    if (project.artist) {
      titleHtml = `${titleHtml} <span class="color-muted">by ${project.artist}</span>`
    }
    const specialLinks = ['video', 'slides', 'audio', 'article']
    let vidLink = project.links?.video
    const slideLink = project.links?.slides
    if (vidLink === '') {
      vidLink = project.link
    }

    let audioLink = project.links?.audio
    if (audioLink === '') {
      audioLink = project.link
    }

    let articleLink = project.links?.article
    if (articleLink === '') {
      articleLink = project.link
    }
    const vidLinkHtml = vidLink ? html`<jl-icon name="video" href="${vidLink}" target="_blank" alt="Video"></jl-icon>` : ''
    const audioLinkHtml = audioLink ? html`<jl-icon name="mic" href="${audioLink}" target="_blank" alt="Audio"></jl-icon>` : ''
    const slideLinkHtml = slideLink ? html`<jl-icon name="slides" href="${slideLink}" target="_blank" alt="Slides"></jl-icon>` : ''
    const articleLinkHtml = articleLink ? html`<jl-icon name="file" href="${articleLink}" target="_blank" alt="Article"></jl-icon>` : ''

    const otherLinkHtml = project.links ?
      Object.keys(project.links)
        .filter((linkName) => !specialLinks.includes(linkName))
        .map((linkName) => {
          return html`
            <span class="tag">
              <a href="${project.links[linkName]}" target="_blank">${linkName}</a>
            </span>`
        }).join('\n')
      : ''
    const mediaIcons = `${vidLinkHtml}${audioLinkHtml}${slideLinkHtml}${articleLinkHtml}`
    const imgHtml = project.image ? `<img class="projectHeroImg radius5" src="${project.image}" />` : ''
    const eventHtml = project.event ? html`<span class="tag">${project.event}</span>` : ''
    const publicationHtml = project.publication ? html`<span class="tag">${project.publication}</span>` : ''
    const locationHtml = project.location ? html`<span class="tag">${project.location}</span>` : ''

    return html`
      <style>
        :host {
          --hero-width: 28%;
        }

        jl-icon svg {
          fill: var(--lightblue);
          height: 1.5rem;
          width: 1.5rem;
          margin-inline-end: 0.5rem;
        }
        .tag {
          margin-inline-end: 0.5rem;
          margin-block-end: 0.25rem;
        }
        .tag.inline-tag {
          margin-inline-end: 0;
        }
        .projectHeroImg {
          width: 100%;
          flex: 0 0 100%;
          align-self: flex-start;
          margin-inline: auto;
          margin-block-start: var(--space--1);
        }

        .projectText {
        }

        @media only screen and (min-width:44em) {
          .projectHeroImg {
            width: calc(var(--hero-width) - var(--space--1));
            flex: 1 1 calc(var(--hero-width) - var(--space--1));
            margin-inline-end: var(--space--1);
            margin-block-start: calc(var(--space--1) + 0.25rem);
          }
          .projectText {
            flex: 1 1 calc(100% - var(--hero-width));
          }
        }
      </style>

      <h4>${titleHtml}</h4>

      <div class="text-1 flex align-items-center flex-wrap">
        ${mediaIcons}
        ${eventHtml}
        ${publicationHtml}
        <span class="tag">${project._dateText}</span>
        ${locationHtml}
        ${otherLinkHtml}
      </div>
      <div class="flex flex-row flex-wrap align-items-top justify-content-start align-self-center">
        ${imgHtml}
        <div class="projectText">${project._html}</div>
      </div>
    `
  }

  throw new Error(`Don't know how to display project with type '${project.type}'`)
}
