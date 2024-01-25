import React, {useEffect} from 'react';
import {axiosInstance} from "../api/API";
import Title from "../components/Title/Title";
import Partners from "../components/Partners/Partners";
import Properties from "../components/Properties/Properties";
import ImageGallery from "react-image-gallery";
import {images} from "../components/swiper/Swiper";

function Main() {



    return (
        <div>
            <Title />
            <Partners />
            <Properties />
            {/*<ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />*/}
        </div>
    );
}

export default Main;