import { getBlurb, getProjectsByType } from '../shared/content.mjs'
import {compareDate, prettifyProjectDates} from '../shared/utils.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(/*req*/) {
  const blurb = await getBlurb('music')
  const projectsBlurb = await getBlurb('music-projects')
  const projects = [
    ...(await getProjectsByType('musicvideo')),
    ...(await getProjectsByType('song')),
    ...(await getProjectsByType('album')),
  ].sort(compareDate).reverse().map(prettifyProjectDates)
  return {
    json: {
      title: 'Music',
      blurb,
      projectsBlurb,
      projects,
    }
  }
}
