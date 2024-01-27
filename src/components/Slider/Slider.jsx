import React from 'react';
import { useEffect , useState} from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import {axiosInstance} from "../../api/API";

const Slider = () => {

    const id =useParams();
    // const images = []

    const [loader , setLoader ] = useState(false)
    const [getImage , setGetImage ] = useState([])
    const [images, setImages] = useState([])

    
    const getFlat = async (id) => {
        setLoader(true)
        try {
            const data = await axiosInstance.get(`/flats/${id.id}`)
            console.log(data);
            if(data.status === 200 ){
                setGetImage(data.data.flat_images)

                data.data.flat_images.map((item) => {
                    const newImg ={
                        original: item.image,
                        thumbnail: item.image,
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
    <div>
        {loader ? null : <ImageGallery className='slider' showPlayButton={false} showFullscreenButton={false} items={images} />}
    </div>
  )
}

export default Slider