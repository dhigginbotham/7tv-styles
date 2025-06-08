/**
 * Utility functions for tests
 */

/**
 * Convert bytes to human readable format
 * @param {number} bytes - Size in bytes
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {string} Human readable size
 */
export function formatBytes(bytes, decimals = 1) {
  if (bytes === 0) return '0 bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * Format a comparison between two sizes
 * @param {number} before - Original size in bytes
 * @param {number} after - New size in bytes
 * @returns {object} Formatted comparison
 */
export function formatSizeComparison(before, after) {
  const savings = before - after
  const savingsPercent = ((savings / before) * 100).toFixed(1)

  return {
    before: formatBytes(before),
    after: formatBytes(after),
    savings: formatBytes(savings),
    percent: savingsPercent
  }
}
