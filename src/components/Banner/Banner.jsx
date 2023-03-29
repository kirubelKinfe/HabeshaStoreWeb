
import { images } from '../../constants'
import './Banner.css'

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
const Banner = () => {
  return (
    // <div>
    //   {/* <div className="banner">
    //       <div>
    //           <p>Welcome to Habesha Store</p>
    //           <h1>Shopping Time</h1>
    //           <h3>Ontime Delivery</h3>
    //           <button className="btnCatagories" type="button">Check Catagories</button>
    //       </div>
    //       <img className="bannerImage" src={images.BannerImage} alt="banner" />
    //   </div> */}
    //   <div className="slider">
    //     <div className="sliderContainer">
    //       <div className="wrapper">
    //         <div className="myslider">
    //           <div className="wrapper">
    //             <div className="slide">
    //               <div className="item">
    //                 <div className="image object-cover">
    //                   <img src={images.SliderImage1} alt="" />
    //                 </div>
    //                 <div className="text-content">
    //                   <h4>Shoes Fashion</h4>
    //                   <h2>Come and Get It!</h2>
    //                   <h2>Brand New Shoes</h2>
    //                   <a href="#" className='primary-button'>Shop Now</a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
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