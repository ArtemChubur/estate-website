import React from 'react';
import "./about-us.css"
import { advantages_left, advantages_right } from '../../constants/advantages';
import { motion } from "framer-motion";
import { container } from "../../constants/animate";

const AboutUs = () => {
    return (
        <section className='aboutPage'>
            <div className='aboutTitle'>
                <h2
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >Наши приемущества
                </h2>
                <motion.p
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >Real estate is a crowded field. But with the number of buyers purchasing homes through real estate agents and brokers growing there’s plenty of </motion.p>
            </div>
            <div className="main_cards">
                <div>
                    {advantages_left.map((item, idx) => {
                        return (
                            <motion.div
                                className='adventagers_card_left'
                                key={idx}
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <img src={item.src} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        )
                    })}
                </div>
                <motion.div
                    className='photka'
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                ></motion.div>
                <div>
                    {advantages_right.map((item, idx) => {
                        return (
                            <motion.div
                                className='adventagers_card_right'
                                key={idx}
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <img src={item.src} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;