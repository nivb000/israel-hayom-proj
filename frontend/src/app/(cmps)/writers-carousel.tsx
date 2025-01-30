"use client"
import { Writer } from "@/interfaces/writer"
import { Post } from "@/interfaces/post"
import { WriterCard } from "../(cmps)/writer-card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


export const WriterCarousel = ({ writersData }: { writersData: { writers: Writer[], posts: Post[] } }) => {

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
            {writersData.writers.map((writer: Writer) => {

                const writerPosts = writersData.posts.filter((post: Post) => post.writerId === writer.id)
                return (
                    <SwiperSlide key={writer._id}>
                        <WriterCard writer={writer} posts={writerPosts} />
                    </SwiperSlide>
                )
            }
            )}
        </Swiper>
    </div>
}