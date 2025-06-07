import React, { useState } from 'react'
import { Paint } from '7tv-styles'
import './stylesheet.css'

function App () {
  // State for interactive examples
  const [selectedEffect1, setSelectedEffect1] = useState('summer')
  const [selectedEffect2, setSelectedEffect2] = useState('rainbow')
  const [selectedEffect3, setSelectedEffect3] = useState('fire-and-ice')

  // All available paint effects from the styles.json file
  const paintEffects = [
    'factory-error', 'summer', 'leprechaun', 'firefly', 'bubblegum', 'egg-hunt', 'lollipop', 'warm-winds', 'fairy-glow', 'monstera', '80s-pool',
    'sailors-delight', 'puddle', 'honeydetected', 'blueberry', 'fire-and-ice', 'kitty-cat', 'jungle', 'lobster', 'fresh-soda', 'farmers-sky',
    'lavender-field', 'solar-flare', 'hippie-van', 'uranium', 'peacock', 'catseye', 'grapefruit-slice', 'film-camera', 'copper-patina', 'monstera-variegata',
    'peppermint', 'slushie', 'life-in-plastic', 'autumn-forest', 'gummy-worm', 'atlantic-deeps', 'zombie', 'ice-cold', 'slashed', 'halloween-fever',
    'sixties', 'berry-good', 'present', 'gluhwein-time', 'sunrise', 'fireworks', 'hamburger', 'pastel', 'avocado', 'penguin',
    'nectarine', 'amethyst', 'menthol', 'swamp-ogre', 'heart', 'raspberry', 'cottagecore', 'crocus', 'lucky-charm', 'pot-of-gold',
    'nightclub', 'easter-candy', 'prismatic', 'alien-please', 'rabbit', 'latte-macchiato', 'tropical', 'fantabulous', 'cloudy', 'sugar-mint',
    'chamomile', 'rainbow', 'hibiscus', 'lemon-slice', 'mojito', 'breeze', 'celestial', 'aquamarine', 'watermelon-slice', 'citrus-punch',
    'cream-soda', 'beach-ball', 'popsicle', 'rhubarb', 'orchid', 'wisteria', 'coral-reef', 'pink-princess', 'corncob', 'ultraviolet',
    'sunflower', 'horizon', 'bloody-mary', 'skeleton', 'candy-corn', 'plague', 'retrovision-', 'limoncello', 'firebrand', 'fall-leaves',
    'sour-candy', 'shoreline', 'nightbloom', 'mistletoe', 'iceberg', 'vaporwave', 'glazed-donut', 'north-star', 'pink-lemonade', 'warlock',
    'pohutukawa', 'juice-box', 'rosé', 'irishman', 'spring-flowers', 'radical', 'fried-egg', 'easter-egg', 'pastel-sky', 'warmer-nights',
    'spaceship', 'cinder', 'sunlight', 'pineapple', 'cinco-de-mayo', 'gamer-girl', 'neapolitan', 'faint-lilac', 'pride-month', 'anodized',
    'toothpaste', 'blossom', 'hypselodoris', 'dinosaur', 'beach-please', 'friendship', 'clownfish', 'mango', 'slurpee', 'tie-dye',
    'cocktail', 'frutiger-aero', 'sea-foam', 'mana-potion', 'ribbon', 'strawberry-crème', 'the-joker', 'pastelween', 'impish-blush', 'hellfire',
    'cyber-optics', 'fuchsia', 'turkey-season', 'elder-dragon', 'divided', 'kawaii', 'wrapped', 'glowing-ember', 'eggnog', 'jellybean',
    'frostbite', 'rose-gold', 'firecracker', 'divine', 'blue-jay', 'stupid-cupid', 'mochi', 'elden-lord', 'sunset-fizz', 'snowdrop',
    'bouquet', 'zesty-lemon', 'factory-error', 'cardinal', 'forest-spring', 'carrot-cake', 'sprinkles', 'silver-flare', 'pecky-chicken', 'supernova',
    'nuclear-waste', 'minty-wave', 'sour-melon', 'primary', 'scorched', 'enchanted', 'atlantis', 'unicorn', 'tropica'
  ]

  return (
    <div style={{
      padding: '40px',
      minHeight: '100vh',
      backgroundColor: '#121212',
    }}
    >
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
        7TV Paint Effects Library
      </h1>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>All Paint Effects ({paintEffects.length} total)</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '15px',
          marginBottom: '30px',
          maxHeight: '600px',
          overflowY: 'auto',
          padding: '10px',
          border: '1px solid #333',
          borderRadius: '8px'
        }}
        >
          {paintEffects.map((effect) => (
            <Paint
              key={effect}
              effect={effect}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => { e.target.style.transform = 'scale(1.35)' }}
              onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
              onClick={() => {
                setSelectedEffect1(effect)
                setSelectedEffect2(effect)
                setSelectedEffect3(effect)
              }}
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
          effect={selectedEffect1}
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          {selectedEffect1.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')} VIBES
        </Paint>

        <Paint
          effect={selectedEffect2}
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          {selectedEffect2.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')} Magic ✨
        </Paint>

        <Paint
          effect={selectedEffect3}
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          🔥 {selectedEffect3.split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')} ❄️
        </Paint>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#ccc', fontSize: '16px' }}>
          This library contains hundreds of beautiful paint effects from 7TV.app ty friends &hearts;!
          <br />
          Click on any effect above to see it in action.
        </p>
      </div>
    </div>
  )
}

export default App
