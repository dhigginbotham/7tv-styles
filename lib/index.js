function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "style", "effect"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo, useRef, useEffect, useState } from 'react';
import './stylesheet.css';
import classNames from './styles.json';
import { scaleGradientStyle } from './gradientScaler.js';

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
export var Paint = function Paint(_ref) {
  var children = _ref.children,
    _ref$style = _ref.style,
    inlineStyle = _ref$style === void 0 ? {} : _ref$style,
    effect = _ref.effect,
    props = _objectWithoutProperties(_ref, _excluded);
  var spanRef = useRef(null);
  var _useState = useState({
      width: 100,
      height: 16,
      fontSize: 16
    }),
    _useState2 = _slicedToArray(_useState, 2),
    elementDimensions = _useState2[0],
    setElementDimensions = _useState2[1];
  if (!effect) return /*#__PURE__*/React.createElement("span", props, children);
  var className = ".7tv__paint-effects--".concat(effect);
  var baseStyle = className in classNames ? classNames[className] : null;
  if (baseStyle == null) return /*#__PURE__*/React.createElement("span", props, children);

  // Measure actual element dimensions and font size
  useEffect(function () {
    if (spanRef.current) {
      var computedStyle = window.getComputedStyle(spanRef.current);
      var _fontSize = parseFloat(computedStyle.fontSize) || 16;
      var rect = spanRef.current.getBoundingClientRect();
      setElementDimensions({
        width: rect.width || 100,
        height: rect.height || _fontSize,
        fontSize: _fontSize
      });
    }
  }, [inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.fontSize, children, effect]);

  // Get font size from inline style if provided for immediate scaling
  var inlineFontSize = inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.fontSize;
  var fontSize = elementDimensions.fontSize;
  if (inlineFontSize) {
    if (typeof inlineFontSize === 'string') {
      var match = inlineFontSize.match(/^([0-9.]+)(px|em|rem)?$/);
      if (match) {
        fontSize = parseFloat(match[1]);
        // Convert em/rem to px (approximate)
        if (match[2] === 'em' || match[2] === 'rem') {
          fontSize *= 16;
        }
      }
    } else if (typeof inlineFontSize === 'number') {
      fontSize = inlineFontSize;
    }
  }
  return useMemo(function () {
    // Scale the gradient style based on element dimensions
    var scaledStyle = scaleGradientStyle(baseStyle, {
      fontSize: fontSize,
      width: elementDimensions.width,
      height: elementDimensions.height
    });

    // Combine with inline styles
    var finalStyle = _objectSpread(_objectSpread({}, scaledStyle), inlineStyle);
    return /*#__PURE__*/React.createElement("span", _extends({
      ref: spanRef,
      className: className.substring(1),
      style: finalStyle
    }, props), children);
  }, [children, effect, baseStyle, fontSize, elementDimensions, inlineStyle, className]);
};

// Tree-shakeable exports
export { Paint as PaintTreeShakeable } from './PaintTreeShakeable.js';
export * from './effects/index.js';

// Default export for convenience (backward compatible)
export default {
  Paint: Paint
};