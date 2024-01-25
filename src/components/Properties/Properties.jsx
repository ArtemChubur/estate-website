import React, {useEffect, useState} from 'react';
import {axiosInstance} from "../../api/API";

function Properties() {

    const [data, setData] = useState([])
    const [isLoader, setIsLoader] = useState(false)

    async function getFlats() {
        setIsLoader(true)
        const response = await axiosInstance.get('/flat/')
        try {
            if (response.status === 200) {
                console.log(response.data)
                setData(response.data)
            } else if (response.response.status === 404) {
                alert('error')
            }
        } catch (e) {

        } finally {
            setIsLoader(false)
        }
    }

    useEffect(() => {
        getFlats()
    }, [])

    return (
        <div>
            <section>
                <h2>Popular Properties</h2>
                {}
            </section>
        </div>
    );
}

export default Properties;