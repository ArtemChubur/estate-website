import React, { useEffect, useState } from 'react';
import './Properties.css'
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/API";
import marker from '../../assets/01.png'
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";
import { container } from "../../constants/animate";

function Properties() {
    const [realProperties, setRealProperties] = useState([])
    const [properties, setProperties] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    const [count, setCount] = useState(9)

    const navigate = useNavigate()
    let activProperti = 1

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

    function goToDetailPage(id) {
        navigate(`flat/${id}`)
    }

    function loadMore() {
        // setIsLoader(true)
        setCount(count + 9)
            // const loadProperties = realProperties.splice(0, count)
            // for (let i = 0; i <= loadProperties.length; i++) {
            //     properties.push(loadProperties[i-1])
            //     console.log(properties);

            // }
        // setIsLoader(false)

    }

    useEffect(() => {
        getFlats()
    }, [])

    useEffect(() => {
        getFlats()

    }, [count])

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
                                    id={`Properti${idx + 1}`}
                                    key={idx}
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                >
                                    <img className={'propertiesImg'} src={item.flat_images?.length > 2 ? item.flat_images[3].image : item.flat_images[0].image} alt="" />
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
                                            <a href={`flat/${item.id}`}><input value={'Подробнее'} type='button' /></a>
                                        </div>
                                    </div>
                                </motion.div>)
                        })}
                    </div>
                }
                {realProperties.length !== 0 && <button className='LoadMoreBtn' onClick={loadMore}>Загрузить еще</button>}
            </section>
        </div>
    );
}

export default Properties;