import React from 'react';
import "./about-us.css"
import { advantages_left, advantages_right } from '../../constants/advantages';

const AboutUs = () => {
    return (
        <section>
            <h2>Property Featured</h2>
            <p>Real estate is a crowded field. But with the number of buyers purchasing homes through real estate agents and brokers growing there’s plenty of </p>
            <div className="main_cards">
                <div>
                    {advantages_left.map((item, idx) => {
                        return (
                            <div className='adventagers_card_left'>
                                <img src={item.src} alt=""/>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='photka'></div>
                <div>
                    {advantages_right.map((item, idx) => {
                        return (
                            <div className='adventagers_card_right'>
                                <img src={item.src} alt=""/>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;