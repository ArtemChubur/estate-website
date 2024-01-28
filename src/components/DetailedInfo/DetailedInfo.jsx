import React from 'react';
import { useEffect , useState} from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import {axiosInstance} from "../../api/API";
import './DetailedInfo.css'

const DetailedInfo = () => {

    const id =useParams();
    // const images = []

    const [loader , setLoader ] = useState(false)
    const [getImage , setGetImage ] = useState([])
    const [images, setImages] = useState([])
    const [info , setInfo ] = useState([])

    
    const getFlat = async (id) => {
        setLoader(true)
        try {
            const data = await axiosInstance.get(`/flats/${id.id}`)
            console.log(data);
            if(data.status === 200 ){
                setGetImage(data.data.flat_images)
                setInfo(data.data)
                data.data.flat_images.map((item) => {
                    const newImg ={
                        original: item.image,
                        originalHeight: 433,
                        thumbnail: item.image,
                        thumbnailHeight: 180,
                        
                       
                        
                    }
                    images.push(newImg)
                })

            }
            
        } catch (error) {
            
        }finally{
            setLoader(false)
        }
    }



    useEffect(() => {
        getFlat(id)
       
    }, [])

  return (
    <div className='sliderchik'>
        <div className='slider'> {loader ? null : <ImageGallery className='slider' showPlayButton={false} showFullscreenButton={false} items={images} />}</div>
       
        <div className='info_text_parent'> 
        <p className='info_text'>
            {info.date }
            {info.title }
        
        </p></div>
        
    </div>
  )
}

export default DetailedInfo