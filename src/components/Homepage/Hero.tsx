import React from 'react';

import GameAccountLists from '../../models/gameAccountsLists';
import GameCurrencyLists from '../../models/gameCurrencyLists';

const Hero: React.FC = () => {
  // Generate random indices for game currency and game accounts
  const randomGameCurrencyIndices = generateRandomIndices(GameCurrencyLists.length, 5);
  const randomGameAccountsIndices = generateRandomIndices(GameAccountLists.length, 5);

  // Function to generate an array of random indices
  function generateRandomIndices(maxIndex: number, count: number): number[] {
    const indices: number[] = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }

  return (
    <div className="flex flex-col items-center justify-center hero-container h-[500px] bg-[url(https://i.ibb.co/2SnrdjV/d4-promo-desktop.webp)] bg-center bg-no-repeat bg-cover">
      {/* POPULAR GRID COMPONENT */}
      <div className="mx-auto flex flex-col justify-center">
        <div className="text-white mb-12">
          <h1 className="mb-2">Diablo 4 is Now Available</h1>
          <button className="bg-orange-500 rounded px-3 py-2">Buy Diablo 4 Gold</button>
        </div>

        <div className="grid-container flex gap-x-[100px] gap-y-[24px] w-[1200px]">
          {/* Grid for Game Currency */}
          <div className="grid bg-white rounded-md px-3 py-3">
            <h2 className="grid-heading">Popular Game Currency</h2>
            <div className="card-grid">
              {randomGameCurrencyIndices.map((index) => {
                const gameCurrency = GameCurrencyLists[index];
                return (
                  <div className="card flex items-center mb-1" key={index}>
                    <img className="card-icon mr-1" src={gameCurrency.icon} alt={gameCurrency.title} />
                    <span className="card-title">{gameCurrency.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grid for Game Accounts */}
          <div className="grid bg-white rounded-md px-3 py-3">
            <h2 className="grid-heading">Popular Game Accounts</h2>
            <div className="card-grid">
              {randomGameAccountsIndices.map((index) => {
                const gameAccount = GameAccountLists[index];
                return (
                  <div className="card flex items-center mb-1" key={index}>
                    <img className="card-icon mr-1" src={gameAccount.icon} alt={gameAccount.title} />
                    <span className="card-title">{gameAccount.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
