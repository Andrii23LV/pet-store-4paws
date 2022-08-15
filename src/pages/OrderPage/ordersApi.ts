import axios from "axios"

export const getOrder = async (orderId:string) => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/store/order/${orderId}`)
        return response;
    }catch (error:any) {
        console.log(error.response);
        return error.response;
    }
}
