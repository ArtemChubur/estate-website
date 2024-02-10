import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import {useForm} from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";
import { container } from "../../constants/animate";
import logo from "../../assets/logo.png"
import './header.css'

const Header = () => {

    const [activePage, setActivePage] = useState(false);
    const route = useLocation()
    const [activeModalWindow, setActiveModalWindow] = useState(false);
    const [ticketError, setTicketError] = useState(false);
    const [loader, setLoader] = useState(false)
    const [ticketMessages, setTicketMessages] = useState('')
    const [ticket, setTicket] = useState({
        username: '',
        phone: ''
    });
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({mode: "onChange"})

    async function sendTicket() {
        setLoader(true)
        try {
            const response = await axios.post('http://localhost:3333/send-message', ticket);
            // setTicketMessages('Ваша заявку успешно отправлена!')
            if (response.status === 200) {
                setTicketMessages('Заявка успешно отправлена!')
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            setTicketMessages('Ошибка, попробуйте позже.')
        } finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        if (route.pathname === '/about') {
            setActivePage(true)
        } else {
            setActivePage(false)
        }
    }, [])

    return (
        <>
            {activeModalWindow &&
                <div className="header-modal-window">
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
                            className={'header-close-btn'}>
                            <CloseIcon />
                        </button>
                        {ticketError ?
                            <motion.div
                                className='text_in_the_alert'
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                            >
                                <p className={'modalWindowError'}>
                                    {ticketMessages}
                                </p>
                                <div className={'bibiziankyParents'}>
                                    <img
                                        className='bibizianky'
                                        src="https://3.bp.blogspot.com/-PWZdxomZ6uc/Wdj4shYEQ0I/AAAAAAALGz0/Mo-gm00xJvIbG8brcI7UF40C0-xHVcqYQCLcBGAs/s1600/AW567119_06.gif"
                                    />
                                </div>
                            </motion.div>
                            :
                            <div className='form_back-back'>
                                {loader ?
                                    <div>
                                        <CircularProgress />
                                    </div>
                                    :
                                    <form className='formochki'>
                                        <input
                                            {...register('username', {
                                                required: 'Имя не может быть пустым',
                                                minLength: {
                                                    value: 1,
                                                    message: 'Минимум 1 символ'
                                                },
                                                maxLength: {
                                                    value: 16,
                                                    message: 'Максимум 16 символов'
                                                },
                                            })}
                                            onChange={(e) => setTicket(prevState => ({ ...prevState, username: e.target.value, }))}
                                            placeholder={'Ваше имя'}
                                            type="text" />
                                        <input onChange={(e) => setTicket(prevState => ({ ...prevState, phone: e.target.value, }))} pattern='0[0-9]{3}[0-9]{3}[0-9]{3}' type="tel" placeholder={'Номер телефона'} />
                                        <button onClick={() => {
                                            sendTicket()
                                            setTicketError(true)
                                        }} type="button">Отправить</button>
                                    </form>
                                }
                            </div>
                        }
                    </motion.div>
                </div>
            }
            <div className={`header`}>
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

                    <button onClick={() => {
                        setActiveModalWindow(true)
                    }} className="header-button">+Добавить обьявление
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header;