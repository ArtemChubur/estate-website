import React from 'react'
import './Reviews.css'
import { reviews } from '../../constants/reviews'
import quotes from '../../assets/left-quote.png'
import { motion } from "framer-motion";
import {container} from "../../constants/animate";

const Reviews = () => {
    return (
        <div className='ReviewsComponent'>
            <div className='ReviewsHeaderComponent'>
                <h2>Наши клиенты говорят</h2>
                <a href="/">Reviews</a>
            </div>
            <div className='reviews'>
                {reviews.map((item, idx) => {
                    return (
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
                    )
                })}
            </div>
        </div>
    )
}

export default Reviews