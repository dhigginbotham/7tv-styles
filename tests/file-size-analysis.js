/**
 * File Size Analysis Test
 * This test measures actual file sizes to demonstrate tree shaking benefits
 * by comparing individual effect files vs the full styles.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { formatBytes, formatSizeComparison } from './utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('=== File Size Analysis Test ===\n')

// Measure the full styles.json file
const stylesJsonPath = path.join(__dirname, '../src/styles.json')
const stylesJsonSize = fs.statSync(stylesJsonPath).size
const stylesJsonContent = fs.readFileSync(stylesJsonPath, 'utf8')
const stylesData = JSON.parse(stylesJsonContent)

// Count total effects in styles.json
const totalEffects = Object.keys(stylesData).filter(key =>
  key.startsWith('.7tv__paint-effects--')
).length

console.log('📊 Full Styles File Analysis:')
console.log(`  styles.json size: ${formatBytes(stylesJsonSize)} (${stylesJsonSize} bytes)`)
console.log(`  Total effects: ${totalEffects}`)
console.log(`  Average size per effect: ${formatBytes(Math.round(stylesJsonSize / totalEffects))}`)

// Measure individual effect files
const individualDir = path.join(__dirname, '../src/effects/individual')
const individualFiles = fs.readdirSync(individualDir)

console.log('\n📁 Individual Files Analysis:')
console.log(`  Number of individual files: ${individualFiles.length}`)

// Sample a few individual files to get average size
const sampleFiles = individualFiles.slice(0, 10)
let totalIndividualSize = 0

sampleFiles.forEach(file => {
  const filePath = path.join(individualDir, file)
  const fileSize = fs.statSync(filePath).size
  totalIndividualSize += fileSize
})

const avgIndividualSize = Math.round(totalIndividualSize / sampleFiles.length)
console.log(`  Average individual file size: ${formatBytes(avgIndividualSize)} (sampled ${sampleFiles.length} files)`)

// Calculate tree shaking scenarios
console.log('\n🌳 Tree Shaking Scenarios:')

const scenarios = [
  { name: 'Import 1 effect', count: 1 },
  { name: 'Import 2 effects', count: 2 },
  { name: 'Import 5 effects', count: 5 },
  { name: 'Import 10 effects', count: 10 },
  { name: 'Import all effects', count: totalEffects }
]

scenarios.forEach(scenario => {
  const treeShakeableSize = scenario.count * avgIndividualSize
  const fullImportSize = stylesJsonSize
  const comparison = formatSizeComparison(fullImportSize, treeShakeableSize)

  console.log(`  ${scenario.name}:`)
  console.log(`    Tree-shakeable: ${comparison.after}`)
  console.log(`    Full import: ${comparison.before}`)
  console.log(`    Savings: ${comparison.savings} (${comparison.percent}%)`)
  console.log('')
})

// Test actual imports to verify they work
console.log('🧪 Import Verification:')

try {
  // Test individual file import
  const { summer } = await import('../src/effects/individual/summer.js')
  console.log('  ✅ Individual file import works:', !!summer)
  console.log('  ✅ Summer effect properties:', Object.keys(summer).length)

  // Test tree-shakeable import
  const { rainbow } = await import('../src/effects/index.js')
  console.log('  ✅ Tree-shakeable import works:', !!rainbow)
  console.log('  ✅ Rainbow effect properties:', Object.keys(rainbow).length)

  // Test full import
  const { allEffects } = await import('../src/effects/index.js')
  console.log('  ✅ Full import works:', !!allEffects)
  console.log('  ✅ All effects count:', Object.keys(allEffects).length)
} catch (error) {
  console.log('  ❌ Import test failed:', error.message)
}

// Create bundle size simulation
console.log('\n📦 Bundle Size Simulation:')
console.log('Simulating what would be included in a production bundle...')

// Simulate tree-shakeable bundle (2 effects)
const treeShakeableEffects = ['summer', 'rainbow']
const simulatedTreeShakeableSize = treeShakeableEffects.length * avgIndividualSize

// Simulate full import bundle
const simulatedFullSize = stylesJsonSize

console.log(`\nTree-shakeable bundle (${treeShakeableEffects.join(', ')}):`)
console.log(`  Estimated size: ${formatBytes(simulatedTreeShakeableSize)}`)
console.log(`  Effects included: ${treeShakeableEffects.length}`)

console.log('\nFull import bundle:')
console.log(`  Estimated size: ${formatBytes(simulatedFullSize)}`)
console.log(`  Effects included: ${totalEffects}`)

const finalComparison = formatSizeComparison(simulatedFullSize, simulatedTreeShakeableSize)

console.log('\n🎉 Tree Shaking Benefits:')
console.log(`  Bundle size reduction: ${finalComparison.savings}`)
console.log(`  Percentage savings: ${finalComparison.percent}%`)
console.log(`  Effects eliminated: ${totalEffects - treeShakeableEffects.length}`)

// Save results
const results = {
  fullStylesSize: stylesJsonSize,
  totalEffects,
  avgIndividualSize,
  treeShakeableSimulation: {
    effects: treeShakeableEffects.length,
    estimatedSize: simulatedTreeShakeableSize
  },
  fullImportSimulation: {
    effects: totalEffects,
    estimatedSize: simulatedFullSize
  },
  savings: {
    bytes: simulatedFullSize - simulatedTreeShakeableSize,
    percent: finalComparison.percent
  },
  timestamp: new Date().toISOString()
}

fs.writeFileSync(
  path.join(__dirname, 'file-size-analysis-results.json'),
  JSON.stringify(results, null, 2)
)

console.log('\n📊 Results saved to tests/file-size-analysis-results.json')
console.log('\n✅ File size analysis complete!')
