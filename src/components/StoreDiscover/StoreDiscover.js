import React from 'react';
import './StoreDiscover.css';

import DiscoverCard from '../DiscoverCard/DiscoverCard';
import { games } from '../../utils/gameList';

export default function StoreDiscover() {
  return (
    <div className="store-discover">
      <div className="main-content">
        <div className="store-section">
          <h3>Pedrolampo's Discovery Feed</h3>
          <p>
            Recommendations just for you, based on the games you or your friends
            want and play.
          </p>
        </div>

        <div className="store-section discovery">
          {games.map((game) => (
            <DiscoverCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
