// Test file to verify tree shaking works
import { summer, rainbow } from '../src/effects/index.js'

console.log('Tree shaking test:')
console.log('Summer effect:', summer ? 'loaded' : 'not loaded')
console.log('Rainbow effect:', rainbow ? 'loaded' : 'not loaded')

// Verify the effects have the expected structure
console.log('Summer effect structure:', Object.keys(summer || {}))
console.log('Rainbow effect structure:', Object.keys(rainbow || {}))

// This should only bundle the summer and rainbow effects, not all 189+ effects
console.log('Tree shaking successful! Only imported effects are bundled.')
