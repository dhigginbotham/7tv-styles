# 7TV Styles Examples

This directory contains a webpack-bundled example application demonstrating the 7TV paint effects library with proper tree-shaking and optimization.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000` to see the demo

## Build for Production

To create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Features

- **Webpack bundling** with tree-shaking for optimal bundle size
- **Hot module replacement** for fast development
- **CSS loading** with proper paint effect styles
- **React integration** showing how to use the Paint component
- **Interactive examples** demonstrating various paint effects

## Usage

The example shows how to use the Paint component with the `effect` prop:

```jsx
import { Paint } from '7tv-styles'

function MyComponent() {
  return (
    <Paint effect="rainbow">
      Your text here
    </Paint>
  )
}
```

Available effects include: summer, rainbow, fire-and-ice, tropical, unicorn, and hundreds more!
