
import {axiosInstance} from "../api/API";
 




  export const getFlat = async (id) => {

   
    try {
        const data = await axiosInstance.get(`/flats/${id.id}`)
        console.log(data);
        if(data.status === 200 ){
           console.log(data.data.flat_images); 
        }
        
    } catch (error) {
        
    }finally{
    
    }
    
}
 
