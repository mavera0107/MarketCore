import React from 'react';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import gameAccountsList from '../../models/gameAccountsLists';

SwiperCore.use([Pagination, Scrollbar, A11y]);

const GameSlider: React.FC = () => {
  return (
    <>
    <div className="md:mt-12 py-6 pb-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        simulateTouch={true}
        grabCursor={true}
        className="swiper-container"
      >
        {gameAccountsList.map((gameAccount, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide"
            style={{
              borderRadius: '32px',
              borderTopLeftRadius: `0px`,
              borderTopRightRadius: `0px`,
              height: '650px',
              backgroundImage: `url(${gameAccount.cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            <div className="relative swiper-content flex flex-col h-full items-start justify-end py-12 px-2 md:py-20 md:px-20 z-[10]">
              <div className="flex flex-row items-center">
                <img src={gameAccount.icon} className="hidden md:block w-8 h-8 mr-2" alt="" />
                <h1 className="text-black text-4xl font-bold">{gameAccount.title}</h1>
              </div>
              <div className="">
                
                <h1 className="text-gray-800 text-4xl">Discover {gameAccount.title} coins, accounts, and more.</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>

    </>
  );
};

export default GameSlider;