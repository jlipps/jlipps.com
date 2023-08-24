import { staticStyle, staticFile, staticImg } from './shared/utils.mjs'
import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

const isProd = process.env.ARC_ENV === 'production'

const DESC = `Hi, I'm Jonathan! And this is my personal homepage, where I'm excited to share with you my various projects, hobbies, interests, and more. Main categories include my work in technology, music, philosophy, theology, and linguistics.`

const CARD = staticImg('jl-card.jpg')

/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head(state) {
  const {store} = state
  const {title, urlPath} = store
  const titleExtra = title ? `: ${title}` : ''
  const fullTitle = `Jonathan Lipps${titleExtra}`
  const ogUrl = `https://jlipps.com${urlPath ?? '/'}`

  const gtagHtml = isProd ? `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T0CKBF7PMX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-T0CKBF7PMX');
    </script>
  ` : ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${gtagHtml}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${fullTitle}</title>
      ${linkTag()}
      <link rel="stylesheet" href="${staticStyle('main.css')}" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@300&display=swap" rel="stylesheet">
      <link rel="icon" href="${staticFile('favicon.png')}" />
      <meta name="description" content="${DESC}" />

      <!-- Twitter -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@jlipps">
      <meta name="twitter:title" content="${fullTitle}">
      <meta name="twitter:description" content="${DESC}">
      <meta name="twitter:creator" content="@jlipps">
      <meta name="twitter:image" content="${CARD}">

      <!-- Open Graph -->
      <meta property="og:title" content="${fullTitle}" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="${ogUrl}" />
      <meta property="og:image" content="${CARD}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:description" content="${DESC}" />
      <meta property="og:site_name" content="jlipps.com" />
    </head>
`
}
