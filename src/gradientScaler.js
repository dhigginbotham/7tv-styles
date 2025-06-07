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
const BASE_FONT_SIZE = 16

/** @constant {number} BASE_WIDTH - Reference width for scaling calculations */
const BASE_WIDTH = 100

/** @constant {number} BASE_HEIGHT - Reference height for scaling calculations */
const BASE_HEIGHT = 16

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
function parseGradient (gradientString) {
  if (!gradientString) return null

  // Match linear-gradient, radial-gradient, repeating-linear-gradient, etc.
  const gradientMatch = gradientString.match(/(linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient)\s*\((.*)\)/)
  if (!gradientMatch) return null

  const [, type, content] = gradientMatch

  // Parse angle for linear gradients
  let angle = null
  let cleanContent = content

  if (type.includes('linear')) {
    const angleMatch = content.match(/^(\d+(?:\.\d+)?deg)\s*,\s*(.*)/)
    if (angleMatch) {
      angle = parseFloat(angleMatch[1])
      cleanContent = angleMatch[2]
    }
  }

  // Parse color stops
  const colorStops = []
  const stopMatches = cleanContent.match(/rgb\([^)]+\)\s*\d*%?/g) || []

  stopMatches.forEach(stop => {
    const percentMatch = stop.match(/(\d+)%/)
    const colorMatch = stop.match(/(rgb\([^)]+\))/)

    if (colorMatch) {
      colorStops.push({
        color: colorMatch[1],
        position: percentMatch ? parseInt(percentMatch[1]) : null
      })
    }
  })

  return { type, angle, colorStops, original: gradientString }
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
function parseDropShadow (filterString) {
  if (!filterString) return []

  const shadows = []
  const shadowMatches = filterString.match(/drop-shadow\([^)]+\)/g) || []

  shadowMatches.forEach(shadow => {
    const match = shadow.match(/drop-shadow\(\s*(rgb\([^)]+\))\s+([^)]+)\)/)
    if (match) {
      const [, color, params] = match
      const paramParts = params.trim().split(/\s+/)

      shadows.push({
        color,
        offsetX: paramParts[0] || '0px',
        offsetY: paramParts[1] || '0px',
        blurRadius: paramParts[2] || '0px',
        original: shadow
      })
    }
  })

  return shadows
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
function scaleAngle (angle, scaleFactors) {
  if (angle === null) return null

  // Consider both width and height for angle scaling
  const avgScaleFactor = (scaleFactors.width + scaleFactors.height) / 2
  // Use power of 0.6 for perceptual scaling
  return angle * Math.pow(avgScaleFactor, 0.6)
}

/**
 * Scale gradient stop positions based on primary dimension
 */
function scaleStops (colorStops, scaleFactors) {
  if (!colorStops.length) return colorStops

  return colorStops.map(stop => {
    if (stop.position === null) return stop

    // Use width scale factor for horizontal gradients, height for vertical
    // For now, use average of both dimensions
    const avgScaleFactor = (scaleFactors.width + scaleFactors.height) / 2
    // Use power of 0.4 for stop compression
    const scaledPosition = stop.position * Math.pow(avgScaleFactor, 0.4)
    return {
      ...stop,
      position: Math.max(0, Math.min(100, scaledPosition))
    }
  })
}

/**
 * Scale drop-shadow blur radius
 */
function scaleBlur (blurRadius, fontSizeRatio) {
  const match = blurRadius.match(/^([0-9.]+)(px|em|rem)$/)
  if (!match) return blurRadius

  const [, value, unit] = match
  const scaledValue = parseFloat(value) * fontSizeRatio
  return `${scaledValue.toFixed(2)}${unit}`
}

/**
 * Rebuild gradient string with scaled values
 */
function rebuildGradient (parsed, scaleFactors) {
  if (!parsed) return null

  const { type, angle, colorStops } = parsed
  const scaledAngle = scaleAngle(angle, scaleFactors)
  const scaledStops = scaleStops(colorStops, scaleFactors)

  let gradientParts = []

  // Add angle for linear gradients
  if (type.includes('linear') && scaledAngle !== null) {
    gradientParts.push(`${scaledAngle.toFixed(1)}deg`)
  }

  // Add color stops
  const stopStrings = scaledStops.map(stop => {
    if (stop.position !== null) {
      return `${stop.color} ${stop.position.toFixed(1)}%`
    }
    return stop.color
  })

  gradientParts = gradientParts.concat(stopStrings)

  return `${type}(${gradientParts.join(', ')})`
}

/**
 * Rebuild filter string with scaled shadows
 */
function rebuildFilter (shadows, fontSizeRatio) {
  if (!shadows.length) return null

  const scaledShadows = shadows.map(shadow => {
    const scaledBlur = scaleBlur(shadow.blurRadius, fontSizeRatio)
    return `drop-shadow(${shadow.color} ${shadow.offsetX} ${shadow.offsetY} ${scaledBlur})`
  })

  return scaledShadows.join(' ')
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
export function scaleGradientStyle (style, dimensions) {
  if (!style || !dimensions) return style

  // Handle both old API (fontSize only) and new API (dimensions object)
  let fontSize, width, height
  if (typeof dimensions === 'number') {
    fontSize = dimensions
    width = BASE_WIDTH
    height = dimensions
  } else {
    fontSize = dimensions.fontSize || BASE_FONT_SIZE
    width = dimensions.width || BASE_WIDTH
    height = dimensions.height || BASE_HEIGHT
  }

  const scaleFactors = {
    width: BASE_WIDTH / width,
    height: BASE_HEIGHT / height,
    fontSize: BASE_FONT_SIZE / fontSize
  }

  const fontSizeRatio = fontSize / BASE_FONT_SIZE

  // Skip scaling if dimensions are close to base size
  const avgScaleFactor = (scaleFactors.width + scaleFactors.height) / 2
  if (Math.abs(avgScaleFactor - 1) < 0.1) return style

  const scaledStyle = { ...style }

  // Scale background gradient
  if (style.backgroundImage) {
    const parsed = parseGradient(style.backgroundImage)
    const scaled = rebuildGradient(parsed, scaleFactors)
    if (scaled) {
      scaledStyle.backgroundImage = scaled
    }
  }

  // Scale drop-shadow filter
  if (style.filter) {
    const shadows = parseDropShadow(style.filter)
    const scaledFilter = rebuildFilter(shadows, fontSizeRatio)
    if (scaledFilter) {
      scaledStyle.filter = scaledFilter
    }
  }

  // Scale webkit filter for compatibility
  if (style.webkitFilter) {
    const shadows = parseDropShadow(style.webkitFilter)
    const scaledFilter = rebuildFilter(shadows, fontSizeRatio)
    if (scaledFilter) {
      scaledStyle.webkitFilter = scaledFilter
    }
  }

  return scaledStyle
}
