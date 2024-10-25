import { pathToFileURL } from 'url'
import axios from 'axios'

const isLocal = process.argv.includes('--local')
const BASE_URL = isLocal ? 'http://localhost:3333' : 'https://jlipps.com'
const URLS_TO_LOAD = [
  '/',
  '/projects',
  '/about',
  '/technology',
  '/music',
  '/linguistics',
  '/philosophy',
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
        for (const size of match[1].split(', ')) {
          const imgUrl = `${BASE_URL}${size.split(' ')[0]}`
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
            try {
              await loadImage()
            } catch (err2) {
              console.log(`\t\t--> got error a second time, aborting`)
              console.log(`\t\t--> ${err2.message}`)
              throw new Error(err2.status)
            }
          }
        }
      }
    }
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await loadUrls()
}
