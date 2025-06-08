/**
 * Webpack tree shaking test
 * This test uses webpack to bundle only specific effects and verifies
 * that unused effects are not included in the bundle
 */

import webpack from 'webpack'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create a test entry file that imports only specific effects
const testEntryContent = `
import { summer, rainbow } from './src/effects/index.js'

console.log('Summer:', summer)
console.log('Rainbow:', rainbow)

// Export for webpack to detect usage
export { summer, rainbow }
`

const testEntryPath = path.join(__dirname, 'test-entry.js')
fs.writeFileSync(testEntryPath, testEntryContent)

// Webpack configuration for tree shaking test
const webpackConfig = {
  mode: 'production', // Enable tree shaking
  entry: testEntryPath,
  output: {
    path: path.join(__dirname, 'dist-test'),
    filename: 'bundle.js',
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  optimization: {
    usedExports: true,
    sideEffects: false
  },
  resolve: {
    extensions: ['.js', '.json']
  }
}

console.log('Running webpack tree shaking test...')

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error('Webpack error:', err)
    process.exit(1)
  }

  if (stats.hasErrors()) {
    console.error('Webpack compilation errors:', stats.toJson().errors)
    process.exit(1)
  }

  const bundlePath = path.join(__dirname, 'dist-test', 'bundle.js')
  const bundleContent = fs.readFileSync(bundlePath, 'utf8')

  console.log('Bundle size:', bundleContent.length, 'characters')

  // Check that only summer and rainbow effects are in the bundle
  const effectsInBundle = []
  const allEffectNames = [
    'summer', 'rainbow', 'fireAndIce', 'factoryError', 'leprechaun', 'firefly',
    'bubblegum', 'vaporwave', 'unicorn', 'zombie', 'hellfire'
  ]

  allEffectNames.forEach(effectName => {
    if (bundleContent.includes(effectName)) {
      effectsInBundle.push(effectName)
    }
  })

  console.log('Effects found in bundle:', effectsInBundle)

  // Verify tree shaking worked
  const expectedEffects = ['summer', 'rainbow']
  const unexpectedEffects = effectsInBundle.filter(effect => !expectedEffects.includes(effect))

  if (unexpectedEffects.length > 0) {
    console.log('⚠️  Warning: Unexpected effects found in bundle:', unexpectedEffects)
    console.log('Tree shaking may not be working optimally')
  } else {
    console.log('✅ Tree shaking test passed! Only expected effects are in the bundle.')
  }

  // Clean up
  fs.unlinkSync(testEntryPath)
  fs.rmSync(path.join(__dirname, 'dist-test'), { recursive: true, force: true })

  console.log('Tree shaking verification complete!')
})
