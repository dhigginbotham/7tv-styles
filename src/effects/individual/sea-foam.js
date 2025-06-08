/**
 * sea-foam paint effect
 * @fileoverview Individual export for sea-foam paint effect
 * This file contains the embedded styles for optimal tree shaking
 */

/**
 * sea-foam paint effect styles
 * @type {Object}
 */
const seaFoamStyles = {
  backgroundImage: 'repeating-linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(117, 255, 145) 20%, rgb(54, 247, 163) 25%, rgb(77, 254, 219) 35%)',
  filter: 'drop-shadow(rgb(0, 125, 179) 0px 0px 0.1px) drop-shadow(rgb(0, 179, 255) 0px 0px 4px)',
  opacity: '1',
  webkitFilter: 'drop-shadow(rgb(0, 125, 179) 0px 0px 0.1px) drop-shadow(rgb(0, 179, 255) 0px 0px 4px)',
  webkitOpacity: '1'
}

/**
 * sea-foam paint effect
 * @type {Object}
 */
export const seaFoam = seaFoamStyles

export default seaFoam
