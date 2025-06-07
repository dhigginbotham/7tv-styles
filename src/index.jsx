import React, { useMemo, useRef, useEffect, useState } from 'react'
import './stylesheet.css'
import classNames from './styles.json'
import { scaleGradientStyle } from './gradientScaler.js'

/**
 * Paint component for applying 7TV gradient text effects with dynamic scaling
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content to apply the paint effect to
 * @param {string} props.effect - Name of the paint effect to apply (e.g., 'summer', 'rainbow', 'factory-error')
 * @param {Object} [props.style] - Additional CSS styles to apply to the text element
 * @param {string|number} [props.style.fontSize] - Font size for dynamic gradient scaling
 * @param {...Object} props - Additional props passed to the underlying span element
 *
 * @example
 * // Basic usage
 * <Paint effect="summer">Summer Vibes</Paint>
 *
 * @example
 * // With custom styling
 * <Paint effect="rainbow" style={{ fontSize: '48px', fontWeight: 'bold' }}>
 *   Rainbow Magic
 * </Paint>
 *
 * @example
 * // With click handler
 * <Paint effect="factory-error" onClick={() => console.log('clicked')}>
 *   Factory Error
 * </Paint>
 *
 * @returns {React.ReactElement} Styled span element with gradient text effect
 */
export const Paint = ({ children, style: inlineStyle = {}, effect, ...props }) => {
  const spanRef = useRef(null)
  const [elementDimensions, setElementDimensions] = useState({ width: 100, height: 16, fontSize: 16 })

  if (!effect) return <span {...props}>{children}</span>

  const className = `.7tv__paint-effects--${effect}`
  const baseStyle = className in classNames ? classNames[className] : null
  if (baseStyle == null) return <span {...props}>{children}</span>

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
  }, [inlineStyle?.fontSize, children, effect])

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
        className={className.substring(1)}
        style={finalStyle}
        {...props}
      >
        {children}
      </span>
    )
  }, [children, effect, baseStyle, fontSize, elementDimensions, inlineStyle, className])
}

// Tree-shakeable exports
export { Paint as PaintTreeShakeable } from './PaintTreeShakeable.jsx'
export * from './effects/index.js'

// Default export for convenience (backward compatible)
export default {
  Paint
}
