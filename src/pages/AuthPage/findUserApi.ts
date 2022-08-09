import axios from 'axios';

export const findUserApi = async (data: string) => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/${data}`)
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
