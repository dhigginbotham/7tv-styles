/**
 * Webpack Bundle Size Test
 * This test creates actual webpack bundles to verify tree shaking works
 * by measuring real bundle sizes, not just counting effects
 */

import webpack from 'webpack'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('=== Webpack Bundle Size Test ===\n')

// Create test entry files
const testDir = path.join(__dirname, 'temp-webpack-test')
fs.mkdirSync(testDir, { recursive: true })

// Test 1: Tree-shakeable import (only 2 effects)
const treeShakeableEntry = `
import { summer, rainbow } from '../src/effects/index.js'
console.log('Tree-shakeable:', { summer, rainbow })
export { summer, rainbow }
`

// Test 2: Full import (all effects)
const fullImportEntry = `
import { allEffects } from '../src/effects/index.js'
console.log('Full import:', Object.keys(allEffects).length, 'effects')
export { allEffects }
`

fs.writeFileSync(path.join(testDir, 'tree-shakeable.js'), treeShakeableEntry)
fs.writeFileSync(path.join(testDir, 'full-import.js'), fullImportEntry)

// Webpack configuration for tree shaking
const createWebpackConfig = (entry, output) => ({
  mode: 'production',
  entry: path.join(testDir, entry),
  output: {
    path: path.join(testDir, 'dist'),
    filename: output,
    library: { type: 'module' }
  },
  experiments: { outputModule: true },
  optimization: {
    usedExports: true,
    sideEffects: false,
    minimize: true
  },
  resolve: { extensions: ['.js', '.json'] }
})

const runWebpackTest = (config, name) => {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err || stats.toJson().errors)
        return
      }

      const outputPath = path.join(config.output.path, config.output.filename)
      const bundleSize = fs.statSync(outputPath).size
      const bundleContent = fs.readFileSync(outputPath, 'utf8')

      resolve({
        name,
        size: bundleSize,
        content: bundleContent,
        path: outputPath
      })
    })
  })
}

// Run both tests
Promise.all([
  runWebpackTest(createWebpackConfig('tree-shakeable.js', 'tree-shakeable.bundle.js'), 'Tree-shakeable'),
  runWebpackTest(createWebpackConfig('full-import.js', 'full-import.bundle.js'), 'Full Import')
]).then(([treeShakeableResult, fullImportResult]) => {
  console.log('📦 Bundle Size Results:')
  console.log(`  Tree-shakeable bundle: ${treeShakeableResult.size} bytes`)
  console.log(`  Full import bundle: ${fullImportResult.size} bytes`)

  const savings = fullImportResult.size - treeShakeableResult.size
  const savingsPercent = ((savings / fullImportResult.size) * 100).toFixed(1)

  console.log(`  Savings: ${savings} bytes (${savingsPercent}%)`)

  // Analyze bundle content
  console.log('\n🔍 Bundle Content Analysis:')

  // Count effect names in bundles
  const effectNames = ['summer', 'rainbow', 'vaporwave', 'unicorn', 'zombie', 'hellfire', 'firefly', 'bubblegum']

  const treeShakeableEffects = effectNames.filter(name =>
    treeShakeableResult.content.includes(name)
  )

  const fullImportEffects = effectNames.filter(name =>
    fullImportResult.content.includes(name)
  )

  console.log(`  Tree-shakeable bundle contains: ${treeShakeableEffects.length} effect names`)
  console.log(`  Full import bundle contains: ${fullImportEffects.length} effect names`)
  console.log(`  Tree-shakeable effects: ${treeShakeableEffects.join(', ')}`)

  // Verify tree shaking worked
  console.log('\n✅ Tree Shaking Verification:')
  if (treeShakeableResult.size < fullImportResult.size) {
    console.log('🎉 TREE SHAKING WORKING!')
    console.log(`   Bundle size reduced by ${savingsPercent}%`)
    console.log(`   Saved ${savings} bytes`)
  } else {
    console.log('❌ TREE SHAKING FAILED!')
    console.log('   Bundle sizes are the same - tree shaking not working')
  }

  // Save results for documentation
  const results = {
    treeShakeable: {
      size: treeShakeableResult.size,
      effects: treeShakeableEffects.length
    },
    fullImport: {
      size: fullImportResult.size,
      effects: fullImportEffects.length
    },
    savings: {
      bytes: savings,
      percent: savingsPercent
    },
    timestamp: new Date().toISOString()
  }

  fs.writeFileSync(
    path.join(__dirname, 'bundle-test-results.json'),
    JSON.stringify(results, null, 2)
  )

  console.log('\n📊 Results saved to tests/bundle-test-results.json')

  // Cleanup
  fs.rmSync(testDir, { recursive: true, force: true })
}).catch(error => {
  console.error('❌ Webpack test failed:', error)
  // Cleanup on error
  fs.rmSync(testDir, { recursive: true, force: true })
  process.exit(1)
})
