import axios from 'axios';

export const postOrder = async (id:number, petId: number, collarSum:number) => {

    try { const response = await axios.post('https://petstore3.swagger.io/api/v3/store/order', {
        "id": id,
        "petId": petId,
        "quantity": collarSum,
        "shipDate": new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
        "status": "approved",
        "complete": true
        })
        console.log(response.data);
    } 
    catch (e: unknown) {
        console.log(e)
    }
} 