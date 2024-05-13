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
