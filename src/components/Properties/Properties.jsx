import React, {useEffect, useState} from 'react';
import './Properties.css'
import { useNavigate } from "react-router-dom";
import {axiosInstance} from "../../api/API";
import marker from '../../assets/01.png'

function Properties() {

    const [properties, setProperties] = useState([])
    const [isLoader, setIsLoader] = useState(false)

    const navigate = useNavigate()

    async function getFlats() {
        setIsLoader(true)
        const response = await axiosInstance.get(`/flats/`)
        try {
            if (response.status === 200) {
                setProperties(response.data.results)
                setIsLoader(false)
                console.log(response.data.results);
            } 
        } catch (e) {
            console.log(e);
            if (e.response.status === 404) {
                console.log('da')
            }
        } finally {
            
        }
    }

    function goToDetailPage(id) {
        navigate(`flat/${id}`)
    }

    useEffect(() => {
        getFlats()
    }, [])

    return (
        <div>
            <section>
                <h2>Popular Properties</h2>
                {isLoader ?
                <div>
                    <p>Loading...</p>
                </div>
                :
                <div className={'properties'}>
                                        {properties.map((item, idx) => {
                        return(
                            <div className={'propertiesBack'} key={idx}>
                                <img className={'propertiesImg'} src={item.flat_images.length > 1 ? item.flat_images[1].image : item.flat_images[0].image} alt=""/>
                                <h3>{item.title}</h3>
                                <span className='proppertiesAdres'>
                                    <img src={marker} alt="" /> 
                                    {item.district}
                                </span>
                                <div className='propertiseInfo'>
                                    <div>
                                        <span>Кол-во комнат: {item.rooms}</span>
                                    </div>
                                    <div>
                                        <span>Общая площадь: {item.total_area}</span>
                                    </div>
                                </div>
                                <div className='propertiesFooter'>
                                    <p>{item.price}$</p>
                                    <input value={'View Details'} type='button' onClick={() => {goToDetailPage(item.id)}} />
                                </div>
                            </div>)
                    })}
                </div>
                }
            </section>
        </div>
    );
}

export default Properties;