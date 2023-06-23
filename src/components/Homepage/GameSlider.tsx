import React from 'react';
import SwiperCore, { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import gameAccountsList from '../../models/gameAccountsLists';

SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay, Navigation]);

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
        autoplay={{ delay: 5000 }} // Set autoplay delay to 5000ms (5 seconds)
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
            <div className="absolute top-48 inset-0 bg-gradient-to-b from-transparent to-white"></div>
            <div className="relative swiper-content flex flex-col h-full items-start justify-end py-12 px-3 md:py-6 md:px-48 z-[10]">
              <div className="flex flex-row items-center">
                <img src={gameAccount.icon} className="hidden md:block w-8 h-8 mr-2" alt="" />
                <h1 className="text-black text-4xl font-bold">{gameAccount.title}</h1>
              </div>
              <div className="py-3">
                <h1 className="mb-9 text-gray-800 text-4xl">View our {gameAccount.title} threads from our reputable sellers.</h1>
                <button className="transition-all iuppercase px-4 rounded text-white font-semibold hover:bg-orange-300 py-3 bg-orange-400">
                  Browse {gameAccount.title}
                </button>
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