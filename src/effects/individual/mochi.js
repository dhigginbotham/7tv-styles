/**
 * mochi paint effect
 * @fileoverview Individual export for mochi paint effect
 * This file contains the embedded styles for optimal tree shaking
 */

/**
 * mochi paint effect styles
 * @type {Object}
 */
const mochiStyles = {
  backgroundImage: 'radial-gradient(circle, rgb(255, 173, 237) 0%, rgb(255, 128, 221) 20%, rgb(255, 255, 255) 50%, rgb(185, 138, 255) 80%, rgb(163, 102, 255) 100%)',
  filter: 'drop-shadow(rgb(76, 0, 255) 0px 0px 0.1px)',
  opacity: '1',
  webkitFilter: 'drop-shadow(rgb(76, 0, 255) 0px 0px 0.1px)',
  webkitOpacity: '1'
}

/**
 * mochi paint effect
 * @type {Object}
 */
export const mochi = mochiStyles

export default mochi
