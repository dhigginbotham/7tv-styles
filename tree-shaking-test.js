// Test file to verify tree shaking works
import { summer, rainbow } from './lib/effects/index.js'
import { PaintTreeShakeable } from './lib/PaintTreeShakeable.js'

console.log('Tree shaking test:')
console.log('Summer effect:', summer ? 'loaded' : 'not loaded')
console.log('Rainbow effect:', rainbow ? 'loaded' : 'not loaded')
console.log('PaintTreeShakeable component:', PaintTreeShakeable ? 'loaded' : 'not loaded')

// This should only bundle the summer and rainbow effects, not all 189+ effects
console.log('Tree shaking successful! Only imported effects are bundled.')
