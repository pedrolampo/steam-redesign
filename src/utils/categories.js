import { v4 as uuidv4 } from 'uuid';

export const categories = [
  // TOP LEVEL GENRES
  { id: 1, label: 'Action', qty: '5,000', category: 'top level' },
  { id: 25, label: 'Adventure', qty: '5,000', category: 'top level' },
  { id: 4, label: 'Casual', qty: '5,000', category: 'top level' },
  { id: 3, label: 'RPG', qty: '5,000', category: 'top level' },
  { id: 2, label: 'Strategy', qty: '5,000', category: 'top level' },
  { id: 28, label: 'Simulation', qty: '5,000', category: 'top level' },
  { id: uuidv4(), label: 'Free-to-Play', qty: '5,000', category: 'top level' },
  { id: uuidv4(), label: 'Shooter', qty: '5,000', category: 'top level' },
  { id: 23, label: 'Indie', qty: '5,000', category: 'top level' },
  { id: uuidv4(), label: 'Rogue-Like', qty: '5,000', category: 'top level' },

  // GENRES
  { id: uuidv4(), label: 'JRPG', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Sandbox', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Arcade & Rhythm', qty: '5,000', category: 'genres' },
  { id: 70, label: 'Early Acces', qty: '5,000', category: 'genres' },
  {
    id: uuidv4(),
    label: 'First-Person Shooter',
    qty: '5,000',
    category: 'genres',
  },
  { id: uuidv4(), label: 'Dating', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Racing', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Sports', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Hack & Slash', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Metroidvania', qty: '5,000', category: 'genres' },
  {
    id: uuidv4(),
    label: 'Third-Person Shooter',
    qty: '5,000',
    category: 'genres',
  },
  { id: uuidv4(), label: 'schnmup', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Party-Based', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Turn-Based', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Puzzle', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Card & Board', qty: '5,000', category: 'genres' },
  { id: uuidv4(), label: 'Grand & 4X', qty: '5,000', category: 'genres' },

  // THEMES & MOOD
  { id: uuidv4(), label: 'Anime', qty: '5,000', category: 'themes' },
  { id: uuidv4(), label: 'Horror', qty: '5,000', category: 'themes' },
  {
    id: uuidv4(),
    label: 'Mystery & Detective',
    qty: '5,000',
    category: 'themes',
  },
  { id: uuidv4(), label: 'Open World', qty: '5,000', category: 'themes' },
  {
    id: uuidv4(),
    label: 'Sci-Fi & Cyberpunk',
    qty: '5,000',
    category: 'themes',
  },
  { id: uuidv4(), label: 'Space', qty: '5,000', category: 'themes' },
  { id: uuidv4(), label: 'Survival', qty: '5,000', category: 'themes' },

  // SUB GENRES
  { id: uuidv4(), label: 'Platformer', qty: '5,000', category: 'sub-genres' },
  {
    id: uuidv4(),
    label: 'Fighting & Martial Arts',
    qty: '5,000',
  },
  {
    id: uuidv4(),
    label: 'Platformer & Runner',
    qty: '5,000',
    category: 'sub-genres',
  },
  { id: uuidv4(), label: 'Action RPG', qty: '5,000', category: 'sub-genres' },
  {
    id: uuidv4(),
    label: 'Adventure RPG',
    qty: '5,000',
    category: 'sub-genres',
  },
  { id: uuidv4(), label: 'Strategy RPG', qty: '5,000', category: 'sub-genres' },
  {
    id: uuidv4(),
    label: 'Turn-Based Strategy',
    qty: '5,000',
    category: 'sub-genres',
  },
  { id: uuidv4(), label: 'Military', qty: '5,000', category: 'sub-genres' },
  {
    id: uuidv4(),
    label: 'City & Settlement',
    qty: '5,000',
    category: 'sub-genres',
  },
  {
    id: uuidv4(),
    label: 'Hidden Objects',
    qty: '5,000',
    category: 'sub-genres',
  },
  { id: uuidv4(), label: 'Visual Novel', qty: '5,000', category: 'sub-genres' },
  {
    id: uuidv4(),
    label: 'Building & Automation',
    qty: '5,000',
    category: 'sub-genres',
  },
  {
    id: uuidv4(),
    label: 'Farming & Crafting',
    qty: '5,000',
    category: 'sub-genres',
  },
  { id: uuidv4(), label: 'Hobby & Job', qty: '5,000', category: 'sub-genres' },
  {
    id: uuidv4(),
    label: 'Life & Immersive',
    qty: '5,000',
    category: 'sub-genres',
  },
  {
    id: uuidv4(),
    label: 'Sandbox & Physics',
    qty: '5,000',
    category: 'sub-genres',
  },
  {
    id: uuidv4(),
    label: 'Space & Flight',
    qty: '5,000',
    category: 'sub-genres',
  },
  {
    id: uuidv4(),
    label: 'Fishing & Hunting',
    qty: '5,000',
    category: 'sub-genres',
  },
  {
    id: uuidv4(),
    label: 'Individual Sports',
    qty: '5,000',
    category: 'sub-genres',
  },
  { id: uuidv4(), label: 'Racing Sim', qty: '5,000', category: 'sub-genres' },
  { id: uuidv4(), label: 'Sports Sim', qty: '5,000', category: 'sub-genres' },
  { id: uuidv4(), label: 'Team Sports', qty: '5,000', category: 'sub-genres' },
  { id: uuidv4(), label: 'Story-Rich', qty: '5,000', category: 'sub-genres' },

  // PLAYERS
  { id: uuidv4(), label: 'Co-Op', qty: '5,000', category: 'players' },
  { id: uuidv4(), label: 'LAN', qty: '5,000', category: 'players' },
  { id: uuidv4(), label: 'Local & Party', qty: '5,000', category: 'players' },
  { id: uuidv4(), label: 'MMO', qty: '5,000', category: 'players' },
  { id: uuidv4(), label: 'Multiplayer', qty: '5,000', category: 'players' },
  {
    id: uuidv4(),
    label: 'Online Competitive',
    qty: '5,000',
    category: 'players',
  },
  { id: 2, label: 'Single-Player', qty: '5,000', category: 'players' },

  // PLATFROM
  { id: uuidv4(), label: 'Windows', qty: '5,000', category: 'platform' },
  { id: uuidv4(), label: 'macOS', qty: '5,000', category: 'platform' },
  {
    id: uuidv4(),
    label: 'SteamOS + Linux',
    qty: '5,000',
    category: 'platform',
  },
  { id: uuidv4(), label: 'For PC Cafés', qty: '5,000', category: 'platform' },

  // { id: 22, label: 'Steam Achievements', qty: '5,000', category: 'features' },
  // { id: 22, label: 'Full controller support', qty: '5,000', category: 'features' },

  // { id: uuidv4(), label: '', qty: '5,000', category: '' },

  // { id: uuidv4(), label: '', qty: '5,000', category: '' },

  // { id: uuidv4(), label: '', qty: '5,000', category: '' },

  // { id: uuidv4(), label: '', qty: '5,000', category: '' },
];
