import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <p>Image</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              esse provident similique quas ducimus enim suscipit consectetur
              quos velit vitae, voluptate distinctio, temporibus deserunt
              accusamus officia labore ullam at voluptatum.
            </p>
            <p>details</p>
            <p>Rating</p>
            <button>Hello</button>
            <button>Submit</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Image</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              esse provident similique quas ducimus enim suscipit consectetur
              quos velit vitae, voluptate distinctio, temporibus deserunt
              accusamus officia labore ullam at voluptatum.
            </p>
            <p>details</p>
            <p>Rating</p>
            <button>Hello</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
