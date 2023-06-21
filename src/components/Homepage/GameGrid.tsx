import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import GameCurrencyLists from '../../models/gameCurrencyLists';

const GameGrid: React.FC = () => {
  const [randomGameCurrencyIndices, setRandomGameCurrencyIndices] = useState<number[]>([]);

  useEffect(() => {
    // Generate random indices for game currency
    const generateRandomIndices = (maxIndex: number, count: number): number[] => {
      const indices: number[] = [];
      while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * maxIndex);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      return indices;
    };

    // Set the random indices on the client-side
    setRandomGameCurrencyIndices(generateRandomIndices(GameCurrencyLists.length, 15));
  }, []);

  // Dynamically import the icons to prevent SSR issues
  const FaCoins = dynamic(() => import('react-icons/fa').then((mod) => mod.FaCoins));

  return (
    <>
    <div className="mx-auto flex justify-center mb-12 text-2xl md:text-4xl font-semibold items-center">
      <h1>Trending Game Currencies</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 mx-auto lg:max-w-[85%] px-3 2xl:px-12">
      {/* Grid for Game Currency */}
      {randomGameCurrencyIndices.map((index) => {
        const gameCurrency = GameCurrencyLists[index];
        return (
          <div
            className="group card inline-flex flex-col overflow-hidden rounded-md transition-all hover:shadow-md hover:cursor-pointer bg-gray-50"
            key={index}
          >
            <img
              className="group-hover:scale-105 transition-all object-cover w-full h-48"
              src={gameCurrency.cover}
              alt={gameCurrency.title}
            />
            <div className="flex flex-col justify-center items-center py-3">
              <span className="card-title text-lg group-hover:text-orange-400">{gameCurrency.title}</span>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default GameGrid;