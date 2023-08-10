import { staticStyle, staticFile } from './shared/utils.mjs'
import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head () {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Jonathan Lipps</title>
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
