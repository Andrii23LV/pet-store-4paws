import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { newUserApi } from '../../pages/AuthPage/newUserApi';
import { BackButton } from './BackButton'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function RegistrationForm() {
    const [ toggle, setToggle ] = useState(true);
    const [ incorrectUsername, setIncorrectUsername ] = useState(false);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pet-store-4paws/account/login', {replace: true});
    };

    const onSubmit = async (data:any = {}) => {
        const response = await findUserApi(data)
        if(response.status === 404) {
            setIncorrectUsername(true);
            newUserApi(data);
            setTimeout(() => {
                handleClick()
            }, 1000)
            setIncorrectUsername(false);
        } else {
            setIncorrectUsername(true);
        }
    }

    const findUserApi = async (data: string) => {
        try {
            const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/${data}`);
            return response;
        }catch (error:any) {
            console.log(error.response);
            return error.response;
        }
      }

    const togglePass = (e:any) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    return (
        <section className='registrationSection'>
                <BackButton />
                <div className='form-register-wrap'>
                    <form id='form-register' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <input  type="text" className='reg-input' 
                                {...register('username', {required: true, minLength:3, maxLength:15})} 
                                placeholder='Username'></input>
                                {errors?.username && {type: "required"} && <span className='error-auth'>*Username is required</span>}
                        <input  type="text" className='reg-input' 
                                {...register('firstName', {required: true, minLength:3, maxLength:15, pattern: /^[a-zA-Z ]{3,15}$/})} 
                                placeholder='First name'></input>
                                {errors?.firstName && {type: "required"} && <span className='error-auth'>*First name is required</span>}
                                {errors?.firstName && {type: "pattern"} && <span className='error-auth'>*Length from 3 to 15</span>}
                        <input  type="text" className='reg-input' 
                                {...register('lastName', {required: true, minLength:3, maxLength:15, pattern: /^[a-zA-Z ]{3,15}$/})} 
                                placeholder='Last name'></input>
                                {errors?.lastName && {type: "required"} && <span className='error-auth'>*Last name is required</span>}
                                {errors?.lastName && {type: "pattern"} && <span className='error-auth'>*Length from 3 to 15</span>}
                        <input  type="text" className='reg-input' 
                                {...register('email', {required: true, minLength:6, 
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} 
                                placeholder='Email address'></input>
                                {errors?.email && {type: "required"} && <span className='error-auth'>*Email is required</span>}
                                {errors?.email && {type: "pattern"} && <span className='error-auth'>*Incorrect email address</span>}
                        <input  type="text" className='reg-input' 
                                {...register('phone', {required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im})} 
                                placeholder='Phone number'></input>
                                {errors?.phone && {type: "required"} && <span className='error-auth'>*Phone number is required</span>}
                                {errors?.phone && {type: "pattern"} && <span className='error-auth'>*Wrong number</span>}
                        <input  type={toggle ? 'text' : 'password'} className='reg-input' 
                                {...register('password', {required: true, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/ })} 
                                placeholder='Password'></input>
                                {errors?.password && {type: "required"} && <span className='error-auth'>*Password is required</span>}
                                {errors?.password && {type: "pattern"} && <span className='error-auth'>*Should contain one uppercase and lowercase, one number</span>}
                        <button onClick={togglePass} className='hide-pass-btn'>
                            <svg viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"/>   
                            </svg>
                        </button>
                        {incorrectUsername && <p className='log-error'>Username already exists</p>}
                        <button className='btn-register'>Create new account</button>
                    </form>
                    <h2>Sign <br></br>up</h2>
                </div>
        </section>
    )
}
