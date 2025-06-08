/**
 * rosé paint effect
 * @fileoverview Individual export for rosé paint effect
 * This file contains the embedded styles for optimal tree shaking
 */

/**
 * rosé paint effect styles
 * @type {Object}
 */
var roseStyles = {
  backgroundImage: 'repeating-radial-gradient(circle, rgb(255, 255, 255) 17%, rgb(255, 255, 255) 19%, rgb(255, 184, 215) 34%)',
  filter: 'drop-shadow(rgb(255, 184, 242) 0px 0px 1px) drop-shadow(rgb(254, 144, 144) 1px 1px 0.5px) drop-shadow(rgb(106, 36, 36) 0.5px 0.5px 0.5px) drop-shadow(rgb(255, 148, 226) 0.5px 0.5px 0.3px)',
  opacity: '1',
  webkitFilter: 'drop-shadow(rgb(255, 184, 242) 0px 0px 1px) drop-shadow(rgb(254, 144, 144) 1px 1px 0.5px) drop-shadow(rgb(106, 36, 36) 0.5px 0.5px 0.5px) drop-shadow(rgb(255, 148, 226) 0.5px 0.5px 0.3px)',
  webkitOpacity: '1'
};

/**
 * rosé paint effect
 * @type {Object}
 */
export var rose = roseStyles;
export default rose;