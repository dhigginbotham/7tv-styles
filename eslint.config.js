import neostandard from 'neostandard'

export default [
  ...neostandard({
    // Configure for React since this is a React component library
    jsx: true,
    // Ignore build output directories and node_modules
    ignores: ['lib/**/*', 'examples/dist/**/*', 'examples/node_modules/**/*', 'node_modules/**/*'],
    rules: {
      '@stylistic/space-before-function-paren': 'off'
    }
  }),
  {
    // Configure JSX parsing for all JS files in src
    files: ['src/**/*.js', '*.js', 'src/**/*.jsx', '*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: 'readonly'
      }
    }
  },
  {
    // Additional configuration for browser globals in example files
    files: ['example.jsx', 'examples/**/*.jsx', 'examples/**/*.js'],
    languageOptions: {
      globals: {
        alert: 'readonly',
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        React: 'readonly'
      }
    }
  }
]
