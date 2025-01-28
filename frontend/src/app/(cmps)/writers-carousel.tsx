"use client"
import { WriterCard } from "../(cmps)/writer-card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export const WriterCarousel = () => {
    return <div className="writer-list">
        <Swiper
            slidesPerView={2}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                600: {
                    slidesPerView: 3,
                },
            }}>
            {/* {writers.map(writer => (
                <SwiperSlide key={writer._id}>
                    <WriterCard />
                </SwiperSlide>
            )} */}
            <SwiperSlide>
                <WriterCard />
            </SwiperSlide>
            <SwiperSlide>
                <WriterCard />
            </SwiperSlide>
            <SwiperSlide>
                <WriterCard />
            </SwiperSlide>
            <SwiperSlide>
                <WriterCard />
            </SwiperSlide>
        </Swiper>
    </div>
}