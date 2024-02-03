import React from "react";
import logo from "../../assets/logo.png"
import './header.css'

export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />

            <div className="qweqwe">
                <a href="" className="header-link">Home</a>
                <a href="" className="header-link">Anout Us</a>
                <button className="heder-button">+Добавить обьявление</button>
            </div>
        </div>
    )


}