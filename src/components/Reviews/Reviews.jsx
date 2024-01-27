import React from 'react'
import './Reviews.css'
import { reviews } from '../../constants/reviews'
import quotes from '../../assets/left-quote.png'

const Reviews = () => {
    return (
        <div className='ReviewsComponent'>
            <div className='ReviewsHeaderComponent'>
                <h2>Our valuable customer says</h2>
                <a href="/">Reviews</a>
            </div>
            <div className='reviews'>
                {reviews.map((item, idx) => {
                    return (
                        <div className='review' key={idx}>
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
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Reviews