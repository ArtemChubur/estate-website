import React, {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../assets/logo.png"
import './header.css'

export const Header = ({page}) => {
    const activePage = page

    const [activeModalWindow, setActiveModalWindow] = useState(false);
    const [ticketError, setTicketError] = useState(true);

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
                        <div>
                            <p className={'modalWindowError'}>Ваша заявка не была отправлена, так как нам не предоставили backend для этого.</p>
                        </div>
                        :
                        <div>
                            <form>
                                <input placeholder={'Ваше имя'} type="text"/>
                                <input pattern='0[0-9]{3}[0-9]{3}[0-9]{3}' type="tel" placeholder={'Номер телефона'}/>
                                <button type="button">Отправить</button>
                            </form>
                        </div>
                        }
                    </div>
                </div>
            }
            <header className="header">
                <a href="../"><img src={logo} alt="" /></a>
                <div className="header-right">
                    <a onClick={() => {sessionStorage.setItem('page', 'about')}} href="../" className={`header-link ${activePage || 'header-link-activ'}`}>Home</a>
                    <a onClick={() => {sessionStorage.setItem('page', 'home')}} href={'/about'} className={`header-link ${activePage && 'header-link-activ'}`}>About Us</a>
                    <button onClick={() => {setActiveModalWindow(true)}} className="header-button">+Добавить обьявление</button>
                </div>
            </header>
        </div>
    )


}