import React from 'react';
import logo from "../../assets/logo.png"
import {Socials} from "../../constants/social_meadia";
import './Footer.css'
import img from "../../assets/Rectangle 1.png";
const Footer = () => {
    return (
        <div className="Footer">
            <div className='left-fotr'>
                <div>
                    <img src={logo} alt=""/>
                    <p>Contrary to popular  is not simply random text. It has </p>
                        { Socials.map((item,idx)=> {
                        return(
                            <div
                                className='social-media'
                                key={idx}>
                                <img src={item.logo} alt=""/>
                            </div>
                        )
                        })}
                </div>
            </div>

            <div className='right-fotr'>
                        <ul>
                            <li><h2>About</h2></li>
                            <li>Company</li>
                            <li>Team</li>
                            <li>Career</li>
                            <li>Blogs</li>

                        </ul>
                        <ul>
                            <li><h2>Products</h2></li>
                            <li>E-Books</li>
                            <li>Preasantation</li>
                            <li>Management</li>
                            <li>Dashboard</li>

                        </ul>
                        <ul>
                            <li><h2>Address</h2></li>
                            <li>Country Delevery</li>
                            <li>Counter Beach Post</li>
                            <li>www.itobd.com</li>
                            <li>+880176565655</li>
                        </ul>
            </div>

        </div>
    );
};

export default Footer;