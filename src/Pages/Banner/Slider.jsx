import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HrBanner from './HrBanner';
import EmBanner from './EmBanner';
const Slider = () => {
  return (
    <div>
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><HrBanner /></SwiperSlide>
        <SwiperSlide><EmBanner /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider