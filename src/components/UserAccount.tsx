import {  useSelector } from "react-redux";
import axios from 'axios';
import '../pages/AuthPage/account.css'
import logo from '../styles/images/user.svg';

import { LOGOUT } from '../redux/setCurrentUser';
import { useDispatch } from "react-redux";

export function UserAccount() {
  const dispatch = useDispatch();
  const loginApi = async () => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/logout`)
        console.log(response.data);
        dispatch(LOGOUT());
        return response.data;
    } catch (e) {
        console.log(e);
    }
} 

  const { firstName, id, petId } = useSelector((state: any = {}) => state.firstName);
  return (
      <section className='accountSection'>
          <div className="account-logout">
            <h2>Hello, <span className="form-name">{firstName}</span>. You are already logged in.</h2>
            <button onClick={ loginApi }>LOGOUT</button>
          </div>
          <div className="account-form">
            <img src={ logo }></img>
            <p>Name: <span>{ firstName }</span></p>
            <p>Id: <span>{ id }</span></p>
            <p>Your pet`s id is: <span>{ petId }</span></p>
          </div>
      </section>
  )
}
