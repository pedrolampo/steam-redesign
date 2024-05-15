import React from 'react';
import './StoreDiscover.css';

import DiscoverCard from '../DiscoverCard/DiscoverCard';
import { games } from '../../utils/gameList';
import { useSearchParams } from 'react-router-dom';

export default function StoreDiscover() {
  const [params, setParams] = useSearchParams();
  console.log(params.entries);

  return (
    <div className="store-discover">
      <div className="main-content">
        <div className="store-section">
          <h3
            onClick={() =>
              setParams({
                term: 'value',
                name: 'jorge',
              })
            }
          >
            Pedrolampo's Discovery Feed
          </h3>
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
