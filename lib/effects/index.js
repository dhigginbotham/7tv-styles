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
import styles from '../styles.json';

/**
 * Extract individual effects from the styles object
 * @type {Object<string, Object>}
 */
var effects = {};
Object.keys(styles).forEach(function (className) {
  if (className.startsWith('.7tv__paint-effects--')) {
    var effectName = className.replace('.7tv__paint-effects--', '');
    effects[effectName] = styles[className];
  }
});

// Export individual effects for tree shaking

/** @type {Object} Summer gradient effect with pink/purple tones */
export var summer = effects['summer'];

/** @type {Object} Rainbow gradient effect with full spectrum colors */
export var rainbow = effects['rainbow'];

/** @type {Object} Fire and ice gradient effect with red/blue contrast */
export var fireAndIce = effects['fire-and-ice'];

/** @type {Object} Factory error gradient effect with striped pattern */
export var factoryError = effects['factory-error'];
export var leprechaun = effects['leprechaun'];
export var firefly = effects['firefly'];
export var bubblegum = effects['bubblegum'];
export var eggHunt = effects['egg-hunt'];
export var lollipop = effects['lollipop'];
export var warmWinds = effects['warm-winds'];
export var fairyGlow = effects['fairy-glow'];
export var monstera = effects['monstera'];
export var eightsPool = effects['80s-pool'];
export var sailorsDelight = effects['sailors-delight'];
export var puddle = effects['puddle'];
export var honeydetected = effects['honeydetected'];
export var blueberry = effects['blueberry'];
export var kittyCat = effects['kitty-cat'];
export var jungle = effects['jungle'];
export var lobster = effects['lobster'];
export var freshSoda = effects['fresh-soda'];
export var farmersSky = effects['farmers-sky'];
export var lavenderField = effects['lavender-field'];
export var solarFlare = effects['solar-flare'];
export var hippieVan = effects['hippie-van'];
export var uranium = effects['uranium'];
export var peacock = effects['peacock'];
export var catseye = effects['catseye'];
export var grapefruitSlice = effects['grapefruit-slice'];
export var filmCamera = effects['film-camera'];
export var copperPatina = effects['copper-patina'];
export var monsteraVariegata = effects['monstera-variegata'];
export var peppermint = effects['peppermint'];
export var slushie = effects['slushie'];
export var lifeInPlastic = effects['life-in-plastic'];
export var autumnForest = effects['autumn-forest'];
export var gummyWorm = effects['gummy-worm'];
export var atlanticDeeps = effects['atlantic-deeps'];
export var zombie = effects['zombie'];
export var iceCold = effects['ice-cold'];
export var slashed = effects['slashed'];
export var halloweenFever = effects['halloween-fever'];
export var sixties = effects['sixties'];
export var berryGood = effects['berry-good'];
export var present = effects['present'];
export var gluhweinTime = effects['gluhwein-time'];
export var sunrise = effects['sunrise'];
export var fireworks = effects['fireworks'];
export var hamburger = effects['hamburger'];
export var pastel = effects['pastel'];
export var avocado = effects['avocado'];
export var penguin = effects['penguin'];
export var nectarine = effects['nectarine'];
export var amethyst = effects['amethyst'];
export var menthol = effects['menthol'];
export var swampOgre = effects['swamp-ogre'];
export var heart = effects['heart'];
export var raspberry = effects['raspberry'];
export var cottagecore = effects['cottagecore'];
export var crocus = effects['crocus'];
export var luckyCharm = effects['lucky-charm'];
export var potOfGold = effects['pot-of-gold'];
export var nightclub = effects['nightclub'];
export var easterCandy = effects['easter-candy'];
export var prismatic = effects['prismatic'];
export var alienPlease = effects['alien-please'];
export var rabbit = effects['rabbit'];
export var latteMacchiato = effects['latte-macchiato'];
export var tropical = effects['tropical'];
export var fantabulous = effects['fantabulous'];
export var cloudy = effects['cloudy'];
export var sugarMint = effects['sugar-mint'];
export var chamomile = effects['chamomile'];
export var hibiscus = effects['hibiscus'];
export var lemonSlice = effects['lemon-slice'];
export var mojito = effects['mojito'];
export var breeze = effects['breeze'];
export var celestial = effects['celestial'];
export var aquamarine = effects['aquamarine'];
export var watermelonSlice = effects['watermelon-slice'];
export var citrusPunch = effects['citrus-punch'];
export var creamSoda = effects['cream-soda'];
export var beachBall = effects['beach-ball'];
export var popsicle = effects['popsicle'];
export var rhubarb = effects['rhubarb'];
export var orchid = effects['orchid'];
export var wisteria = effects['wisteria'];
export var coralReef = effects['coral-reef'];
export var pinkPrincess = effects['pink-princess'];
export var corncob = effects['corncob'];
export var ultraviolet = effects['ultraviolet'];
export var sunflower = effects['sunflower'];
export var horizon = effects['horizon'];
export var bloodyMary = effects['bloody-mary'];
export var skeleton = effects['skeleton'];
export var candyCorn = effects['candy-corn'];
export var plague = effects['plague'];
export var retrovision = effects['retrovision-'];
export var limoncello = effects['limoncello'];
export var firebrand = effects['firebrand'];
export var fallLeaves = effects['fall-leaves'];
export var sourCandy = effects['sour-candy'];
export var shoreline = effects['shoreline'];
export var nightbloom = effects['nightbloom'];
export var mistletoe = effects['mistletoe'];
export var iceberg = effects['iceberg'];
export var vaporwave = effects['vaporwave'];
export var glazedDonut = effects['glazed-donut'];
export var northStar = effects['north-star'];
export var pinkLemonade = effects['pink-lemonade'];
export var warlock = effects['warlock'];
export var pohutukawa = effects['pohutukawa'];
export var juiceBox = effects['juice-box'];
export var rose = effects['rosé'];
export var irishman = effects['irishman'];
export var springFlowers = effects['spring-flowers'];
export var radical = effects['radical'];
export var friedEgg = effects['fried-egg'];
export var easterEgg = effects['easter-egg'];
export var pastelSky = effects['pastel-sky'];
export var warmerNights = effects['warmer-nights'];
export var spaceship = effects['spaceship'];
export var cinder = effects['cinder'];
export var sunlight = effects['sunlight'];
export var pineapple = effects['pineapple'];
export var cincoDeMayo = effects['cinco-de-mayo'];
export var gamerGirl = effects['gamer-girl'];
export var neapolitan = effects['neapolitan'];
export var faintLilac = effects['faint-lilac'];
export var prideMonth = effects['pride-month'];
export var anodized = effects['anodized'];
export var toothpaste = effects['toothpaste'];
export var blossom = effects['blossom'];
export var hypselodoris = effects['hypselodoris'];
export var dinosaur = effects['dinosaur'];
export var beachPlease = effects['beach-please'];
export var friendship = effects['friendship'];
export var clownfish = effects['clownfish'];
export var mango = effects['mango'];
export var slurpee = effects['slurpee'];
export var tieDye = effects['tie-dye'];
export var cocktail = effects['cocktail'];
export var frutigerAero = effects['frutiger-aero'];
export var seaFoam = effects['sea-foam'];
export var manaPotion = effects['mana-potion'];
export var ribbon = effects['ribbon'];
export var strawberryCreme = effects['strawberry-crème'];
export var theJoker = effects['the-joker'];
export var pastelween = effects['pastelween'];
export var impishBlush = effects['impish-blush'];
export var hellfire = effects['hellfire'];
export var cyberOptics = effects['cyber-optics'];
export var fuchsia = effects['fuchsia'];
export var turkeySeason = effects['turkey-season'];
export var elderDragon = effects['elder-dragon'];
export var divided = effects['divided'];
export var kawaii = effects['kawaii'];
export var wrapped = effects['wrapped'];
export var glowingEmber = effects['glowing-ember'];
export var eggnog = effects['eggnog'];
export var jellybean = effects['jellybean'];
export var frostbite = effects['frostbite'];
export var roseGold = effects['rose-gold'];
export var firecracker = effects['firecracker'];
export var divine = effects['divine'];
export var blueJay = effects['blue-jay'];
export var stupidCupid = effects['stupid-cupid'];
export var mochi = effects['mochi'];
export var eldenLord = effects['elden-lord'];
export var sunsetFizz = effects['sunset-fizz'];
export var snowdrop = effects['snowdrop'];
export var bouquet = effects['bouquet'];
export var zestyLemon = effects['zesty-lemon'];
export var cardinal = effects['cardinal'];
export var forestSpring = effects['forest-spring'];
export var carrotCake = effects['carrot-cake'];
export var sprinkles = effects['sprinkles'];
export var silverFlare = effects['silver-flare'];
export var peckyChicken = effects['pecky-chicken'];
export var supernova = effects['supernova'];
export var nuclearWaste = effects['nuclear-waste'];
export var mintyWave = effects['minty-wave'];
export var sourMelon = effects['sour-melon'];
export var primary = effects['primary'];
export var scorched = effects['scorched'];
export var enchanted = effects['enchanted'];
export var atlantis = effects['atlantis'];
export var unicorn = effects['unicorn'];
export var tropica = effects['tropica'];

/**
 * All effects as a single object for backward compatibility
 * @type {Object<string, Object>} Object containing all 189+ paint effects
 *
 * @example
 * import { allEffects } from '7tv-styles/effects'
 * const summerStyle = allEffects.summer
 */
export var allEffects = effects;

/**
 * Default export containing all effects for convenience
 * @type {Object<string, Object>} Object containing all 189+ paint effects
 *
 * @example
 * import effects from '7tv-styles/effects'
 * const rainbowStyle = effects.rainbow
 */
export default effects;