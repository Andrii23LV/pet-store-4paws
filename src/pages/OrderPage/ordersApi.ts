import axios from "axios"

export const getOrder = async (orderId:string) => {
    const response = await axios.get(`https://petstore3.swagger.io/api/v3/store/order/${orderId}`)
    console.log(response);
    return response.data;
} 

