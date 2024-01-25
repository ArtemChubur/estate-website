import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://realty-ggcv.onrender.com/main/'
})

export {axiosInstance}