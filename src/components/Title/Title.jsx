import React from 'react';
import img from "../../assets/Rectangle 1.png";
import './Title.css'

function Title() {
    return (
        <section>
            <div className={'title'}>
                <h1>Find the perfect place to stay with your family</h1>
                <img src={img} alt=""/>
            </div>
        </section>
    );
}

export default Title;