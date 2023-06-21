interface GameCurrencyList {
  title: string;
  icon: string;
}

const GameCurrencyLists: GameCurrencyList[] = [
  { title: '8 Ball Pool Coins', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/8-ball-pool.png?w=28&h=28&q=40' },
  { title: 'Albion Online Silver', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/albion-online.png?w=28&h=28&q=40' },
  { title: 'Black Desert Online Silver', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/black-desert-online.png?w=28&h=28&q=40' },
  { title: 'Dark and Darker', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/dark-and-darker.png?w=28&h=28&q=40' },
  { title: 'Diablo 4', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/diablo-4.png?w=28&h=28&q=40' },
  { title: 'Dofus Kamas', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/dofus.png?w=28&h=28&q=40' },
  { title: 'Elden Ring Runes', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/elden-ring.png?w=28&h=28&q=40' },
  { title: 'Elder Scrolls Online Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/elder-scrolls-online.png?w=28&h=28&q=40' },
  { title: 'Elite: Dangerous Credits', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/elite-dangerous.png?w=28&h=28&q=40' },
  { title: 'Escape From Tarkov Roubles', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/escape-from-tarkov.png?w=28&h=28&q=40' },
  { title: 'EVE Echoes ISK', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/eve-echoes.png?w=28&h=28&q=40' },
  { title: 'EVE Online ISK', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/eve-online.png?w=28&h=28&q=40' },
  { title: 'Fallout 76 Caps', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/fallout-76.png?w=28&h=28&q=40' },
  { title: 'FIFA Coins', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/fifa.png?w=28&h=28&q=40' },
  { title: 'FIFA Mobile', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/fifa-mobile.png?w=28&h=28&q=40' },
  { title: 'Final Fantasy XI Gil', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/final-fantasy-xi.png?w=28&h=28&q=40' },
  { title: 'Final Fantasy XIV Gil', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/final-fantasy-xiv.png?w=28&h=28&q=40' },
  { title: 'Forza Horizon 5 Credits', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/forza-horizon-5.png?w=28&h=28&q=40' },
  { title: 'Grand Theft Auto 5 Money', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/gta-5.png?w=28&h=28&q=40' },
  { title: 'Guild Wars 2 Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/guild-wars-2.png?w=28&h=28&q=40' },
  { title: 'Lost Ark Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/lost-ark.png?w=28&h=28&q=40' },
  { title: 'MapleStory Mesos', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/maplestory.png?w=28&h=28&q=40' },
  { title: 'Minecraft Hypixel Coins', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/minecraft.png?w=28&h=28&q=40' },
  { title: 'New World Coins', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/new-world.png?w=28&h=28&q=40' },
  { title: 'Old School RuneScape Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/osrs.png?w=28&h=28&q=40' },
  { title: 'Path of Exile Currency', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/path-of-exile.png?w=28&h=28&q=40' },
  { title: 'Roblox Robux', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/roblox.png?w=28&h=28&q=40' },
  { title: 'Rocket League Credits', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/rocket-league.png?w=28&h=28&q=40' },
  { title: 'RuneScape 3 Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/runescape-3.png?w=28&h=28&q=40' },
  { title: 'SWTOR Credits', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/swtor.png?w=28&h=28&q=40' },
  { title: 'Temtem Pansun', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/temtem.png?w=28&h=28&q=40' },
  { title: 'Trove Flux', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/trove.png?w=28&h=28&q=40' },
  { title: 'Warframe Platinum', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/warframe.png?w=28&h=28&q=40' },
  { title: 'World of Warcraft Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/world-of-warcraft.png?w=28&h=28&q=40' },
  { title: 'WoW Classic Era Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/wow-classic.png?w=28&h=28&q=40' },
  { title: 'WoW WotLK Gold', icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/world-of-warcraft-wotlk.png?w=28&h=28&q=40' },
];

export default GameCurrencyLists;