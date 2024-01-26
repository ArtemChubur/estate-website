import React, {useEffect, useState} from 'react';
import './Properties.css'
import { useNavigate } from "react-router-dom";
import {axiosInstance} from "../../api/API";

function Properties() {

    const [properties, setProperties] = useState([])
    const [isLoader, setIsLoader] = useState(false)

    const navigate = useNavigate()

    async function getFlats() {
        setIsLoader(true)
        const response = await axiosInstance.get(`/flats/`)
        try {
            if (response.status === 200) {
                // console.log(response.data.results)
                setProperties(response.data.results)
            }
        } catch (e) {
            if (response.response.status === 404) {
                alert('error')
            }
        } finally {
            setIsLoader(false)
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
                                <img className={'propertiesImg'} src={item.flat_images[0].image} alt=""/>
                                <p>{item.district}</p>
                                <button onClick={() => {goToDetailPage(item.id)}}>Подробнее</button>
                            </div>)
                    })}
                </div>
                }
            </section>
        </div>
    );
}

export default Properties;