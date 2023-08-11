/** @type {import('@enhance/types').EnhanceElemFn} */
export default function indexPage({html, state}) {
  const {store} = state
  const {intro} = store
  const aboutLinks = [
    ['About Me', '/about'],
    ['Blog', 'https://blog.jlipps.com'],
  ]
  const links = [
    ['Technology', '/technology'],
    ['Music', '/music'],
    ['Philosophy', '/philosophy'],
    ['Theology', '/theology'],
    ['Linguistics', '/linguistics'],
    ['Photos', '/photos'],
  ]

  const aboutLinksHtml = aboutLinks.map(([title, href]) =>
    html`
      <a href="${href}" class="link-btn p1 flex justify-content-center align-items-center radius5 bg-navy font-title text2">
        ${title}
      </a>
    `
  ).join('\n')
  const linksHtml = links.map(([title, href]) =>
    html`
      <a href="${href}" class="link-btn sb100 p1 flex justify-content-center align-items-center radius5 bg-mdgrey font-title text2 col-start-1 col-end-3 col-auto-lg">
        ${title}
      </a>
    `
  ).join('\n')

  return html`
    <style>
      jl-icon svg {
        fill: var(--navy);
      }

      a:hover.link-btn {
        text-decoration: none;
        border: 2px solid var(--light);
      }
    </style>

    <jl-layout hero="${intro.image}">
      <div class="mbe2 text-center text0 text-center color-navy">
        <jl-icon name="instagram" alt="My music-focused Instagram profile" href="https://instagram.com/jonathanlipps.music"></jl-icon>
        <jl-icon name="twitter" alt="My twitter profile" href="https://twitter.com/jlipps"></jl-icon>
        <jl-icon name="github" alt="My GitHub profile" href="https://github.com/jlipps"></jl-icon>
        <jl-icon name="linkedin" alt="My LinkedIn profile" href="https://linkedin.com/in/jlipps"></jl-icon>
        <jl-icon name="youtube" alt="My YouTube channel" href="https://www.youtube.com/@jonathanlipps"></jl-icon>
        <jl-icon name="facebook" alt="My Facebook profile" href="https://facebook.com/jlipps"></jl-icon>
      </div>
      <section class="p2 mbe2 text0 bg-navy radius5 font-light italic">
        ${intro._html}
      </section>
      <div class="grid gap1 col-2-lg">
        ${aboutLinksHtml}
        ${linksHtml}
      </div>
    </jl-layout>
  `
}
