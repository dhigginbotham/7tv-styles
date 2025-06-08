import React, { useState, useMemo } from 'react'
import { Paint } from '7tv-styles'
import './stylesheet.css'

function App() {
  // State for interactive examples
  const [selectedEffect1, setSelectedEffect1] = useState('summer')
  const [selectedEffect2, setSelectedEffect2] = useState('rainbow')
  const [selectedEffect3, setSelectedEffect3] = useState('fire-and-ice')

  // State for interactive demo form
  const [demoEffect, setDemoEffect] = useState('vaporwave')
  const [demoText, setDemoText] = useState('Your Custom Text Here!')
  const [effectSearch, setEffectSearch] = useState('')

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

  // Filter effects based on search
  const filteredEffects = useMemo(() => {
    if (!effectSearch) return paintEffects
    return paintEffects.filter(effect =>
      effect.toLowerCase().includes(effectSearch.toLowerCase())
    )
  }, [effectSearch, paintEffects])

  return (
    <div style={{
      padding: '40px',
      minHeight: '100vh',
      backgroundColor: '#121212',
    }}>
      <Paint
        effect='vaporwave'
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          display: 'block',
          textAlign: 'center',
          marginBottom: '20px'
        }}
      >
        7TV Styles
      </Paint>

      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#e0e0e0',
        fontSize: '18px',
        lineHeight: '1.6'
      }}>
        <p>A React component library for beautiful paint effects and gradient text styling</p>
        <p style={{ fontSize: '16px', color: '#94a3b8' }}>
          Featuring <strong>189+ unique effects</strong> scraped from 7tv.app with <strong>tree shaking optimization</strong>
        </p>
      </div>

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
        }}>
          {paintEffects.map((effect) => (
            <Paint
              key={effect}
              effect={effect}
              style={{
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

      {/* Interactive Demo Form */}
      <div style={{ marginBottom: '60px' }}>
        <Paint
          effect='cyber-optics'
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '30px'
          }}
        >
          🎮 Interactive Demo
        </Paint>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #333',
          marginBottom: '30px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {/* Effect Selection with Autocomplete */}
            <div>
              <label style={{
                color: '#e0e0e0',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '10px'
              }}>
                🎨 Select Effect:
              </label>
              <input
                type='text'
                value={effectSearch}
                onChange={(e) => setEffectSearch(e.target.value)}
                placeholder='Search effects... (e.g., vapor, summer, rainbow)'
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  color: '#e0e0e0',
                  marginBottom: '10px'
                }}
              />

              <div style={{
                maxHeight: '200px',
                overflowY: 'auto',
                border: '1px solid #444',
                borderRadius: '6px',
                backgroundColor: '#2a2a2a'
              }}>
                {filteredEffects.slice(0, 10).map((effect) => (
                  <div
                    key={effect}
                    onClick={() => {
                      setDemoEffect(effect)
                      setEffectSearch('')
                    }}
                    style={{
                      padding: '10px 15px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #333',
                      color: demoEffect === effect ? '#10b981' : '#e0e0e0',
                      backgroundColor: demoEffect === effect ? '#1a2e1a' : 'transparent',
                      fontSize: '14px'
                    }}
                    onMouseEnter={(e) => {
                      if (demoEffect !== effect) {
                        e.target.style.backgroundColor = '#333'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (demoEffect !== effect) {
                        e.target.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    <Paint effect={effect} style={{ fontSize: '14px', marginRight: '10px' }}>
                      {effect.split('-').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </Paint>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Text Input */}
            <div>
              <label style={{
                color: '#e0e0e0',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '10px'
              }}>
                ✏️ Custom Text:
              </label>
              <textarea
                value={demoText}
                onChange={(e) => setDemoText(e.target.value)}
                placeholder='Enter your custom text here...'
                style={{
                  width: '100%',
                  height: '120px',
                  padding: '12px',
                  fontSize: '16px',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  color: '#e0e0e0',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />

              <div style={{
                marginTop: '10px',
                fontSize: '12px',
                color: '#94a3b8'
              }}>
                Try: "Hello World!", "Amazing Vibes ✨", "7TV Rocks! 🔥"
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#0f0f0f',
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <div style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '14px' }}>
              Live Preview:
            </div>

            <Paint
              effect={demoEffect}
              style={{
                fontSize: '42px',
                fontWeight: 'bold',
                display: 'block',
                marginBottom: '15px',
                wordBreak: 'break-word'
              }}
            >
              {demoText}
            </Paint>

            <div style={{
              color: '#64748b',
              fontSize: '12px',
              marginTop: '15px'
            }}>
              Effect: <span style={{ color: '#10b981' }}>{demoEffect}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div style={{ marginBottom: '60px' }}>
        <Paint
          effect='enchanted'
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '30px'
          }}
        >
          📚 Documentation & Features
        </Paint>

        {/* Quick Start */}
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #333',
          marginBottom: '30px'
        }}>
          <Paint
            effect='summer'
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            🚀 Quick Start
          </Paint>

          <div style={{ color: '#e0e0e0', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <p>Get started with 7TV Styles in seconds:</p>
          </div>

          <div style={{
            backgroundColor: '#0f172a',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #1e293b',
            marginBottom: '20px',
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#e2e8f0'
          }}>
            <div style={{ color: '#10b981', marginBottom: '10px' }}>{'// Install'}</div>
            <div style={{ marginBottom: '15px' }}>npm install 7tv-styles</div>

            <div style={{ color: '#10b981', marginBottom: '10px' }}>{'// Tree-Shakeable Usage (Recommended)'}</div>
            <div><span style={{ color: '#f59e0b' }}>import</span> {`{ PaintTreeShakeable as Paint }`} <span style={{ color: '#f59e0b' }}>from</span> <span style={{ color: '#10b981' }}>'7tv-styles/tree-shakeable'</span></div>
            <div><span style={{ color: '#f59e0b' }}>import</span> {`{ summer, rainbow, fireAndIce }`} <span style={{ color: '#f59e0b' }}>from</span> <span style={{ color: '#10b981' }}>'7tv-styles/effects'</span></div>
            <br />
            <div><span style={{ color: '#3b82f6' }}>&lt;Paint</span> <span style={{ color: '#f59e0b' }}>effectStyle</span>=<span style={{ color: '#10b981' }}>{`{summer}`}</span><span style={{ color: '#3b82f6' }}>&gt;</span>Summer Vibes<span style={{ color: '#3b82f6' }}>&lt;/Paint&gt;</span></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ 189+ unique effects</div>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Tree shaking support</div>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Dynamic gradient scaling</div>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Zero dependencies</div>
          </div>
        </div>

        {/* Dynamic Gradient Scaling */}
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #333',
          marginBottom: '30px'
        }}>
          <Paint
            effect='factory-error'
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            🔥 Dynamic Gradient Scaling
          </Paint>

          <div style={{ color: '#e0e0e0', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <p>Our <strong>sick ass dynamic scaling system</strong> automatically scales gradient properties based on both element dimensions and font size to maintain consistent visual impact across different text sizes.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div style={{
              backgroundColor: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <div style={{ color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                📐 Mathematical Scaling
              </div>
              <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
                Gradient angles scaled using perceptual scaling laws with power function (exponent 0.6)
              </div>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <div style={{ color: '#3b82f6', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                🎯 Real-time Tracking
              </div>
              <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
                Element dimensions measured using getBoundingClientRect() for precise scaling
              </div>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <div style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                ⚡ Zero Config
              </div>
              <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
                Automatic scaling with zero configuration - just pure vibes! ✨
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Paint effect='factory-error' style={{ fontSize: '12px', marginRight: '20px' }}>Small</Paint>
            <Paint effect='factory-error' style={{ fontSize: '24px', marginRight: '20px' }}>Medium</Paint>
            <Paint effect='factory-error' style={{ fontSize: '36px' }}>Large</Paint>
            <div style={{ color: '#64748b', fontSize: '12px', marginTop: '10px' }}>
              Same effect, different sizes - perfectly scaled gradients!
            </div>
          </div>
        </div>
      </div>

      {/* Tree Shaking Documentation Section */}
      <div style={{ marginTop: '60px', marginBottom: '40px' }}>
        <Paint
          effect='vaporwave'
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '30px'
          }}
        >
          🌳 Tree Shaking Optimization
        </Paint>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #333',
          marginBottom: '30px'
        }}>
          <Paint
            effect='summer'
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            📦 Bundle Size Optimization
          </Paint>

          <div style={{ color: '#e0e0e0', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <p>This library now supports <strong>tree shaking</strong> for optimal bundle sizes! Import only the effects you need:</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div style={{
              backgroundColor: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <div style={{ color: '#10b981', fontSize: '24px', fontWeight: 'bold' }}>98.0%</div>
              <div style={{ color: '#94a3b8', fontSize: '14px' }}>Bundle Size Reduction</div>
              <div style={{ color: '#64748b', fontSize: '12px', marginTop: '5px' }}>75.5 KB → 1.5 KB</div>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <div style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 'bold' }}>189</div>
              <div style={{ color: '#94a3b8', fontSize: '14px' }}>Individual Files</div>
              <div style={{ color: '#64748b', fontSize: '12px', marginTop: '5px' }}>~756 bytes each</div>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #1e293b'
            }}>
              <div style={{ color: '#f59e0b', fontSize: '24px', fontWeight: 'bold' }}>Zero</div>
              <div style={{ color: '#94a3b8', fontSize: '14px' }}>Runtime Overhead</div>
              <div style={{ color: '#64748b', fontSize: '12px', marginTop: '5px' }}>Dead code eliminated</div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #333',
          marginBottom: '30px'
        }}>
          <Paint
            effect='cyber-optics'
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            🧪 Testing & Verification
          </Paint>

          <div style={{ color: '#e0e0e0', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <p>Our tree shaking implementation is thoroughly tested and verified with actual bundle size measurements.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Dead code elimination verified</div>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Bundle sizes measured (KB/MB formats)</div>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Import functionality tested</div>
            <div style={{ color: '#10b981', fontSize: '14px' }}>✅ Backward compatibility maintained</div>
          </div>
        </div>

        <Paint
          effect='enchanted'
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          📚 Tree Shaking Benefits
        </Paint>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <div style={{ color: '#3b82f6', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              📖 Optimal Imports
            </div>
            <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
              Import only the effects you need. Each effect is ~756 bytes instead of the full 75.5 KB library.
            </div>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <div style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              🧪 Verified Results
            </div>
            <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
              Comprehensive test suite verifies dead code elimination and measures real bundle sizes.
            </div>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid #333'
          }}>
            <div style={{ color: '#f59e0b', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              ⚡ Performance
            </div>
            <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
              98.0% bundle size reduction confirmed. Faster builds, smaller bundles, better UX.
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#ccc', fontSize: '16px' }}>
          This library contains hundreds of beautiful paint effects from 7TV.app ty friends &hearts;!
          <br />
          Click on any effect above to see it in action, or try the interactive demo!
        </p>
      </div>
    </div>
  )
}

export default App
