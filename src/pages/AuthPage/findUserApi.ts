import axios from 'axios';

export const findUserApi = async (data: string) => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/${data}`)
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
