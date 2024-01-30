import React from 'react';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { axiosInstance } from "../../api/API";
import CircularProgress from '@mui/material/CircularProgress';
import './DetailedInfo.css'

const DetailedInfo = () => {

    const { id } = useParams();
    // const images = []

    const [loader, setLoader] = useState(false)
    const [getImage, setGetImage] = useState([])
    const [images, setImages] = useState([])
    const [info, setInfo] = useState([])
    const [contact, setContact] = useState(false)

    const getFlat = async (id) => {
        setLoader(true)
        try {
            const data = await axiosInstance.get(`/flats/${id}`)
            console.log(data);
            if (data.status === 200) {
                setGetImage(data.data.flat_images)
                setInfo(data.data)
                data.data.flat_images.map((item) => {
                    const newImg = {
                        original: item.image,
                        originalHeight: 433,
                        thumbnail: item.image,
                        thumbnailHeight: 180,

                    }
                    images.push(newImg)
                })

            }

        } catch (error) {

        } finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        getFlat(id)

    }, [])

    return (
        <div className='sliderchik'>

            <div className='slider'> {loader ?
             <div className="loader_for_slider">
             <CircularProgress />
              </div>
              : <ImageGallery className='slider'  showPlayButton={false} showFullscreenButton={false} items={images} />}</div>
            {contact &&
                <div className="contact_div_parent">
                    <div className="contact_div">
                        <button
                        className='button_cancel'
                            onClick={() => {
                                setContact(false)
                            }}
                        ><h2>X</h2></button>
                        <div className="contact_info">
                            <h3>Реалтор: {info.realtor?.FIO}</h3>
                            <p>Телефон : {info.realtor?.phone}</p>
                        </div>


                    </div>
                </div>
                
              
            }
                    {loader ?
                    <div className="loader_for_text">
                         <CircularProgress /> 
                    </div>
                     : <div className='info_text_parent'>
                 <div className='info_text'>
                     <h2>{info.title}</h2>
                     <p>Адрес: {info.district}</p>
                     <p>Этаж: {info.floor} из {info.number_of_floors}</p>
                     <p>Площадь: {info.total_area}м²</p>
                     <p>Тип документа: {info.document}</p>
                     <p>Состояние: {info.condition}</p>
                     <p>Описание: {info.description}</p>
                     <p>Цена: {info.price}$</p>
                     <p>ID: {info.id}</p>
                     <button
                         className='button_contact'
                         onClick={() => { setContact(true) }}
                     >Контакты</button>
 
                 </div></div>
           }
                

        </div>
    )
}

export default DetailedInfo