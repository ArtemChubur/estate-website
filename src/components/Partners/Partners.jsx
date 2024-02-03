import React from 'react';
import './Partners.css'
import {partners} from "../../constants/partners";
import { motion } from "framer-motion";
import img from "../../assets/Rectangle 1.png";
import {container} from "../../constants/animate";

function Partners() {
    return (
        <section>
            <div className={'PartnersSection'}>
                <h2>Наши партнеры</h2>
                <div className={'PartnersLogo'}>
                    {partners.map((item, idx) => {
                        return(
                            <motion.div
                                key={idx}
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                            >
                                <img src={item.logo} alt=""/>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Partners;