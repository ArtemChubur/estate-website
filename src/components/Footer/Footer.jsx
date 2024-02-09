import React from 'react';
import logo from "../../assets/logo.png"
import {Socials} from "../../constants/social_meadia";
import './Footer.css'
import img from "../../assets/Rectangle 1.png";
const Footer = () => {
    return (
        <footer className="Footer">
            <div className='left-fotr'>
                <div>
                    <img src={logo} alt=""/>
                    <p>Contrary to popular  is not simply random text. It has </p>
                        { Socials.map((item,idx)=> {
                        return(
                            <div className='social-media' key={idx}>
                                <a target='_blank' href={item.link}><img src={item.logo} alt=""/></a>
                            </div>
                        )
                        })}
                </div>
            </div>

            <div className='right-fotr'>
                        <ul>
                            <li><h2>О нас</h2></li>
                            <li><a href="/about">Компания</a></li>
                            <li><a href="/#ReviewsSection">Команда</a></li>
                            <li><a href="/#ReviewsSection">Карьера</a></li>
                            <li><a href="/about">Блог</a></li>

                        </ul>
                        <ul>
                            <li><h2>Продукты</h2></li>
                            <li><a href="/#propertiesSection">E-Books</a></li>
                            <li><a href="/#propertiesSection">Объявления</a></li>
                            <li><a href="/#propertiesSection">Управление</a></li>
                            <li><a href="/">Dashboard</a></li>

                        </ul>
                        <ul>
                            <li><h2>Адрес</h2></li>
                            <li>г. Бишкек</li>
                            <li>Улица ** 17</li>
                            <li>www.itobd.com</li>
                            <li>+996 801 765 656</li>
                        </ul>
            </div>

        </footer>
    );
};

export default Footer;