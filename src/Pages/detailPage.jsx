import React from 'react';
import { useParams } from 'react-router-dom';
import {axiosInstance} from "../api/API";
import { useEffect , useState} from 'react';
import ImageGallery from 'react-image-gallery';
import images from  '../constants/SliderImages'
import  daniel from '../assets/daniel.webp'




function DetailPage() {
    const [getImage , setGetImage ] = useState([])
    const [loader , setLoader ] = useState(false)

    const id =useParams();

    
    const getFlat = async (id) => {
        setLoader(true)
        try {
            const data = await axiosInstance.get(`/flats/${id.id}`)
            console.log(data);
            if(data.status === 200 ){
                setGetImage(data.data.flat_images)
            }
            
        } catch (error) {
            
        }finally{
            setLoader(false)
        }
    }
  

    useEffect(() => {
        getFlat(id)
       
    }, [])
   
            const images = [
        {
            original: daniel,
            thumbnail: daniel,
        },
        {
            original:   daniel,
            thumbnail:  daniel,
        },
        {
            original:   daniel,
            thumbnail:  daniel,
        },
    ];
    console.log(images)
    return (

        <div className='DetailPage'>
            {getImage.map((item , idx) =>{
                return( <img  src={item.image}  />)
            })}
            {loader ? null :<ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />}
            
        </div>
    );
}

export default DetailPage;