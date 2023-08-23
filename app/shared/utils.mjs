import arc from '@architect/functions'

const myFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
})

const mdyFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

/**
 * @param {string} img
 */
export function staticImg(img) {
  return arc.static(`/img/${img}`)
}

/**
 * @param {string} style
 */
export function staticStyle(style) {
  return arc.static(`/styles/${style}`)
}

/**
 * @param {string} file
 */
export function staticFile(file) {
  if (file[0] !== '/') {
    file = `/${file}`
  }
  return arc.static(file)
}

/**
 * @param {import('./content.mjs').DecoratedItem<import('./schema.mjs').Project>} a
 * @param {import('./content.mjs').DecoratedItem<import('./schema.mjs').Project>} b
 */
export function compareDate(a, b) {
  if (a._date && b._date) {
    return a._date < b._date ? -1 : 1
  }
  if ((a._date && (b._finishedAt || b._startedAt)) ||
      (b._date && (a._finishedAt || a._startedAt))) {
    // we have a mix of punctiliar date and span date
    if (a._date) {
      // a is punctiliar and b is span
      if (b._finishedAt) {
        return a._date < b._finishedAt ? - 1 : 1
      }
      return -1
    } else if (b._date) {
      if (a._finishedAt) {
        return a._finishedAt < b._date ? -1 : 1
      }
      return 1
    }
  }
  if (!a._startedAt || !b._startedAt) {
    throw new Error(`Need a date or startedAt to compare these projects`)
  }
  return compareStartedFinished(a, b);
}

/**
 * @param {import('./content.mjs').DecoratedItem<import('./schema.mjs').Project>} a
 * @param {import('./content.mjs').DecoratedItem<import('./schema.mjs').Project>} b
 */
export function compareStartedFinished(a, b) {
  if (!a._finishedAt && !b._finishedAt) {
    if (!a._startedAt || !b._startedAt) {
      throw new Error(`jobs need at least a startedAt`)
    }
    return a._startedAt < b._startedAt ? -1 : 1
  }
  if (!a._finishedAt) {
    return 1
  }
  if (!b._finishedAt) {
    return -1
  }
  return a._finishedAt < b._finishedAt ? -1 : 1
}

/**
 * @param {Date|undefined} date
 */
export function prettyYearMonth(date) {
  return date ? myFormatter.format(date) : ''
}

/**
 * @param {Date|undefined} date
 */
export function prettyDate(date) {
  return date ? mdyFormatter.format(date) : ''
}

/** @param {import('../shared/content.mjs').DecoratedItem<import('../shared/schema.mjs').Project>} project */
export function prettifyProjectDates(project) {
  return {
    ...project,
    _dateText: project._date ? prettyDate(project._date) : undefined,
    _startedAtText: project._startedAt? prettyYearMonth(project._startedAt) : undefined,
    _finishedAtText: project._finishedAt ? prettyYearMonth(project._finishedAt) : 'now',
  }
}

/** @typedef {{
 *    href: string,
 *    title: string,
 *    openNew?: boolean,
 *    isPrimary?: boolean,
 *  }} Button
*/
