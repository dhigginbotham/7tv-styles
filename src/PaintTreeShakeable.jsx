import React, { useMemo, useRef, useEffect, useState } from 'react'
import './stylesheet.css'
import { scaleGradientStyle } from './gradientScaler.js'

/**
 * Tree-shakeable Paint component for applying 7TV gradient text effects with dynamic scaling
 *
 * This component accepts effect styles directly, enabling tree-shaking for optimal bundle size.
 * Only the effects you import will be included in your final bundle.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content to apply the paint effect to
 * @param {Object} [props.effectStyle] - Effect style object imported from '7tv-styles/effects'
 * @param {string} [props.effect] - Fallback effect name for backward compatibility
 * @param {Object} [props.style] - Additional CSS styles to apply to the text element
 * @param {string|number} [props.style.fontSize] - Font size for dynamic gradient scaling
 * @param {...Object} props - Additional props passed to the underlying span element
 *
 * @example
 * // Tree-shakeable usage (recommended)
 * import { PaintTreeShakeable as Paint } from '7tv-styles/tree-shakeable'
 * import { summer, rainbow } from '7tv-styles/effects'
 *
 * <Paint effectStyle={summer}>Summer Vibes</Paint>
 * <Paint effectStyle={rainbow}>Rainbow Magic</Paint>
 *
 * @example
 * // With custom styling
 * import { factoryError } from '7tv-styles/effects'
 *
 * <Paint
 *   effectStyle={factoryError}
 *   style={{ fontSize: '48px', fontWeight: 'bold' }}
 * >
 *   Factory Error
 * </Paint>
 *
 * @example
 * // Backward compatibility mode
 * <Paint effect="summer">Summer Vibes</Paint>
 *
 * @returns {React.ReactElement} Styled span element with gradient text effect
 */
export const Paint = ({ children, style: inlineStyle = {}, effectStyle, effect, ...props }) => {
  const spanRef = useRef(null)
  const [elementDimensions, setElementDimensions] = useState({ width: 100, height: 16, fontSize: 16 })

  if (!effectStyle && !effect) return <span {...props}>{children}</span>

  // For backward compatibility, fall back to the old effect prop system
  let baseStyle = effectStyle
  let className = ''

  if (!effectStyle && effect) {
    // Fallback to old system - import all styles
    const classNames = require('./styles.json')
    const classKey = `.7tv__paint-effects--${effect}`
    baseStyle = classNames[classKey]
    className = classKey.substring(1)
  } else if (effectStyle) {
    // Tree-shakeable mode - generate className from effect style
    className = `7tv__paint-effects--custom-${Math.random().toString(36).substr(2, 9)}`
  }

  if (!baseStyle) return <span {...props}>{children}</span>

  // Measure actual element dimensions and font size
  useEffect(() => {
    if (spanRef.current) {
      const computedStyle = window.getComputedStyle(spanRef.current)
      const fontSize = parseFloat(computedStyle.fontSize) || 16
      const rect = spanRef.current.getBoundingClientRect()

      setElementDimensions({
        width: rect.width || 100,
        height: rect.height || fontSize,
        fontSize
      })
    }
  }, [inlineStyle?.fontSize, children, effectStyle, effect])

  // Get font size from inline style if provided for immediate scaling
  const inlineFontSize = inlineStyle?.fontSize
  let fontSize = elementDimensions.fontSize

  if (inlineFontSize) {
    if (typeof inlineFontSize === 'string') {
      const match = inlineFontSize.match(/^([0-9.]+)(px|em|rem)?$/)
      if (match) {
        fontSize = parseFloat(match[1])
        // Convert em/rem to px (approximate)
        if (match[2] === 'em' || match[2] === 'rem') {
          fontSize *= 16
        }
      }
    } else if (typeof inlineFontSize === 'number') {
      fontSize = inlineFontSize
    }
  }

  return useMemo(() => {
    // Scale the gradient style based on element dimensions
    const scaledStyle = scaleGradientStyle(baseStyle, {
      fontSize,
      width: elementDimensions.width,
      height: elementDimensions.height
    })

    // Combine with inline styles
    const finalStyle = {
      ...scaledStyle,
      ...inlineStyle
    }

    return (
      <span
        ref={spanRef}
        className={className}
        style={finalStyle}
        {...props}
      >
        {children}
      </span>
    )
  }, [children, effectStyle, effect, baseStyle, fontSize, elementDimensions, inlineStyle, className])
}

// Default export for convenience
export default {
  Paint
}
