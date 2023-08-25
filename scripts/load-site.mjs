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
    const {data} = await axios.get(fullUrl, {responseType: 'text', headers: {Accept: 'text/html'}})
    const elapsed = Date.now() - start
    console.log(`\t--> loaded in ${elapsed / 1000}s`)
    const matches = `${data}`.matchAll(/srcset="([^"]+)"/g)
    if (matches) {
      for (const match of matches) {
        const imgUrl = `${BASE_URL}${match[1]}`
        const loadImage = async () => {
          const start = Date.now()
          console.log(`\tLoading ${imgUrl}`)
          await axios.get(imgUrl, {responseType: 'blob', headers: {Accept: 'any'}})
          const elapsed = Date.now() - start
          console.log(`\t\t--> loaded in ${elapsed / 1000}s`)
        }
        try {
          await loadImage()
        } catch (err) {
          console.log(`\t\t--> got error, will retry once`)
          await loadImage()
        }
      }
    }
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await loadUrls()
}
