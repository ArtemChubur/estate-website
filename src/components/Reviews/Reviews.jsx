import React from 'react'
import './Reviews.css'
import { reviews } from '../../constants/reviews'
import quotes from '../../assets/left-quote.png'
import { motion } from "framer-motion";
import {container} from "../../constants/animate";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


const Reviews = (callbackfn, thisArg) => {
    return (
        <div className='ReviewsComponent'>
            <div className='ReviewsHeaderComponent'>
                <h2>Наши клиенты говорят</h2>
                <p href="/">Reviews</p>
            </div>
            <div className='reviews'>
                <>
                    <Swiper
                        slidesPerView={2}
                        grabCursor={true}
                        keyboard={{enabled: true,}}
                        navigation={true}
                        pagination={{clickable: true,}}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((item, idx) => {
                            return(
                                <SwiperSlide>
                                            <motion.div
                                                className='review'
                                                key={idx}
                                                variants={container}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{once: true}}
                                            >
                                                <div className='reviewHeader'>
                                                    <div className='reviewName'>
                                                        <img src={item.avatar} alt="" />
                                                        <div>
                                                            <h4>{item.name}</h4>
                                                            <p>{item.title}</p>
                                                        </div>
                                                    </div>
                                                    <div className='reviewImgQuotes'>
                                                        <img src={quotes} />
                                                    </div>
                                                </div>
                                                <p className={'reviewTxt'}>{item.text}</p>
                                            </motion.div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default Reviews