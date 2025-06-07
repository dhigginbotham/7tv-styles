function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Dynamic gradient scaling utility for optimal visual impact at any font size
 *
 * This module provides mathematical algorithms for scaling CSS gradients based on element
 * dimensions to maintain consistent visual impact across different text sizes. Developed
 * by the vibe coding team with sick ass scaling algorithms.
 *
 * @fileoverview Gradient scaling utilities for 7TV paint effects
 * @author Vibe Coding Team
 */

/** @constant {number} BASE_FONT_SIZE - Reference font size for scaling calculations */
var BASE_FONT_SIZE = 16;

/** @constant {number} BASE_WIDTH - Reference width for scaling calculations */
var BASE_WIDTH = 100;

/** @constant {number} BASE_HEIGHT - Reference height for scaling calculations */
var BASE_HEIGHT = 16;

/**
 * Parse CSS gradient string to extract components for scaling
 *
 * @function parseGradient
 * @param {string} gradientString - CSS gradient string (linear-gradient, radial-gradient, etc.)
 * @returns {Object|null} Parsed gradient object or null if parsing fails
 * @returns {string} returns.type - Gradient type (linear-gradient, radial-gradient, etc.)
 * @returns {number|null} returns.angle - Gradient angle in degrees (for linear gradients)
 * @returns {Array<Object>} returns.colorStops - Array of color stop objects
 * @returns {string} returns.original - Original gradient string
 *
 * @example
 * const parsed = parseGradient('linear-gradient(45deg, red 0%, blue 100%)')
 * // Returns: { type: 'linear-gradient', angle: 45, colorStops: [...], original: '...' }
 */
function parseGradient(gradientString) {
  if (!gradientString) return null;

  // Match linear-gradient, radial-gradient, repeating-linear-gradient, etc.
  var gradientMatch = gradientString.match(/(linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient)\s*\((.*)\)/);
  if (!gradientMatch) return null;
  var _gradientMatch = _slicedToArray(gradientMatch, 3),
    type = _gradientMatch[1],
    content = _gradientMatch[2];

  // Parse angle for linear gradients
  var angle = null;
  var cleanContent = content;
  if (type.includes('linear')) {
    var angleMatch = content.match(/^(\d+(?:\.\d+)?deg)\s*,\s*(.*)/);
    if (angleMatch) {
      angle = parseFloat(angleMatch[1]);
      cleanContent = angleMatch[2];
    }
  }

  // Parse color stops
  var colorStops = [];
  var stopMatches = cleanContent.match(/rgb\([^)]+\)\s*\d*%?/g) || [];
  stopMatches.forEach(function (stop) {
    var percentMatch = stop.match(/(\d+)%/);
    var colorMatch = stop.match(/(rgb\([^)]+\))/);
    if (colorMatch) {
      colorStops.push({
        color: colorMatch[1],
        position: percentMatch ? parseInt(percentMatch[1]) : null
      });
    }
  });
  return {
    type: type,
    angle: angle,
    colorStops: colorStops,
    original: gradientString
  };
}

/**
 * Parse CSS drop-shadow filter string to extract shadow components
 *
 * @function parseDropShadow
 * @param {string} filterString - CSS filter string containing drop-shadow functions
 * @returns {Array<Object>} Array of parsed shadow objects
 * @returns {string} returns[].color - Shadow color (rgb format)
 * @returns {string} returns[].offsetX - Horizontal offset with units
 * @returns {string} returns[].offsetY - Vertical offset with units
 * @returns {string} returns[].blurRadius - Blur radius with units
 * @returns {string} returns[].original - Original drop-shadow string
 *
 * @example
 * const shadows = parseDropShadow('drop-shadow(rgb(255, 0, 0) 2px 2px 4px)')
 * // Returns: [{ color: 'rgb(255, 0, 0)', offsetX: '2px', offsetY: '2px', blurRadius: '4px', ... }]
 */
function parseDropShadow(filterString) {
  if (!filterString) return [];
  var shadows = [];
  var shadowMatches = filterString.match(/drop-shadow\([^)]+\)/g) || [];
  shadowMatches.forEach(function (shadow) {
    var match = shadow.match(/drop-shadow\(\s*(rgb\([^)]+\))\s+([^)]+)\)/);
    if (match) {
      var _match = _slicedToArray(match, 3),
        color = _match[1],
        params = _match[2];
      var paramParts = params.trim().split(/\s+/);
      shadows.push({
        color: color,
        offsetX: paramParts[0] || '0px',
        offsetY: paramParts[1] || '0px',
        blurRadius: paramParts[2] || '0px',
        original: shadow
      });
    }
  });
  return shadows;
}

/**
 * Scale gradient angle based on element dimensions using perceptual scaling
 *
 * @function scaleAngle
 * @param {number|null} angle - Gradient angle in degrees
 * @param {Object} scaleFactors - Scaling factors for different dimensions
 * @param {number} scaleFactors.width - Width scale factor
 * @param {number} scaleFactors.height - Height scale factor
 * @returns {number|null} Scaled angle in degrees, or null if input angle was null
 *
 * @example
 * const scaledAngle = scaleAngle(45, { width: 0.5, height: 0.8 })
 * // Returns scaled angle using average of width/height factors with power of 0.6
 */
function scaleAngle(angle, scaleFactors) {
  if (angle === null) return null;

  // Consider both width and height for angle scaling
  var avgScaleFactor = (scaleFactors.width + scaleFactors.height) / 2;
  // Use power of 0.6 for perceptual scaling
  return angle * Math.pow(avgScaleFactor, 0.6);
}

/**
 * Scale gradient stop positions based on primary dimension
 */
function scaleStops(colorStops, scaleFactors) {
  if (!colorStops.length) return colorStops;
  return colorStops.map(function (stop) {
    if (stop.position === null) return stop;

    // Use width scale factor for horizontal gradients, height for vertical
    // For now, use average of both dimensions
    var avgScaleFactor = (scaleFactors.width + scaleFactors.height) / 2;
    // Use power of 0.4 for stop compression
    var scaledPosition = stop.position * Math.pow(avgScaleFactor, 0.4);
    return _objectSpread(_objectSpread({}, stop), {}, {
      position: Math.max(0, Math.min(100, scaledPosition))
    });
  });
}

/**
 * Scale drop-shadow blur radius
 */
function scaleBlur(blurRadius, fontSizeRatio) {
  var match = blurRadius.match(/^([0-9.]+)(px|em|rem)$/);
  if (!match) return blurRadius;
  var _match2 = _slicedToArray(match, 3),
    value = _match2[1],
    unit = _match2[2];
  var scaledValue = parseFloat(value) * fontSizeRatio;
  return "".concat(scaledValue.toFixed(2)).concat(unit);
}

/**
 * Rebuild gradient string with scaled values
 */
function rebuildGradient(parsed, scaleFactors) {
  if (!parsed) return null;
  var type = parsed.type,
    angle = parsed.angle,
    colorStops = parsed.colorStops;
  var scaledAngle = scaleAngle(angle, scaleFactors);
  var scaledStops = scaleStops(colorStops, scaleFactors);
  var gradientParts = [];

  // Add angle for linear gradients
  if (type.includes('linear') && scaledAngle !== null) {
    gradientParts.push("".concat(scaledAngle.toFixed(1), "deg"));
  }

  // Add color stops
  var stopStrings = scaledStops.map(function (stop) {
    if (stop.position !== null) {
      return "".concat(stop.color, " ").concat(stop.position.toFixed(1), "%");
    }
    return stop.color;
  });
  gradientParts = gradientParts.concat(stopStrings);
  return "".concat(type, "(").concat(gradientParts.join(', '), ")");
}

/**
 * Rebuild filter string with scaled shadows
 */
function rebuildFilter(shadows, fontSizeRatio) {
  if (!shadows.length) return null;
  var scaledShadows = shadows.map(function (shadow) {
    var scaledBlur = scaleBlur(shadow.blurRadius, fontSizeRatio);
    return "drop-shadow(".concat(shadow.color, " ").concat(shadow.offsetX, " ").concat(shadow.offsetY, " ").concat(scaledBlur, ")");
  });
  return scaledShadows.join(' ');
}

/**
 * Main function to scale gradient styles based on element dimensions
 *
 * This is the primary export that applies dynamic scaling to CSS gradient styles
 * based on element dimensions. Maintains visual consistency across different text sizes
 * using mathematical perceptual scaling algorithms developed by the vibe coding team.
 *
 * @function scaleGradientStyle
 * @param {Object} style - CSS style object containing gradient properties
 * @param {string} [style.backgroundImage] - CSS gradient string to scale
 * @param {string} [style.filter] - CSS filter string with drop-shadows to scale
 * @param {string} [style.webkitFilter] - Webkit filter string for compatibility
 * @param {Object|number} dimensions - Element dimensions or font size for scaling
 * @param {number} [dimensions.fontSize] - Font size in pixels
 * @param {number} [dimensions.width] - Element width in pixels
 * @param {number} [dimensions.height] - Element height in pixels
 * @returns {Object} Scaled CSS style object with adjusted gradient properties
 *
 * @example
 * // Scale with full dimensions (recommended)
 * const scaledStyle = scaleGradientStyle(baseStyle, {
 *   fontSize: 24,
 *   width: 200,
 *   height: 30
 * })
 *
 * @example
 * // Scale with font size only (backward compatibility)
 * const scaledStyle = scaleGradientStyle(baseStyle, 24)
 *
 * @example
 * // Original style object
 * const baseStyle = {
 *   backgroundImage: 'linear-gradient(45deg, red 0%, blue 100%)',
 *   filter: 'drop-shadow(rgb(0, 0, 0) 2px 2px 4px)'
 * }
 */
export function scaleGradientStyle(style, dimensions) {
  if (!style || !dimensions) return style;

  // Handle both old API (fontSize only) and new API (dimensions object)
  var fontSize, width, height;
  if (typeof dimensions === 'number') {
    fontSize = dimensions;
    width = BASE_WIDTH;
    height = dimensions;
  } else {
    fontSize = dimensions.fontSize || BASE_FONT_SIZE;
    width = dimensions.width || BASE_WIDTH;
    height = dimensions.height || BASE_HEIGHT;
  }
  var scaleFactors = {
    width: BASE_WIDTH / width,
    height: BASE_HEIGHT / height,
    fontSize: BASE_FONT_SIZE / fontSize
  };
  var fontSizeRatio = fontSize / BASE_FONT_SIZE;

  // Skip scaling if dimensions are close to base size
  var avgScaleFactor = (scaleFactors.width + scaleFactors.height) / 2;
  if (Math.abs(avgScaleFactor - 1) < 0.1) return style;
  var scaledStyle = _objectSpread({}, style);

  // Scale background gradient
  if (style.backgroundImage) {
    var parsed = parseGradient(style.backgroundImage);
    var scaled = rebuildGradient(parsed, scaleFactors);
    if (scaled) {
      scaledStyle.backgroundImage = scaled;
    }
  }

  // Scale drop-shadow filter
  if (style.filter) {
    var shadows = parseDropShadow(style.filter);
    var scaledFilter = rebuildFilter(shadows, fontSizeRatio);
    if (scaledFilter) {
      scaledStyle.filter = scaledFilter;
    }
  }

  // Scale webkit filter for compatibility
  if (style.webkitFilter) {
    var _shadows = parseDropShadow(style.webkitFilter);
    var _scaledFilter = rebuildFilter(_shadows, fontSizeRatio);
    if (_scaledFilter) {
      scaledStyle.webkitFilter = _scaledFilter;
    }
  }
  return scaledStyle;
}