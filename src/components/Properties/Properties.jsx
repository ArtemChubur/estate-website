import React, { useEffect, useState } from 'react';
import './Properties.css'
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/API";
import marker from '../../assets/01.png'
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";

function Properties() {
    const [realProperties, setRealProperties] = useState([])
    const [properties, setProperties] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    const [count, setCount] = useState(9)

    const navigate = useNavigate()

    async function getFlats() {
        setIsLoader(true)
        try {
            const response = await axiosInstance.get(`/flats/`)
            setRealProperties(response.data.results)
            const loadProperties = response.data.results.splice(0, count)
            setProperties(loadProperties)
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoader(false)
        }
    }

    console.log(properties);

    function goToDetailPage(id) {
        navigate(`flat/${id}`)
    }

    useEffect(() => {
        getFlats()
    }, [])

    useEffect(() => {
        getFlats()
    }, [count])


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };



    return (
        <div className='propertiesSection'>
            <section>
                <h2>Популярная недвижимость</h2>
                {isLoader ?
                    <div className='PropertiesLoader'>
                        <CircularProgress />
                    </div>
                    :
                    <div className={'properties'}>
                        {properties.map((item, idx) => {
                            return (
                                <motion.div 
                                    className={'propertiesBack'} 
                                    key={idx}
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"     
                                    viewport={true}                           
                                >
                                    <img className={'propertiesImg'} src={item.flat_images.length > 3 ? item.flat_images[3].image : item.flat_images[0].image} alt="" />
                                    <div className='PropertiesContainer'>
                                        <h3>{item.title}</h3>
                                        <div className='proppertiesAdres'>
                                            <span>
                                                <img src={marker} alt="" /> {item.district}
                                            </span>
                                        </div>
                                        <div className='propertiseInfo'>
                                            <div>
                                                <span>Кол-во комнат:   {item.rooms}</span>
                                            </div>
                                            <div>
                                                <span>Общая площадь: {item.total_area}</span>
                                            </div>
                                        </div>
                                        <div className='propertiesFooter'>
                                            <p>{item.price}$</p>
                                            <input value={'Подробнее'} type='button' onClick={() => { goToDetailPage(item.id) }} />
                                        </div>
                                    </div>
                                </motion.div>)
                        })}
                    </div>
                }
                {realProperties.length !== 0 && <button className='LoadMoreBtn' onClick={() => {setCount(count + count)}}>Загрузить еще</button>}
            </section>
        </div>
    );
}

export default Properties;