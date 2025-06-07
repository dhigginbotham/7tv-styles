/**
 * Individual paint effect exports for tree-shaking optimization
 *
 * This module exports each of the 189+ 7TV paint effects as individual named exports,
 * enabling tree-shaking to include only the effects you actually use in your bundle.
 *
 * @fileoverview Tree-shakeable paint effect exports
 * @author Vibe Coding Team
 *
 * @example
 * // Import only the effects you need
 * import { summer, rainbow, factoryError } from '7tv-styles/effects'
 *
 * @example
 * // Use with tree-shakeable Paint component
 * import { PaintTreeShakeable as Paint } from '7tv-styles/tree-shakeable'
 * import { vaporwave } from '7tv-styles/effects'
 *
 * <Paint effectStyle={vaporwave}>Vaporwave Text</Paint>
 */

// Individual effect exports for tree shaking
import styles from '../styles.json'

/**
 * Extract individual effects from the styles object
 * @type {Object<string, Object>}
 */
const effects = {}

Object.keys(styles).forEach(className => {
  if (className.startsWith('.7tv__paint-effects--')) {
    const effectName = className.replace('.7tv__paint-effects--', '')
    effects[effectName] = styles[className]
  }
})

// Export individual effects for tree shaking

/** @type {Object} Summer gradient effect with pink/purple tones */
export const summer = effects['summer']

/** @type {Object} Rainbow gradient effect with full spectrum colors */
export const rainbow = effects['rainbow']

/** @type {Object} Fire and ice gradient effect with red/blue contrast */
export const fireAndIce = effects['fire-and-ice']

/** @type {Object} Factory error gradient effect with striped pattern */
export const factoryError = effects['factory-error']
export const leprechaun = effects['leprechaun']
export const firefly = effects['firefly']
export const bubblegum = effects['bubblegum']
export const eggHunt = effects['egg-hunt']
export const lollipop = effects['lollipop']
export const warmWinds = effects['warm-winds']
export const fairyGlow = effects['fairy-glow']
export const monstera = effects['monstera']
export const eightsPool = effects['80s-pool']
export const sailorsDelight = effects['sailors-delight']
export const puddle = effects['puddle']
export const honeydetected = effects['honeydetected']
export const blueberry = effects['blueberry']
export const kittyCat = effects['kitty-cat']
export const jungle = effects['jungle']
export const lobster = effects['lobster']
export const freshSoda = effects['fresh-soda']
export const farmersSky = effects['farmers-sky']
export const lavenderField = effects['lavender-field']
export const solarFlare = effects['solar-flare']
export const hippieVan = effects['hippie-van']
export const uranium = effects['uranium']
export const peacock = effects['peacock']
export const catseye = effects['catseye']
export const grapefruitSlice = effects['grapefruit-slice']
export const filmCamera = effects['film-camera']
export const copperPatina = effects['copper-patina']
export const monsteraVariegata = effects['monstera-variegata']
export const peppermint = effects['peppermint']
export const slushie = effects['slushie']
export const lifeInPlastic = effects['life-in-plastic']
export const autumnForest = effects['autumn-forest']
export const gummyWorm = effects['gummy-worm']
export const atlanticDeeps = effects['atlantic-deeps']
export const zombie = effects['zombie']
export const iceCold = effects['ice-cold']
export const slashed = effects['slashed']
export const halloweenFever = effects['halloween-fever']
export const sixties = effects['sixties']
export const berryGood = effects['berry-good']
export const present = effects['present']
export const gluhweinTime = effects['gluhwein-time']
export const sunrise = effects['sunrise']
export const fireworks = effects['fireworks']
export const hamburger = effects['hamburger']
export const pastel = effects['pastel']
export const avocado = effects['avocado']
export const penguin = effects['penguin']
export const nectarine = effects['nectarine']
export const amethyst = effects['amethyst']
export const menthol = effects['menthol']
export const swampOgre = effects['swamp-ogre']
export const heart = effects['heart']
export const raspberry = effects['raspberry']
export const cottagecore = effects['cottagecore']
export const crocus = effects['crocus']
export const luckyCharm = effects['lucky-charm']
export const potOfGold = effects['pot-of-gold']
export const nightclub = effects['nightclub']
export const easterCandy = effects['easter-candy']
export const prismatic = effects['prismatic']
export const alienPlease = effects['alien-please']
export const rabbit = effects['rabbit']
export const latteMacchiato = effects['latte-macchiato']
export const tropical = effects['tropical']
export const fantabulous = effects['fantabulous']
export const cloudy = effects['cloudy']
export const sugarMint = effects['sugar-mint']
export const chamomile = effects['chamomile']
export const hibiscus = effects['hibiscus']
export const lemonSlice = effects['lemon-slice']
export const mojito = effects['mojito']
export const breeze = effects['breeze']
export const celestial = effects['celestial']
export const aquamarine = effects['aquamarine']
export const watermelonSlice = effects['watermelon-slice']
export const citrusPunch = effects['citrus-punch']
export const creamSoda = effects['cream-soda']
export const beachBall = effects['beach-ball']
export const popsicle = effects['popsicle']
export const rhubarb = effects['rhubarb']
export const orchid = effects['orchid']
export const wisteria = effects['wisteria']
export const coralReef = effects['coral-reef']
export const pinkPrincess = effects['pink-princess']
export const corncob = effects['corncob']
export const ultraviolet = effects['ultraviolet']
export const sunflower = effects['sunflower']
export const horizon = effects['horizon']
export const bloodyMary = effects['bloody-mary']
export const skeleton = effects['skeleton']
export const candyCorn = effects['candy-corn']
export const plague = effects['plague']
export const retrovision = effects['retrovision-']
export const limoncello = effects['limoncello']
export const firebrand = effects['firebrand']
export const fallLeaves = effects['fall-leaves']
export const sourCandy = effects['sour-candy']
export const shoreline = effects['shoreline']
export const nightbloom = effects['nightbloom']
export const mistletoe = effects['mistletoe']
export const iceberg = effects['iceberg']
export const vaporwave = effects['vaporwave']
export const glazedDonut = effects['glazed-donut']
export const northStar = effects['north-star']
export const pinkLemonade = effects['pink-lemonade']
export const warlock = effects['warlock']
export const pohutukawa = effects['pohutukawa']
export const juiceBox = effects['juice-box']
export const rose = effects['rosé']
export const irishman = effects['irishman']
export const springFlowers = effects['spring-flowers']
export const radical = effects['radical']
export const friedEgg = effects['fried-egg']
export const easterEgg = effects['easter-egg']
export const pastelSky = effects['pastel-sky']
export const warmerNights = effects['warmer-nights']
export const spaceship = effects['spaceship']
export const cinder = effects['cinder']
export const sunlight = effects['sunlight']
export const pineapple = effects['pineapple']
export const cincoDeMayo = effects['cinco-de-mayo']
export const gamerGirl = effects['gamer-girl']
export const neapolitan = effects['neapolitan']
export const faintLilac = effects['faint-lilac']
export const prideMonth = effects['pride-month']
export const anodized = effects['anodized']
export const toothpaste = effects['toothpaste']
export const blossom = effects['blossom']
export const hypselodoris = effects['hypselodoris']
export const dinosaur = effects['dinosaur']
export const beachPlease = effects['beach-please']
export const friendship = effects['friendship']
export const clownfish = effects['clownfish']
export const mango = effects['mango']
export const slurpee = effects['slurpee']
export const tieDye = effects['tie-dye']
export const cocktail = effects['cocktail']
export const frutigerAero = effects['frutiger-aero']
export const seaFoam = effects['sea-foam']
export const manaPotion = effects['mana-potion']
export const ribbon = effects['ribbon']
export const strawberryCreme = effects['strawberry-crème']
export const theJoker = effects['the-joker']
export const pastelween = effects['pastelween']
export const impishBlush = effects['impish-blush']
export const hellfire = effects['hellfire']
export const cyberOptics = effects['cyber-optics']
export const fuchsia = effects['fuchsia']
export const turkeySeason = effects['turkey-season']
export const elderDragon = effects['elder-dragon']
export const divided = effects['divided']
export const kawaii = effects['kawaii']
export const wrapped = effects['wrapped']
export const glowingEmber = effects['glowing-ember']
export const eggnog = effects['eggnog']
export const jellybean = effects['jellybean']
export const frostbite = effects['frostbite']
export const roseGold = effects['rose-gold']
export const firecracker = effects['firecracker']
export const divine = effects['divine']
export const blueJay = effects['blue-jay']
export const stupidCupid = effects['stupid-cupid']
export const mochi = effects['mochi']
export const eldenLord = effects['elden-lord']
export const sunsetFizz = effects['sunset-fizz']
export const snowdrop = effects['snowdrop']
export const bouquet = effects['bouquet']
export const zestyLemon = effects['zesty-lemon']
export const cardinal = effects['cardinal']
export const forestSpring = effects['forest-spring']
export const carrotCake = effects['carrot-cake']
export const sprinkles = effects['sprinkles']
export const silverFlare = effects['silver-flare']
export const peckyChicken = effects['pecky-chicken']
export const supernova = effects['supernova']
export const nuclearWaste = effects['nuclear-waste']
export const mintyWave = effects['minty-wave']
export const sourMelon = effects['sour-melon']
export const primary = effects['primary']
export const scorched = effects['scorched']
export const enchanted = effects['enchanted']
export const atlantis = effects['atlantis']
export const unicorn = effects['unicorn']
export const tropica = effects['tropica']

/**
 * All effects as a single object for backward compatibility
 * @type {Object<string, Object>} Object containing all 189+ paint effects
 *
 * @example
 * import { allEffects } from '7tv-styles/effects'
 * const summerStyle = allEffects.summer
 */
export const allEffects = effects

/**
 * Default export containing all effects for convenience
 * @type {Object<string, Object>} Object containing all 189+ paint effects
 *
 * @example
 * import effects from '7tv-styles/effects'
 * const rainbowStyle = effects.rainbow
 */
export default effects
