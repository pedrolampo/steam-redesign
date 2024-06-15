import React, { useEffect, useState } from 'react';
import './StoreDiscover.css';

import DiscoverCard from '../DiscoverCard/DiscoverCard';
// import { discoverGames } from '../../utils/gameList';

export default function StoreDiscover() {
  const gamesIds = [
    1245620, 275850, 960090, 250320, 601150, 945360, 620980, 108600,
  ];
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesIds.forEach((id) => {
      fetch(`https://steam-api-iota.vercel.app/games/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setGames((prev) => [...prev, data]);
        })
        .catch((err) => console.log(err));
    });
  }, []); //eslint-disable-line

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
            <DiscoverCard key={game.steam_appid} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
