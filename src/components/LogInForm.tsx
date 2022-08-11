import '../pages/AuthPage/login.css'
import {Link} from 'react-router-dom'
import { BackButton } from './BackButton'
import axios from 'axios';
import { loginApi } from '../pages/AuthPage/loginApi'
import { ModalSuccess } from '../components/ModalSuccess'
import { randomPetId }from '../features/randomPetId'

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { SET_USER } from "../redux/setCurrentUser";
import { SET_PET_ID } from "../redux/setCurrentUser";

export function LogInForm() {
  const [ isSuccessfull, setIsSuccessfull ] = useState(false)
  const dispatch = useDispatch();
  const onSubmit = (data:any = {}) => {
    console.log('login');
    setIsSuccessfull(true);
    loginApi(data);
    findUserApi(data.username)
    setTimeout(() => {
      setIsSuccessfull(false);
    }, 2000)
  }

  const findUserApi = async (data: string) => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/${data}`)
        console.log(response.data);
        console.log(dispatch(SET_USER(response.data)));
        dispatch(SET_PET_ID(randomPetId()));
        return response.data;
    } catch (e) {
        console.log(e);
    }
  }

  const { register, handleSubmit, formState: { errors }} = useForm();
  return (
    <section className='logInSection'>
            <BackButton />
            <div className='form-logIn-wrap'>
                <h2>Sign <br></br>in</h2>
                <form id='form-logIn' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                    <input type="text" placeholder='Username'
                    {...register('username', {required: true, minLength:3, maxLength:15})}>
                    </input>
                    <input type="text" placeholder='Password'
                    {...register('password', {required: true})}>
                    </input>
                    <Link to="/account/registration" className='registration-link'>Don`t have an account?</Link>
                    <button>log into the account</button>
                </form>
            </div>
            {isSuccessfull && <ModalSuccess />}
    </section>
  )
}
