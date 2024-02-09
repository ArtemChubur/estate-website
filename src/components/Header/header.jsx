import React, {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../assets/logo.png"
import './header.css'
import {useLocation, useParams} from "react-router-dom";
import { motion } from "framer-motion";
import {container} from "../../constants/animate";
import Main from "../../Pages/Main";

export const Header = ({page}) => {
    const [activePage, setActivePage] = useState(false);
    const route = useLocation()
    console.log(route)

    useEffect(() => {
        if (route.pathname === '/about') {
            setActivePage(true)
        } else {
            setActivePage(false)
        }}, [])

    const [activeModalWindow, setActiveModalWindow] = useState(false);
    const [ticketError, setTicketError] = useState(false);

    return (
        <header>
            {activeModalWindow &&
                <div className={`header-modal-window`}>
                    <motion.div
                        className={'headerParentsForm'}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <button
                            onClick={() => {
                                setActiveModalWindow(false)
                                setTicketError(false)
                            }}
                            className={'header-close-btn'}><CloseIcon /></button>
                        {ticketError ?
                            <motion.div
                                className='text_in_the_alert'
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <p className={'modalWindowError'}>Ваша заявка не была отправлена, так как нам не
                                    предоставили backend для этого.</p>
                                <div className={'bibiziankyParents'}>
                                    <img
                                        className='bibizianky'
                                        src="https://3.bp.blogspot.com/-PWZdxomZ6uc/Wdj4shYEQ0I/AAAAAAALGz0/Mo-gm00xJvIbG8brcI7UF40C0-xHVcqYQCLcBGAs/s1600/AW567119_06.gif"
                                    />
                                </div>
                            </motion.div>
                            :
                            <div >
                                <form className='formochki'>
                                    <input placeholder={'Ваше имя'} type="text"/>
                                    <input pattern='0[0-9]{3}[0-9]{3}[0-9]{3}' type="tel" placeholder={'Номер телефона'}/>
                                <button onClick={() => {setTicketError(true)}} type="button">Отправить</button>
                            </form>
                        </div>
                        }
                    </motion.div>
                </div>
            }
            <header className="header">
                <div className={'header-left'}>
                    <a href="../"><img src={logo} alt=""/></a>
                </div>
                <div className="header-right">
                    <a
                        href="../"
                       className={`header-link ${activePage || 'header-link-activ'}`}>
                    Главная</a>
                    <a
                        href={'/about'}
                        className={`header-link ${activePage && 'header-link-activ'}`}>
                    О нас</a>

                    <button onClick={() => {setActiveModalWindow(true)}} className="header-button">+Добавить обьявление</button>
                </div>
            </header>
        </header>
    )
}