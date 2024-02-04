import React from 'react';
// import {axiosInstance} from "../api/API";
import Title from "../components/Title/Title";
import Partners from "../components/Partners/Partners";
import Properties from "../components/Properties/Properties";
import Reviews from "../components/Reviews/Reviews";

function Main() {
    return (
        <div>
            <Title />
            <Partners />
            <Properties />
            <Reviews />
        </div>
    );
}

export default Main;