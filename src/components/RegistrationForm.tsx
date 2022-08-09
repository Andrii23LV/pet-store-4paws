import '../styles/registration.css';
import { useForm } from 'react-hook-form';
import { newUserApi } from '../pages/AuthPage/newUserApi';
import { BackButton } from './BackButton'
import { useNavigate } from 'react-router-dom';

export function RegistrationForm() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/account/authorization', {replace: true});
    };

    const onSubmit = (data:any = {}) => {
        console.log(data);
        newUserApi(data);
        setTimeout(() => {
            handleClick()
        }, 1000)
    }

    return (
        <section className='registrationSection'>
                <BackButton />
                <div className='form-register-wrap'>
                    <form id='form-register' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                        <input  type="text" 
                                {...register('username', {required: true, minLength:3, maxLength:15})} 
                                placeholder='Username'></input>
                                {errors?.username && {type: "required"} && <span className='error-auth'>*Username is required</span>}
                        <input  type="text" 
                                {...register('firstName', {required: true, minLength:3, maxLength:15, pattern: /^[a-zA-Z ]{3,15}$/})} 
                                placeholder='First name'></input>
                                {errors?.firstName && {type: "required"} && <span className='error-auth'>*First name is required</span>}
                                {errors?.firstName && {type: "pattern"} && <span className='error-auth'>*Length from 3 to 15</span>}
                        <input  type="text" 
                                {...register('lastName', {required: true, minLength:3, maxLength:15, pattern: /^[a-zA-Z ]{3,15}$/})} 
                                placeholder='Last name'></input>
                                {errors?.lastName && {type: "required"} && <span className='error-auth'>*Last name is required</span>}
                                {errors?.lastName && {type: "pattern"} && <span className='error-auth'>*Length from 3 to 15</span>}
                        <input  type="text" 
                                {...register('email', {required: true, minLength:6, 
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} 
                                placeholder='Email address'></input>
                                {errors?.email && {type: "required"} && <span className='error-auth'>*Email is required</span>}
                                {errors?.email && {type: "pattern"} && <span className='error-auth'>*Incorrect email address</span>}
                        <input  type="text" 
                                {...register('phone', {required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im})} 
                                placeholder='Phone number'></input>
                                {errors?.phone && {type: "required"} && <span className='error-auth'>*Phone number is required</span>}
                                {errors?.phone && {type: "pattern"} && <span className='error-auth'>*Wrong number</span>}
                        <input  type="text" 
                                {...register('password', {required: true, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/ })} 
                                placeholder='Password'></input>
                                {errors?.password && {type: "required"} && <span className='error-auth'>*Password is required</span>}
                                {errors?.password && {type: "pattern"} && <span className='error-auth'>*Should contain one uppercase and lowercase, one number</span>}
                        <button>Create new account</button>
                    </form>
                    <h2>Sign <br></br>up</h2>
                </div>
        </section>
    )
}
