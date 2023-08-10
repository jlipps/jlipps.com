import {staticImg} from '../shared/utils.mjs'

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
  const currentYear = new Date().getFullYear().toString()

  const aboutLinksHtml = aboutLinks.map(([title, href]) =>
    html`
      <a href="${href}" class="link-btn p1 flex justify-content-center align-items-center radius5 bg-navy font-title text2" style="width:calc(50% - (var(--space-1) / 2))">
        ${title}
      </a>
    `
  ).join('\n')
  const linksHtml = links.map(([title, href]) =>
    html`
      <a href="${href}" class="link-btn sb100 p1 flex justify-content-center align-items-center radius5 bg-mdgrey font-title text2" style="width:100%">
        ${title}
      </a>
    `
  ).join('\n')

  return html`
    <header class="bg-navy pb0">
      <h2 class="m-auto font-title text3 italic text-center"><a href="/">Jonathan Lipps</a></h2>
    </header>
    <main class="m-auto pbs5 pbe2 pi2 color-light font-sans">
      <div class="headshot mi-auto pi2">
        <img src="${staticImg(intro.image)}" alt="Headshot" class="circle border-navy border2">
      </div>
      <div class="p0 text-center text0 text-center color-navy">
        <jl-icon name="square-instagram" alt="My music-focused Instagram profile" href="https://instagram.com/jonathanlipps.music"></jl-icon>
        <jl-icon name="square-twitter" alt="My twitter profile" href="https://twitter.com/jlipps"></jl-icon>
        <jl-icon name="square-github" alt="My GitHub profile" href="https://github.com/jlipps"></jl-icon>
        <jl-icon name="linkedin" alt="My LinkedIn profile" href="https://linkedin.com/in/jlipps"></jl-icon>
        <jl-icon name="square-youtube" alt="My YouTube channel" href="https://www.youtube.com/@jonathanlipps"></jl-icon>
        <jl-icon name="square-facebook" alt="My Facebook profile" href="https://facebook.com/jlipps"></jl-icon>
      </div>
      <section class="p2 mbe2 text0 bg-navy radius5 font-light italic">
        ${intro._html}
      </section>
      <div class="flex flex-wrap gap1">
        ${aboutLinksHtml}
        ${linksHtml}
      </div>
      <footer class="p2 text-center color-light text-1">
        &copy; 2013 - ${currentYear} Jonathan Lipps
      </footer>
    </main>
  `
}
