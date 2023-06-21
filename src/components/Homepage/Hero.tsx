import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import GameAccountLists from '../../models/gameAccountsLists';
import GameCurrencyLists from '../../models/gameCurrencyLists';
import GameItemLists from '../../models/gameItemLists';

const Hero: React.FC = () => {
  const [randomGameCurrencyIndices, setRandomGameCurrencyIndices] = useState<number[]>([]);
  const [randomGameAccountsIndices, setRandomGameAccountsIndices] = useState<number[]>([]);
  const [randomGameItemsIndices, setRandomGameItemsIndices] = useState<number[]>([]);

  useEffect(() => {
    // Generate random indices for game currency and game accounts
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
    setRandomGameCurrencyIndices(generateRandomIndices(GameCurrencyLists.length, 10));
    setRandomGameAccountsIndices(generateRandomIndices(GameAccountLists.length, 5));
    setRandomGameItemsIndices(generateRandomIndices(GameItemLists.length, 8));
  }, []);

  // Dynamically import the icons to prevent SSR issues
  const BsPeopleFill = dynamic(() => import('react-icons/bs').then((mod) => mod.BsPeopleFill));
  const FaCoins = dynamic(() => import('react-icons/fa').then((mod) => mod.FaCoins));
  const GiShardSword = dynamic(() => import('react-icons/gi').then((mod) => mod.GiShardSword));

  return (
    <div className="relative bg-cover flex flex-col items-center justify-center py-3 lg:py-0 bg-[url(https://images2.alphacoders.com/131/1315144.jpg)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      <div className="container mx-auto px-3 lg:py-32 lg:pb-12 lg:px-12 max-w-[100%] lg:max-w-7xl">
        {/* POPULAR GRID COMPONENT */}
        <div className="relative z-10">
          <div className="text-white pb-6 lg:pb-auto py-16 lg:py-3 flex justify-center md:justify-between items-center">
            <div className="pb-4 md:pb-0">
              <h1 className="font-semibold text-4xl md:text-5xl">Diablo 4 Now Available</h1>
              <p className="mt-3 md:mt-0 mb-4 text-lg text-gray-200 block text-center">
                We now offer Diablo IV gold, accounts, and items in our store!
              </p>
              <button className="bg-orange-400 text-black font-semibold rounded px-4 w-full py-3 uppercase transition-all hover:bg-orange-300">
                Buy Diablo 4 Gold
              </button>              
            </div>
            <div className="hidden md:block animate-pulse">
              <img className="w-64 h-auto p-3 lg:p-0" src="https://www.warlegend.net/wp-content/uploads/DiabloIII_Monk.png" alt="" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-3 gap-y-3 lg:gap-y-0">
            {/* Grid for Game Currency */}
            <div className="grid bg-white rounded-md px-2 md:px-6 py-6 col-span-1 lg:col-span-2">
              <h2 className="pb-3 text-lg font-semibold text-gray-600 flex items-center mx-auto md:mx-0">
                <FaCoins className="mr-2 h-4 w-4" />
                Popular Currencies
              </h2>
              <div className="card-grid grid grid-cols-1 md:grid-cols-2 gap-0">
                {randomGameCurrencyIndices.map((index) => {
                  const gameCurrency = GameCurrencyLists[index];
                  return (
                    <div
                      className="group card inline-flex py-3 px-3 rounded-lg transition-all hover:cursor-pointer items-center hover:bg-gray-50"
                      key={index}
                    >
                      <img
                        className="group-hover:scale-105 transition-all card-icon mr-6 w-12 h-12 rounded-lg"
                        src={gameCurrency.icon}
                        alt={gameCurrency.title}
                      />
                      <span className="card-title text-lg">{gameCurrency.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grid for Game Accounts */}
            <div className="grid bg-white rounded-md px-2 md:px-6 py-6">
              <h2 className="pb-3 text-lg font-semibold text-gray-600 flex items-center mx-auto md:mx-0">
                <BsPeopleFill className="mr-2 h-4 w-4" />
                Popular Accounts
              </h2>
              <div className="card-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-0">
                {randomGameAccountsIndices.map((index) => {
                  const gameAccount = GameAccountLists[index];
                  return (
                    <div
                      className="group card inline-flex py-3 px-3 rounded-lg transition-all hover:cursor-pointer items-center hover:bg-gray-50"
                      key={index}
                    >
                      <img
                        className="group-hover:scale-105 transition-all card-icon mr-6 w-12 h-12 rounded-lg"
                        src={gameAccount.icon}
                        alt={gameAccount.title}
                      />
                      <span className="card-title text-lg">{gameAccount.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid pt-3">
            {/* Grid for Game Items */}
            <div className="grid bg-white rounded-md px-2 md:px-6 py-6">
              <h2 className="pb-3 text-lg font-semibold text-gray-600 flex items-center mx-auto md:mx-0">
                <GiShardSword className="mr-2 h-4 w-4" />
                Popular Game Items
              </h2>
              <div className="card-grid grid md:grid-cols-4 gap-0">
                {randomGameItemsIndices.map((index) => {
                  const gameItem = GameItemLists[index];
                  return (
                    <div
                      className="group card inline-flex py-3 px-3 rounded-lg transition-all hover:cursor-pointer items-center hover:bg-gray-50"
                      key={index}
                    >
                      <img
                        className="group-hover:scale-105 transition-all card-icon mr-6 w-12 h-12 rounded-lg"
                        src={gameItem.icon}
                        alt={gameItem.title}
                      />
                      <span className="card-title text-lg">{gameItem.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
