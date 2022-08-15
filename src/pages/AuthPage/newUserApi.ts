import axios from "axios"
import { randomUserId } from '../../features/randomUserId'
export const newUserApi = async (data:any = {}) => {
    try { const response = await axios.post('https://petstore3.swagger.io/api/v3/user', {
        "id": randomUserId(),
        "username": data.username,
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "password": data.password,
        "phone": data.phone,
        "userStatus": 1
        })
    } 
    catch (e:any) {
        console.log(e.response.data)
    }
} 

