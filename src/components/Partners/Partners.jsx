import React from 'react';
import './Partners.css'
import {partners} from "../../constants/partners";
import { motion } from "framer-motion";
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
                                <a target='_blank' href={item.link}>
                                    <img src={item.logo} alt=""/>
                                    </a>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Partners;