import React from 'react';
import './Partners.css'
import {partners} from "../../constants/partners";
import img from "../../assets/Rectangle 1.png";

function Partners() {
    return (
        <section>
            <div className={'PartnersSection'}>
                <h2>Наши партнеры</h2>
                <div className={'PartnersLogo'}>
                    {partners.map((item, idx) => {
                        return(
                            <div key={idx}>
                                <img src={item.logo} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Partners;