import { v4 as uuidV4 } from 'uuid';

export const gameList = [
  {
    id: uuidV4(),
    name: 'Hades II',
    description:
      'Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this bewitching sequel to the award-winning rogue-like dungeon crawler.',
    folderName: 'hades-2',
    basePrice: '14.99',
    editions: [
      {
        id: 'base',
        name: 'Hades II',
        price: '14.99',
      },
    ],
    about:
      "<div className='about-game'><span className='text'>The first-ever sequel from Supergiant Games builds on the best aspects of the original god-like rogue-like dungeon crawler in an all-new, action-packed, endlessly replayable experience rooted in the Underworld of Greek myth and its deep connections to the dawn of witchcraft.</span><span className='about-heading'>BATTLE BEYOND THE UNDERWORLD</span><span className='text'>As the immortal Princess of the Underworld, you'll explore a bigger, deeper mythic world, vanquishing the forces of the Titan of Time with the full might of Olympus behind you, in a sweeping story that continually unfolds through your every setback and accomplishment.</span></div>",
    tags: ['Action', 'RPG', 'Roguelike', 'Action Roguelike'],
  },
  {
    id: uuidV4(),
    name: 'Homeworld 3',
    description:
      'The GOTY-winning sci-fi RTS returns with Homeworld 3. Assume control and battle through fleet combat in dazzling, fully 3D space while the award-winning story unfolds on a galactic scale.',
    folderName: 'homeworld-3',
    basePrice: '29.99',
    editions: [
      {
        id: 'base',
        name: 'Homeworld 3',
        price: '29.99',
      },
      {
        id: 'fleet-command',
        name: 'Homeworld 3 - Fleet Command Edition',
        price: '44.97',
      },
      {
        id: 'deluxe',
        name: 'Homeworld 3 - Deluxe Edition',
        price: '39.98',
      },
    ],
    about:
      "<div className='about-game'><span className='text'>Tactical, beautiful, and wholly unique, the GOTY-winning sci-fi RTS returns with Homeworld 3. Assume control and battle through fleet combat in dazzling, fully 3D space while the award-winning story unfolds on a galactic scale.</span><span className='about-heading'>COMBAT</span><span className='text'>Strategic freedom is yours. Hulking space derelicts called megaliths bring 3D terrain into the classic Homeworld battlespace. Use the crumbling remains of an ancient civilization to funnel foes into a brilliant ambush or hide your fleet from powerful enemies. Fortresses teem with menacing turrets and invite your strike craft into dangerous trench runs deep behind enemy lines. But not everything is in your control. Dangerous space phenomena like particle storms and asteroid fields will test even senior commanders.</span></div>",
    tags: ['Space', 'Strategy', 'RTS', 'Story Rich', 'Sci-fi', '3D'],
  },
  {
    id: uuidV4(),
    name: 'Elden Ring',
    description:
      'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    folderName: 'elden-ring',
    basePrice: '47.99',
    editions: [
      {
        id: 'base',
        name: 'Elden Ring',
        price: '47.99',
      },
      {
        id: 'erdtree',
        name: 'Elden Ring Shadow of the Erdtree Edition',
        price: '63.99',
      },
      {
        id: 'deluxe',
        name: 'Elden Ring Deluxe Edition',
        price: '79.99',
      },
    ],
    about:
      "<div className='about-game'><span className='text'>THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</span><span className='about-heading'>A Vast World Full of Excitement</span><span className='text'>A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.</span></div>",
    tags: ['Souls-Like', 'Dark Fantasy', 'Open World', 'RPG'],
  },
];

export const specialOffers = [
  {
    id: uuidV4(),
    name: 'The Last of Us: Part 1',
    price: '59.99',
    discPrice: '47.99',
    discAmount: '20',
    endDate: 'Until Nov 2',
    folderName: 'tlou-p1',
  },
  {
    id: uuidV4(),
    name: 'Iratus: Lord of the Dead',
    price: '29.99',
    discPrice: '3.89',
    discAmount: '87',
    endDate: 'Until Nov 6',
    folderName: 'iratus',
  },
  {
    id: uuidV4(),
    name: 'Beyond: Two Souls',
    price: '19.99',
    discPrice: '7.99',
    discAmount: '60',
    endDate: 'Only Today!',
    folderName: 'beyond-2-souls',
  },
];

export const storeCategories = [
  {
    id: uuidV4(),
    name: 'Action',
  },
  {
    id: uuidV4(),
    name: 'RPG',
  },
  {
    id: uuidV4(),
    name: 'Free-to-Play',
  },
  {
    id: uuidV4(),
    name: 'Anime',
  },
  {
    id: uuidV4(),
    name: 'Co-Op',
  },
];

export const freeToPlay = [
  {
    id: uuidV4(),
    name: 'Destiny 2',
    folderName: 'destiny-2',
  },
  {
    id: uuidV4(),
    name: 'Halo Infinite',
    folderName: 'halo-infinite',
  },
  {
    id: uuidV4(),
    name: 'Team Fortress 2',
    folderName: 'tf2',
  },
];

export const recentlyUpdated = [
  {
    id: uuidV4(),
    name: 'Cyberpunk 2077',
    description:
      'The free Update 2.0 brings brand new ways to play Cyberpunk 2077...',
    folderName: 'cp2077',
  },
  {
    id: uuidV4(),
    name: 'Starfield',
    description:
      'A new updated has been released for Starfield on all platforms...',
    folderName: 'starfield',
  },
  {
    id: uuidV4(),
    name: 'The Elder Scrolls® Online',
    description:
      "Conquer Tamriel's Fears and Earn Special Rewards during the Witches Festival Event...",
    folderName: 'teso',
  },
  {
    id: uuidV4(),
    name: 'New World',
    description:
      'Nightveil Hallow returns as Baalphazu, Marquis of Terror rises once again on October 18...',
    folderName: 'new-world',
  },
];

export const newAndTrending = [
  {
    id: uuidV4(),
    name: 'Cities Skylines II',
    price: '49.99',
    folderName: 'cities-sky-2',
  },
  {
    id: uuidV4(),
    name: 'Wildmender',
    price: '24.99',
    folderName: 'wildmender',
  },
  {
    id: uuidV4(),
    name: 'The Bloodline',
    price: '19.99',
    folderName: 'the-bloodline',
  },
];

export const topSellers = [
  {
    id: uuidV4(),
    name: "Baldur's Gate 3",
    price: '59.99',
    imgName: 'baldurs-gate-3',
  },
  {
    id: uuidV4(),
    name: 'Rust',
    price: '39.99',
    imgName: 'rust',
  },
  {
    id: uuidV4(),
    name: 'Call of Duty®',
    price: '69.99',
    imgName: 'cod-mw3',
  },
  {
    id: uuidV4(),
    name: 'Fallout 76',
    price: '39.99',
    discPrice: '7.99',
    discAmount: '80',
    imgName: 'fallout-76',
  },
  {
    id: uuidV4(),
    name: 'Metal Gear & Metal Gear 2: Solid Snake',
    price: '19.99',
    imgName: 'metal-gear-1-2',
  },
  {
    id: uuidV4(),
    name: 'Red Dead Redemption 2',
    price: '59.99',
    discPrice: '23.99',
    discAmount: '60',
    imgName: 'rdr2',
  },
];

export const under5 = [
  {
    id: uuidV4(),
    name: 'American Truck Simulator',
    price: '19.99',
    discPrice: '4.99',
    discAmount: '75',
    endDate: 'Until Oct 31',
    folderName: 'american-truck-sim',
  },
  {
    id: uuidV4(),
    name: 'Batman: Arkham Knight',
    price: '19.99',
    discPrice: '3.99',
    discAmount: '80',
    endDate: 'Until Nov 6',
    folderName: 'batman-arkham',
  },
  {
    id: uuidV4(),
    name: 'Mortal Kombat 11',
    price: '49.99',
    discPrice: '4.99',
    discAmount: '90',
    endDate: 'Until Oct 28',
    folderName: 'mortal-kombat-11',
  },
];

export const streamedGames = [
  {
    id: uuidV4(),
    name: 'Cities Skylines II',
    viewersAmount: '35',
    fileName: 'cities-sky-2',
  },
  {
    id: uuidV4(),
    name: 'Warhammer: Vermintide II',
    viewersAmount: '10',
    fileName: 'warhammer-2',
  },
  {
    id: uuidV4(),
    name: 'Euro Truck Simulator 2',
    viewersAmount: '20',
    fileName: 'euro-truck-sim',
  },
];

export const discoverGames = [
  {
    id: uuidV4(),
    name: 'Elden Ring',
    folderName: 'elden-ring',
    tags: ['Souls-Like', 'RPG', 'Dark Fantasy', 'Open World'],
    releaseDate: 'Aug 21, 2021',
    isDiscounted: true,
    price: '59.99',
    dsctPrice: '41.99',
    dsctAmount: '30',
    dsctEndDate: 'Until July 13',
    reviews: {
      positive: '90%',
      negative: '10%',
      amount: '25,753',
    },
  },
  {
    id: uuidV4(),
    name: "No Man's Sky",
    folderName: 'no-mans-sky',
    tags: ['Open-World', 'Open World Survival Craft', 'Space'],
    releaseDate: 'Aug 12, 2016',
    isDiscounted: true,
    price: '59.99',
    dsctPrice: '41.99',
    dsctAmount: '30',
    dsctEndDate: 'Until Oct 31',
    reviews: {
      positive: '70%',
      negative: '30%',
      amount: '212,573',
    },
  },
  {
    id: uuidV4(),
    name: 'Bloons TD 6',
    folderName: 'bloons-td-6',
    tags: ['Tower Defense', 'Strategy', 'Multiplayer', 'Single-Player'],
    releaseDate: 'Aug 21, 2021',
    isDiscounted: false,
    price: '13.99',
    dsctPrice: '',
    dsctAmount: '',
    dsctEndDate: '',
    reviews: {
      positive: '90%',
      negative: '10%',
      amount: '245,512',
    },
  },
  {
    id: uuidV4(),
    name: 'Project Zomboid',
    folderName: 'project-zomboid',
    tags: ['Survival', 'Zombies', 'Multiplayer', 'Open World'],
    releaseDate: 'Nov 8, 2013',
    isDiscounted: false,
    price: '19.99',
    dsctPrice: '',
    dsctAmount: '',
    dsctEndDate: '',
    reviews: {
      positive: '85%',
      negative: '15%',
      amount: '180,000',
    },
  },
  {
    id: uuidV4(),
    name: 'Devil May Cry 5',
    folderName: 'devil-may-cry-5',
    tags: ['Action', 'Hand and Slash', 'Great Soundtrack', 'Violent'],
    releaseDate: 'Mar 8, 2019',
    isDiscounted: false,
    price: '29.99',
    dsctPrice: '',
    dsctAmount: '',
    dsctEndDate: '',
    reviews: {
      positive: '85%',
      negative: '15%',
      amount: '72,000',
    },
  },
  {
    id: uuidV4(),
    name: 'Among Us',
    folderName: 'among-us',
    tags: ['Multiplayer', 'Online Co-Op', 'Social Deduction', '2D'],
    releaseDate: 'Nov 16, 2018',
    isDiscounted: false,
    price: '4.99',
    dsctPrice: '',
    dsctAmount: '',
    dsctEndDate: '',
    reviews: {
      positive: '80%',
      negative: '20%',
      amount: '245,512',
    },
  },
  {
    id: uuidV4(),
    name: 'Beat Saber',
    folderName: 'beat-saber',
    tags: ['Rhythm', 'VR', 'Music', 'Fast-Paced'],
    releaseDate: 'May 22, 2019',
    isDiscounted: false,
    price: '29.99',
    dsctPrice: '',
    dsctAmount: '',
    dsctEndDate: '',
    reviews: {
      positive: '90%',
      negative: '10%',
      amount: '64,500',
    },
  },
];

export const browseGames = [
  {
    id: uuidV4(),
    name: 'Fallout 4',
    folderName: 'fallout-4',
    tags: ['Open-World', 'Post-Apocalyptic', 'Single-Player', 'Exploration'],
    releaseDate: 'Nov 10, 2015',
    isDiscounted: true,
    price: '19.99',
    dsctPrice: '4.99',
    dsctAmount: '75',
    dsctEndDate: 'Until Oct 31',
    reviews: {
      positive: '80%',
      negative: '20%',
      amount: '207,000',
    },
  },
  {
    id: uuidV4(),
    name: "Tom Clancy's The Division® 2",
    folderName: 'the-division-2',
    tags: ['Multiplayer', 'Action', 'Third-Person Shooter', 'Looter Shooter'],
    releaseDate: 'Jan 12, 2023',
    isDiscounted: false,
    price: '29.99',
    dsctPrice: '0',
    dsctAmount: '0',
    dsctEndDate: '',
    reviews: {
      positive: '60%',
      negative: '40%',
      amount: '9,500',
    },
  },
  {
    id: uuidV4(),
    name: 'Remnant II',
    folderName: 'remnant-2',
    tags: ['Souls Like', 'RPG', 'Action', 'Adventure'],
    releaseDate: 'Jul 25, 2023',
    isDiscounted: false,
    price: '49.99',
    dsctPrice: '0',
    dsctAmount: '0',
    dsctEndDate: '',
    reviews: {
      positive: '80%',
      negative: '20%',
      amount: '23,000',
    },
  },
  {
    id: uuidV4(),
    name: 'Fallout VR',
    folderName: 'fallout-vr',
    tags: ['VR', 'Open-World', 'Post-Apocalyptic', 'RPG'],
    releaseDate: 'Jan 12, 2023',
    isDiscounted: true,
    price: '59.99',
    dsctPrice: '14.99',
    dsctAmount: '75',
    dsctEndDate: 'Until Oct 31',
    reviews: {
      positive: '60%',
      negative: '40%',
      amount: '4,600',
    },
  },
  {
    id: uuidV4(),
    name: 'Skibidi Toilet Hero',
    folderName: 'skibidi-toilet-hero',
    tags: ['Action', 'Indie', 'Casual FPS', 'Faced-Paced'],
    releaseDate: 'Q4 2023',
    isDiscounted: false,
    price: '14.99',
    dsctPrice: '0',
    dsctAmount: '0',
    dsctEndDate: '',
    reviews: {
      positive: '50%',
      negative: '50%',
      amount: '9,500',
    },
  },
  {
    id: uuidV4(),
    name: 'Borderlands 2',
    folderName: 'borderlands-2',
    tags: ['Loot', 'Shooter', 'Action', 'Co-Op'],
    releaseDate: 'Sep 18, 2012',
    isDiscounted: false,
    price: '19.99',
    dsctPrice: '0',
    dsctAmount: '0',
    dsctEndDate: '',
    reviews: {
      positive: '90%',
      negative: '10%',
      amount: '187,000',
    },
  },
  {
    id: uuidV4(),
    name: 'The Outer Worlds',
    folderName: 'the-outer-worlds',
    tags: ['Action', 'RPG', 'Exploration', 'Open-World'],
    releaseDate: 'Oct 23m 2020',
    isDiscounted: false,
    price: '29.99',
    dsctPrice: '0',
    dsctAmount: '0',
    dsctEndDate: '',
    reviews: {
      positive: '80%',
      negative: '20%',
      amount: '20,000',
    },
  },
];
