import React, {useState} from 'react';
import img from "../../assets/Rectangle 1.png";
import './Title.css'
import { motion } from "framer-motion";
import {container} from "../../constants/animate";

function Title() {
    return (
        <section>
            <div className={'title'}>
                <motion.h1
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    Найдите идеальное место для отдыха с семьей
                </motion.h1>
                <motion.img
                    src={img}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                />
            </div>
        </section>
    );
}

export default Title;