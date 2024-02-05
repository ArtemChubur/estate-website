import React, {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../assets/logo.png"
import bibizyanki from "../../assets/bibizyanki.gif"
import './header.css'
import {useLocation, useParams} from "react-router-dom";

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
        <div>
            {activeModalWindow &&
                <div className={`header-modal-window`} >
                    <div className={'headerParentsForm'}>
                        <button
                            onClick={() => {
                                setActiveModalWindow(false)
                                setTicketError(false)
                            }}
                            className={'header-close-btn'}><CloseIcon /></button>
                        {ticketError ?
                        <div className='text_in_the_alert'>
                            <p className={'modalWindowError'}>Ваша заявка не была отправлена, так как нам не предоставили backend для этого.</p>

                            <img className='bibizyanki_gif' src={bibizyanki} alt="" loop={1}/>

                        </div>
                        :
                        <div>
                            <form>
                                <input placeholder={'Ваше имя'} type="text"/>
                                <input pattern='0[0-9]{3}[0-9]{3}[0-9]{3}' type="tel" placeholder={'Номер телефона'}/>
                                <button onClick={() => {setTicketError(true)}} type="button">Отправить</button>
                            </form>
                        </div>
                        }
                    </div>
                </div>
            }
            <header className="header">
                <a href="../"><img src={logo} alt="" /></a>
                <div className="header-right">
                    <a href="../"
                       className={`header-link ${activePage || 'header-link-activ'}`}>Home</a>

                    <a href={'/about'} className={`header-link ${activePage && 'header-link-activ'}`}>About Us</a>

                    <button onClick={() => {setActiveModalWindow(true)}} className="header-button">+Добавить обьявление</button>
                </div>
            </header>
        </div>
    )
}