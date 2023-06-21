interface GameCurrencyList {
  title: string;
  icon: string;
  cover: string;
}

const GameCurrencyLists: GameCurrencyList[] = [
  { 
    title: '8 Ball Pool Coins',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/8-ball-pool.png?w=28&h=28&q=40',
    cover: 'https://pbs.twimg.com/media/DpT1JXOX4AEnjsC.jpg:large',
  },
  { 
    title: 'Albion Online Silver',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/albion-online.png?w=28&h=28&q=40',
    cover: 'https://assets.albiononline.com/uploads/media/default/media/43731e7b3e7b5fc7ed394a91b46d4462ac7154f5.jpeg',
  },
  { 
    title: 'Black Desert Online Silver',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/black-desert-online.png?w=28&h=28&q=40',
    cover: 'https://twinfinite.net/wp-content/uploads/2016/03/black-desert-online-screen.jpg?fit=800%2C450',
  },
  { 
    title: 'Dark and Darker',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/dark-and-darker.png?w=28&h=28&q=40',
    cover: 'https://assetsio.reedpopcdn.com/Dark-And-Darker-art-work.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp',
  },
  { 
    title: 'Diablo 4',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/diablo-4.png?w=28&h=28&q=40',
    cover: 'https://www.ggrecon.com//media/g3wd4yf2/diablo-4-switch-1.jpg?width=500&height=317.5?width=500&height=318',
  },
  { 
    title: 'Dofus Kamas',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/dofus.png?w=28&h=28&q=40',
    cover: 'https://servicekamas.com/wp-content/uploads/2020/11/vignette-guide-astuce-kamas-astuces-kama-dofus-scaled.jpg',
  },
  { 
    title: 'Elden Ring Runes',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/elden-ring.png?w=28&h=28&q=40',
    cover: 'https://cdn.mos.cms.futurecdn.net/hR5FUCuLVrvDWjQaWP26uf.jpg',
  },
  { 
    title: 'Elder Scrolls Online Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/elder-scrolls-online.png?w=28&h=28&q=40',
    cover: 'https://files.mmopixel.com/2/c685dc22f9454a7a97d95973475275b1.jpg',
  },
  { 
    title: 'Elite: Dangerous Credits',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/elite-dangerous.png?w=28&h=28&q=40',
    cover: 'https://imperium.news/wp-content/uploads/2017/06/Header_Template5.jpg',
  },
  { 
    title: 'Escape From Tarkov Roubles',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/escape-from-tarkov.png?w=28&h=28&q=40',
    cover: 'https://boostingexperts.com/wp-content/uploads/2021/07/Escape-From-Tarkov-Roubles-Farming-BoostingExperts.png',
  },
  { 
    title: 'EVE Echoes ISK',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/eve-echoes.png?w=28&h=28&q=40',
    cover: 'https://www.droidgamers.com/wp-content/uploads/2022/07/EVE-Echoes-anniversary-1.jpeg',
  },
  { 
    title: 'EVE Online ISK',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/eve-online.png?w=28&h=28&q=40',
    cover: 'https://images.ctfassets.net/7lhcm73ukv5p/54w9CO60bOTab2yldds8Iu/5cee97c153afce6de5bb0c8f0fc82f6c/Screen_NoCopy_3840x2160__1_.jpg?w=1290',
  },
  { 
    title: 'Fallout 76 Caps',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/fallout-76.png?w=28&h=28&q=40',
    cover: 'https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2018%2F10%2F26%2Fhow-to-get-more-bottle-caps-in-fallout-76-edit_feature.jpg&width=1032&sign=b46thzzQPSj48gbCQ2WZCby_FFKjeVyG4k82DvsTZNQ',
  },
  { 
    title: 'FIFA Coins',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/fifa.png?w=28&h=28&q=40',
    cover: 'https://www.fifa-infinity.com/wp-content/uploads/2023/04/fut-coins.jpg',
  },
  { 
    title: 'FIFA Mobile',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/fifa-mobile.png?w=28&h=28&q=40',
    cover: 'https://www.jeumobi.com/wp-content/uploads/2022/07/mode-manager-fifa-mobile-22.jpg',
  },
  { 
    title: 'Final Fantasy XI Gil',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/final-fantasy-xi.png?w=28&h=28&q=40',
    cover: 'https://files.mmopixel.com/2/1fd5f59bfe1d4a11a69d58f0229d6760.jpg',
  },
  { 
    title: 'Final Fantasy XIV Gil',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/final-fantasy-xiv.png?w=28&h=28&q=40',
    cover: 'https://www.highgroundgaming.com/wp-content/uploads/2022/11/FINAL-FANTASY-XIV-Online_20221117174457.png',
  },
  { 
    title: 'Forza Horizon 5 Credits',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/forza-horizon-5.png?w=28&h=28&q=40',
    cover: 'https://cdn.mos.cms.futurecdn.net/h8FeK6bc8jcxtoxoUz4pQf.jpg',
  },
  { 
    title: 'Grand Theft Auto 5 Money',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/gta-5.png?w=28&h=28&q=40',
    cover: 'https://images.pushsquare.com/2f8d31559b23b/gta-online-free-ps-plus-money-1.large.jpg',
  },
  { 
    title: 'Guild Wars 2 Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/guild-wars-2.png?w=28&h=28&q=40',
    cover: 'https://d7ya3krmkxqty.cloudfront.net/blog/gw2-how-to-make-gold.jpg',
  },
  { 
    title: 'Lost Ark Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/lost-ark.png?w=28&h=28&q=40',
    cover: 'https://prod.assets.earlygamecdn.com/images/lost-ark-2.jpg?mtime=1660210757',
  },
  { 
    title: 'MapleStory Mesos',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/maplestory.png?w=28&h=28&q=40',
    cover: 'https://files.mmosky.com/0/957348ba7aab41839dcbd2404f5102e9.JPEG',
  },
  { 
    title: 'Minecraft Hypixel Coins',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/minecraft.png?w=28&h=28&q=40',
    cover: 'https://files.mmopixel.com/0/a8d3f0e6895d49f8bbb7d61db7b8b84e.jpg',
  },
  { 
    title: 'New World Coins',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/new-world.png?w=28&h=28&q=40',
    cover: 'https://overgear.com/cdn-cgi/image/width=767,quality=85,format=webp/assets-image/b2e92f4d6df93e7d02689f8bd54aa57e-BG_New_World.jpg',
  },
  { 
    title: 'Old School RuneScape Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/osrs.png?w=28&h=28&q=40',
    cover: 'https://d7ya3krmkxqty.cloudfront.net/blog/snf-osrs-where-to-mine-osrs-gold.jpg',
  },
  { 
    title: 'Path of Exile Currency',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/path-of-exile.png?w=28&h=28&q=40',
    cover: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/07/path-of-exile-expedition-currency.jpg',
  },
  { 
    title: 'Roblox Robux',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/roblox.png?w=28&h=28&q=40',
    cover: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/08/05/Roblox-Codes-1024x576.jpg',
  },
  { 
    title: 'Rocket League Credits',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/rocket-league.png?w=28&h=28&q=40',
    cover: 'https://rocket-league.com/content/media/news/1200px/006d01f2751615982701.jpg',
  },
  { 
    title: 'RuneScape 3 Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/runescape-3.png?w=28&h=28&q=40',
    cover: 'https://www.nme.com/wp-content/uploads/2021/02/runescape@2000x1270.jpg',
  },
  { 
    title: 'SWTOR Credits',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/swtor.png?w=28&h=28&q=40',
    cover: 'https://w0.peakpx.com/wallpaper/435/905/HD-wallpaper-the-secret-of-the-success-about-swtor-credits-swtor-credits-cheap-swtor-credits-star-wars-credits-star-wars.jpg',
  },
  { 
    title: 'Temtem Pansun',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/temtem.png?w=28&h=28&q=40',
    cover: 'https://cdn.mos.cms.futurecdn.net/JERCcbCrsAEtYUbRW4ja2K.jpg',
  },
  { 
    title: 'Trove Flux',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/trove.png?w=28&h=28&q=40',
    cover: 'https://www.trionworlds.com/trove/wp-content/uploads/sites/7/2015/10/blog-economy.jpg',
  },
  { 
    title: 'Warframe Platinum',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/warframe.png?w=28&h=28&q=40',
    cover: 'https://store-images.s-microsoft.com/image/apps.50274.70985595898626754.c3a3fa92-3f53-468b-8be3-5f53cd0f54f7.cb4307db-04ea-457e-ad5b-e8a4b27dc258?mode=scale&q=90&h=720&w=1280&format=jpg',
  },
  { 
    title: 'World of Warcraft Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/world-of-warcraft.png?w=28&h=28&q=40',
    cover: 'https://www.eneba.com/blog/wp-content/uploads/2019/04/World-of-Warcraft-Gold.jpg',
  },
  { 
    title: 'WoW Classic Era Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/wow-classic.png?w=28&h=28&q=40',
    cover: 'https://wowvendor.com/app/uploads/2023/05/WoW-Classic-ERA-Gold-Farming-Guide-Tips-Methods-and-Spots.jpg',
  },
  { 
    title: 'WoW WotLK Gold',
    icon: 'https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/world-of-warcraft-wotlk.png?w=28&h=28&q=40',
    cover: 'https://skycoach.gg/storage/uploads/blog-posts/40/images/40_1664057552_900x700.webp',
  },
];

export default GameCurrencyLists;