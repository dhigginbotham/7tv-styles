/**
 * scorched paint effect
 * @fileoverview Individual export for scorched paint effect
 * This file contains the embedded styles for optimal tree shaking
 */

/**
 * scorched paint effect styles
 * @type {Object}
 */
const scorchedStyles = {
  backgroundImage: 'repeating-linear-gradient(135deg, rgb(188, 21, 54) 0%, rgb(247, 29, 18) 12%, rgb(255, 131, 12) 12%, rgb(247, 29, 18) 23%, rgb(255, 131, 12) 23%, rgb(255, 131, 12) 33%)',
  filter: 'drop-shadow(rgb(204, 31, 0) 0px 0px 0.1px)',
  opacity: '1',
  webkitFilter: 'drop-shadow(rgb(204, 31, 0) 0px 0px 0.1px)',
  webkitOpacity: '1'
}

/**
 * scorched paint effect
 * @type {Object}
 */
export const scorched = scorchedStyles

export default scorched
