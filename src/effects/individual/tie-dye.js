/**
 * tie-dye paint effect
 * @fileoverview Individual export for tie-dye paint effect
 * This file contains the embedded styles for optimal tree shaking
 */

/**
 * tie-dye paint effect styles
 * @type {Object}
 */
const tieDyeStyles = {
  backgroundImage: 'repeating-radial-gradient(circle, rgb(82, 183, 255) 0%, rgb(255, 241, 92) 20%, rgb(254, 124, 236) 40%, rgb(93, 184, 248) 60%)',
  filter: 'drop-shadow(rgb(254, 124, 236) 0px 0px 0.1px) drop-shadow(rgb(190, 51, 255) 0px 0px 4px)',
  opacity: '1',
  webkitFilter: 'drop-shadow(rgb(254, 124, 236) 0px 0px 0.1px) drop-shadow(rgb(190, 51, 255) 0px 0px 4px)',
  webkitOpacity: '1'
}

/**
 * tie-dye paint effect
 * @type {Object}
 */
export const tieDye = tieDyeStyles

export default tieDye
