import React, { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { RadialButton } from '../radialButton/RadialButton';

import "./horizontalSlider.scss";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ITimeLinePeriodEvent } from '../../interfaces';

interface IHorizontalSlider {
  events: ITimeLinePeriodEvent[];
}

const sliderButtonStyle = {
  width: '40px', 
  height: '40px',
  boxShadow: '0 0 15px rgba(56, 119, 238, 0.1)'
}

function isMobile() {
  return window.innerWidth < 1080;
}

export const HorizontalSlider: FC<IHorizontalSlider> = ({ events }) => {
  const [swProgress, setSwProgress] = useState({isBeginning: true, isEnd: false});
  const swiperRef = useRef<SwiperType>(null);
  const [swiperReady, setIsSwiperReady] = useState(false);

  return (
    <>
      <div className='slider-button-container'>
        {swiperReady && swiperRef.current && !swProgress.isBeginning && (
          <RadialButton type={'left'} onClickFn={() => swiperRef.current!.slidePrev()} styles={sliderButtonStyle} />
        )}
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsSwiperReady(true);
        }}
        slidesPerView={isMobile() ? 1.5 : 3}
        spaceBetween={80}
        navigation={true}
        pagination={isMobile()}
        modules={[Pagination]}
        className="swiper-container"
        onSlideChange={(sw) => {
          setSwProgress({isBeginning: sw.isBeginning, isEnd: sw.isEnd})
        }}
      >
        <div style={{backgroundColor: 'green', width: '50%'}}>
          {events.map((event) => {
            return (
              <SwiperSlide>
                <h3 className='swiper-card-title'>{event.milestone}</h3>
                <p className='swiper-card-description'>{event.description}</p>
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>

      <div className='slider-button-container'>
        {swiperReady && swiperRef.current && !swProgress.isEnd && events.length > 3 && (
          <RadialButton type={'right'} onClickFn={() => swiperRef.current!.slideNext()} styles={sliderButtonStyle} />
        )}
      </div>
    </>
  );
}
