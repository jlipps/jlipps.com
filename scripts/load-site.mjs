import { pathToFileURL } from 'url'
import axios from 'axios'

const BASE_URL = 'https://jlipps.com'
const URLS_TO_LOAD = [
  '/',
  '/about',
  '/linguistics',
  '/music',
  '/philosophy',
  '/projects',
  '/technology',
  '/theology',
]

async function loadUrls() {
  for (const url of URLS_TO_LOAD) {
    const fullUrl = `${BASE_URL}${url}`
    const start = Date.now()
    console.log(`Loading ${fullUrl}`)
    await axios.get(fullUrl)
    const elapsed = Date.now() - start
    console.log(`---> loaded in ${elapsed / 1000}s`)
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await loadUrls()
}
