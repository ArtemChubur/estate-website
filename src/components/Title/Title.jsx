import React from 'react';
import img from "../../assets/Rectangle 1.png";
import './Title.css'

function Title() {
    return (
        <section>
            <div className={'title'}>
                <h1>Найдите идеальное место для отдыха с семьей</h1>
                <img src={img} alt=""/>
            </div>
        </section>
    );
}

export default Title;