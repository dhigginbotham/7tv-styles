import React from 'react'
import { Paint } from '7tv-styles'
import './src/stylesheet.css'

// Example usage of the 7tv-styles paint effects
function ExampleApp () {
  const paintEffects = [
    'summer',
    'rainbow',
    'fire-and-ice',
    'tropical',
    'unicorn',
    'galaxy',
    'sunset-fizz',
    'prismatic',
    'nightclub',
    'kawaii'
  ]

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}
    >
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
        7TV Paint Effects Library
      </h1>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Featured Paint Effects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}
        >
          {paintEffects.map((effect) => (
            <Paint
              key={effect}
              effect={effect}
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '15px 20px',
                textAlign: 'center',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
              onClick={() => alert(`You clicked the ${effect} paint effect!`)}
              onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)' }}
              onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
            >
              {effect.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Paint>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Interactive Text Examples</h2>

        <Paint
          effect='summer'
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          SUMMER VIBES
        </Paint>

        <Paint
          effect='rainbow'
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          Rainbow Magic ✨
        </Paint>

        <Paint
          effect='fire-and-ice'
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          🔥 Fire & Ice ❄️
        </Paint>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#ccc', fontSize: '16px' }}>
          This library contains hundreds of beautiful paint effects for 7TV emotes and text!
          <br />
          Click on any effect above to see it in action.
        </p>
      </div>
    </div>
  )
}

export default ExampleApp
