import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import './authorization.css';  
import './registration.css';  
import './login.css';  
import { UserAccount } from '../../components/Auth/UserAccount'

function AuthPage() {
  const { isLogged } = useSelector((state: any = {}) => state.id);
  return (
    <>
      { !isLogged ?
        <section className='auth-links-to'>
          <Link to="/pet-store-4paws/account/registration" className='registration-link'>Registartion &#8599;</Link>
          <Link to="/pet-store-4paws/account/login" className='login-link'>Login &#8599;</Link> 
        </section>
        : <UserAccount />}
    </>
  )
}

export default AuthPage