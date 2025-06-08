/**
 * slashed paint effect
 * @fileoverview Individual export for slashed paint effect
 * This file contains the embedded styles for optimal tree shaking
 */

/**
 * slashed paint effect styles
 * @type {Object}
 */
const slashedStyles = {
  backgroundImage: 'linear-gradient(135deg, rgb(128, 0, 0) 20%, rgb(143, 0, 0) 25%, rgb(255, 0, 0) 50%, rgb(143, 0, 0) 75%, rgb(128, 0, 0) 80%)',
  filter: 'drop-shadow(rgb(245, 0, 0) 0px 0px 0.1px) drop-shadow(rgb(66, 0, 0) 1px 1px 0.1px)',
  opacity: '1',
  webkitFilter: 'drop-shadow(rgb(245, 0, 0) 0px 0px 0.1px) drop-shadow(rgb(66, 0, 0) 1px 1px 0.1px)',
  webkitOpacity: '1'
}

/**
 * slashed paint effect
 * @type {Object}
 */
export const slashed = slashedStyles

export default slashed
