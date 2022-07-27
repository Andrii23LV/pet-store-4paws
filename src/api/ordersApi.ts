import axios from "axios"

export const getOrder = async (orderId:string) => {
    const response = await axios.get(`https://petstore3.swagger.io/api/v3/store/order/${orderId}`)
    console.log(response);
    return response.data;
} 

export const postOrder = async (orderId:string, orderPetId:string, orderQuantity: string) => {
    try { const response = await axios.post('https://petstore3.swagger.io/api/v3/store/order', {
        "id": parseInt(orderId),
        "petId": parseInt(orderPetId),
        "quantity": parseInt(orderQuantity),
        "shipDate": "2022-07-27T18:09:54.199+00:00",
        "status": "approved",
        "complete": true
        })
        console.log(response.data);
    } 
    catch (e: unknown) {
        console.log(e)
    }
} 
