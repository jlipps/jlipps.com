import { getProject } from '../../shared/content.mjs'
import {prettifyProjectDates} from '../../shared/utils.mjs'

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const project = prettifyProjectDates(await getProject(req.params.id))
  return {
    json: {
      title: project.title ?? 'Project',
      project,
    }
  }
}
