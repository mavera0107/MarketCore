import React from 'react';

const WeAreSafe: React.FC = () => {
  return (
    <div className="bg-[url(https://assets.website-files.com/6368fd9690c8a033f6d30754/63d15b1f69a4472b66e5da21_home-bg4.svg)] bg-cover py-12 lg:py-32">
      <div className="max-w-fit mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img className="w-full rounded-2xl p-2 max-w-md mx-auto" src="https://cdn.dribbble.com/userupload/4969630/file/original-7c5da3a7176f5b4dbaa2c073855a9f68.png?compress=1&resize=400x300&vertical=center" alt="Image" />
        </div>
        <div className="lg:w-1/2 lg:p-6 rounded-2xl">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-12">Safe and Easy Trading</h2>
            <p className="text-gray-700 mb-4">
              <b className="text-lg text-gray-600">Trade without fear</b> - MarketCore guarantees that all trades are legit and keeps you safe from scammers.
            </p>
            <p className="text-gray-700 mb-4">
            <b className="text-lg text-gray-600">It's quick and easy</b> - find the best product for your favorite game, make a payment, receive your order, and get back to playing.
            </p>
            <p className="text-gray-700">
              Join us today to level up your gaming experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreSafe;
