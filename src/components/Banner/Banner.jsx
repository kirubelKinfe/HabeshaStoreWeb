/* eslint-disable jsx-a11y/anchor-is-valid */

import { images } from '../../constants'
import './Banner.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        placeContent: "center"
      }} 
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          margin: "120px",
          height: "80vh",
          overflow: "hidden"
        }}
        className="slider"
      >
        
          <SwiperSlide>
            <img src={images.SliderImage1} alt="banner" />
            <div className="text-content">
              <h4>Shoes Fashion</h4>
              <h2>Come and Get It!</h2>
              <h2 className='desc'>Brand New Shoes</h2>
              <a href="#" className='primary-button'>Shop Now</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.SliderImage2} alt="banner" />
            <div className="text-content">
              <h4>Quick Fashion</h4>
              <h2>Fit Your Wardrobe!</h2>
              <h2 className='desc'>With Luxury Items</h2>
              <a href="#" className='primary-button'>Shop Now</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.SliderImage3} alt="banner" />
            <div className="text-content">
              <h4>Quick Offer</h4>
              <h2>Wooden Minimal Sofa!</h2>
              <h2 className='desc'>Extra 50% Off</h2>
              <a href="#" className='primary-button'>Shop Now</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.SliderImage4} alt="banner" />
            <div className="text-content">
              <h4>Best Deals</h4>
              <h2>Home Workout Accessories!</h2>
              <h2 className='desc'>Push The Limits</h2>
              <a href="#" className='primary-button'>Shop Now</a>
            </div>
          </SwiperSlide>
      </Swiper>  
    </div>
  )
}

export default Banner