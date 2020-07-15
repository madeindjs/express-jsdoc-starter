import { sync } from 'glob'
import { union } from 'lodash'

/**
 * @param {string} location
 * @returns {string[]}
 */
export const globFiles = (location) => {
  return union([], sync(location))
}
