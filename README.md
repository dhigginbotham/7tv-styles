# 7TV Styles

A React component library for beautiful paint effects and gradient text styling, featuring 189+ unique effects scraped from 7tv.app.

## 🚀 Live Demo

**[View Interactive Demo](https://dhigginbotham.github.io/7tv-styles/)**

Experience all 189+ paint effects with dynamic gradient scaling! Click any effect to see it in action across different font sizes. Test the Factory Error effect to see the sick ass X and Y axis scaling system developed by our vibe coding team.

## Installation

```bash
npm install 7tv-styles
```

## Quick Start

### Tree-Shakeable Usage (Recommended)

```jsx
import React from 'react'
import { PaintTreeShakeable as Paint } from '7tv-styles/tree-shakeable'
import { summer, rainbow, fireAndIce } from '7tv-styles/effects'

function App() {
  return (
    <div>
      <Paint effectStyle={summer}>Summer Vibes</Paint>
      <Paint effectStyle={rainbow}>Rainbow Magic</Paint>
      <Paint effectStyle={fireAndIce}>Fire & Ice</Paint>
    </div>
  )
}
```

### Regular Usage (All Effects Bundled)

```jsx
import React from 'react'
import { Paint } from '7tv-styles'

function App() {
  return (
    <div>
      <Paint effect="summer">Summer Vibes</Paint>
      <Paint effect="rainbow">Rainbow Magic</Paint>
      <Paint effect="fire-and-ice">Fire & Ice</Paint>
    </div>
  )
}
```

## Available Effects

This library includes 189+ paint effects:

- **Seasonal**: `summer`, `halloween-fever`, `easter-candy`, `spring-flowers`, `autumn-forest`
- **Food & Drink**: `hamburger`, `latte-macchiato`, `avocado`, `watermelon-slice`, `pineapple`
- **Nature**: `lavender-field`, `coral-reef`, `sunflower`, `forest-spring`, `beach-please`
- **Fantasy**: `warlock`, `spaceship`, `enchanted`, `supernova`, `elder-dragon`
- **Unique**: `vaporwave`, `nuclear-waste`, `factory-error`, `cyber-optics`, `tie-dye`
- **And many more!**

## API

### Paint Component

```jsx
<Paint effect="effect-name" {...props}>
  Your text here
</Paint>
```

#### Props

- `effect` (string): The paint effect to apply
- `children` (ReactNode): The text content to style
- `...props`: Any additional props are passed to the underlying `<span>` element

## Examples

### Basic Usage

```jsx
<Paint effect="prismatic">Prismatic Text</Paint>
<Paint effect="nightclub">Nightclub Vibes</Paint>
<Paint effect="tropical">Tropical Paradise</Paint>
```

### Tree-Shakeable Usage Examples

```jsx
// Import only the effects you need
import { PaintTreeShakeable as Paint } from '7tv-styles/tree-shakeable'
import { kawaii, vaporwave, factoryError } from '7tv-styles/effects'

// Use with custom styling
<Paint
  effectStyle={kawaii}
  style={{ fontSize: '48px', fontWeight: 'bold' }}
>
  Kawaii Style!
</Paint>

// Multiple effects in one component
function EffectShowcase() {
  return (
    <div>
      <Paint effectStyle={vaporwave}>Vaporwave Vibes</Paint>
      <Paint effectStyle={factoryError}>Factory Error</Paint>
    </div>
  )
}
```

### With Custom Styling (Regular Usage)

```jsx
<Paint
  effect="kawaii"
  style={{ fontSize: '48px', fontWeight: 'bold' }}
>
  Kawaii Style!
</Paint>
```

### Interactive Example

```jsx
import React, { useState } from 'react'
import { Paint } from '7tv-styles'

function InteractiveDemo() {
  const [selectedEffect, setSelectedEffect] = useState('summer')
  
  const effects = ['summer', 'rainbow', 'fire-and-ice', 'tropical']
  
  return (
    <div>
      <Paint effect={selectedEffect} style={{ fontSize: '32px' }}>
        {selectedEffect.toUpperCase()} EFFECT
      </Paint>
      
      {effects.map(effect => (
        <button key={effect} onClick={() => setSelectedEffect(effect)}>
          {effect}
        </button>
      ))}
    </div>
  )
}
```

## Dynamic Gradient Scaling 🔥

The library features a **sick ass dynamic scaling system** developed by our vibe coding team that automatically scales gradient properties based on both element dimensions and font size to maintain consistent visual impact across different text sizes. This ensures that paint effects look absolutely fire whether applied to small labels or massive headings.

### How It Works

Our mathematical scaling algorithms adjust gradients across both X and Y axes:
- **Gradient angles** - Scaled using perceptual scaling laws with power function (exponent 0.6)
- **Color stop positions** - Dynamically adjusted using power function (exponent 0.4)
- **Drop shadow blur radius** - Scaled proportionally to font size
- **Element dimensions** - Real-time measurement of width and height for precise scaling
- **Multi-axis scaling** - Maintains visual consistency across both horizontal and vertical dimensions

### Example

```jsx
// All these will have perfectly scaled gradients that maintain their visual impact
<Paint effect="factory-error" style={{ fontSize: '12px' }}>Small striped text</Paint>
<Paint effect="factory-error" style={{ fontSize: '24px' }}>Medium striped text</Paint>
<Paint effect="factory-error" style={{ fontSize: '48px' }}>Large striped text</Paint>
```

The scaling happens automatically with zero configuration - just pure vibes! ✨

### Technical Details

- **Real-time dimension tracking** using `getBoundingClientRect()`
- **Perceptual scaling laws** for natural visual consistency
- **Performance optimized** with React hooks and memoization
- **Backward compatible** with existing implementations

## Development

### Running the Example

```bash
cd examples
npm install
npm run dev
```

Visit `http://localhost:3000` to see all 189 paint effects in action with an interactive demo.

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Features

- **189+ Paint Effects** - Comprehensive collection of gradient and text effects
- **Dynamic Gradient Scaling** - Automatic scaling of gradients based on font size for consistent visual impact
- **Tree Shakeable** - Import only the effects you need for optimal bundle size
- **Dual Usage Modes** - Choose between tree-shakeable imports or all-in-one bundle
- **TypeScript Ready** - Full TypeScript support
- **Responsive** - Works on all screen sizes
- **Zero Dependencies** - Lightweight and fast
- **Hot Module Replacement** - Fast development experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC License - see [LICENSE](LICENSE) file for details.

## Credits

Paint effects scraped from 7tv.app. All credit goes to the 7TV team and community for creating these beautiful effects.

**Special shoutout to our vibe coding team** for developing the sick ass dynamic gradient scaling system that makes these effects look absolutely fire at any size! 🔥✨

The mathematical scaling algorithms and multi-dimensional gradient adjustment system were crafted with pure coding vibes to ensure every paint effect maintains its visual impact across all text sizes.
