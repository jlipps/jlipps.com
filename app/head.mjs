import { staticStyle, staticFile } from './shared/utils.mjs'
import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

const isProd = process.env.ARC_ENV === 'production'

/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head(state) {
  const {store} = state
  const {title} = store
  const titleExtra = title ? `: ${title}` : ''

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
      <title>Jonathan Lipps${titleExtra}</title>
      ${linkTag()}
      <link rel="stylesheet" href="${staticStyle('main.css')}" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@300&display=swap" rel="stylesheet">
      <link rel="icon" href="${staticFile('favicon.png')}" />
      <meta name="description" content="The personal site of Jonathan Lipps: technologist, musician, philosopher, theologian, writer, and linguist." />
    </head>
`
}
