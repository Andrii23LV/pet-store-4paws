import '../../pages/AuthPage/login.css'
import {Link} from 'react-router-dom'
import { BackButton } from './BackButton'
import axios from 'axios';
import { ModalSuccess } from '../ModalSuccess'
import { randomPetId }from '../../features/randomPetId'

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { SET_USER } from "../../redux/setCurrentUser";
import { SET_PET_ID } from "../../redux/setCurrentUser";
import { useNavigate } from 'react-router-dom';

export function LogInForm() {
  const [ isSuccessfull, setIsSuccessfull ] = useState(false);
  const [ incorrectUser, setIncorrectUser ] = useState(false);
  const [ incorrectPass, setIncorrectPass ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data:any = {}) => {
    const response = await findUserApi(data.username);
    if(response.status === 404){
      setIncorrectUser(true);
    } else {
      if( data.password != response.data.password ){
        return setIncorrectPass(true);
      }
      setTimeout(() => {
        setIsSuccessfull(false);
        navigate('/pet-store-4paws/', {replace: true});
      }, 2000)
      setIsSuccessfull(true);
      setIsSuccessfull(true);
      setIncorrectUser(false);
      setIncorrectPass(false);
    }
  }
  const findUserApi = async (data: string) => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/${data}`)
        dispatch(SET_USER(response.data));
        dispatch(SET_PET_ID(randomPetId()));
        return response;
    }catch (error:any) {
        console.log(error.response);
        return error.response;
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
                    {errors?.username && {type: "required"} && <span className='error-auth'>*Username is required</span>}
                    <input type="text" placeholder='Password'
                      {...register('password', {required: true})}>
                    </input>
                    {errors?.password && {type: "required"} && <span className='error-auth'>*Password is required</span>}
                    {errors?.password && {type: "pattern"} && <span className='error-auth'>*Should contain one uppercase and lowercase, one number</span>}
                    <Link to="/account/registration" className='registration-link'>Don`t have an account?</Link>
                    {incorrectUser && <p className='log-error'>User not found</p>}
                    {incorrectPass && <p className='log-error'>Incorrect password</p>}
                    <button>log into the account</button>
                </form>
            </div>
            {isSuccessfull && <ModalSuccess />}
    </section>
  )
}
