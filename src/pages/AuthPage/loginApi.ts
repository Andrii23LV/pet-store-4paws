import axios from 'axios';

export const loginApi = async (data: any = {}) => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/login?username=${data.username}r&password=${data.password}`)
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
        //додати модалку на 3 секунди шо вронг параметри
    }
} 
