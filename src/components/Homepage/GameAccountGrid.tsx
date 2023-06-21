import React from 'react';

import gameAccountLists from '../../models/gameAccountsLists';

const GameAccountGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6">
      {/* Grid for Game Accounts */}
      {gameAccountLists.map((gameAccount, index) => (
        <div
          className={`group card flex flex-col overflow-hidden transition-all hover:cursor-pointer hover:bg-gray-900`}
          key={index}
        >
          <div className="relative w-full h-64 pb-2/3 bg-cover bg-center">
            <div
              className="absolute inset-0 bg-opacity-50 bg-black transition-opacity group-hover:opacity-75"
              aria-hidden="true"
            ></div>
            <div
              className="bg-cover absolute inset-0 transition-transform transform group-hover:scale-105"
              style={{ backgroundImage: `url(${gameAccount.cover})` }}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-center py-3">
            <span className="text-lg font-semibold group-hover:text-white">{gameAccount.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameAccountGrid;