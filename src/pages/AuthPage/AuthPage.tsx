import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import './authorization.css'
import { UserAccount } from '../../components/UserAccount'

function AuthPage() {
  const { isLogged } = useSelector((state: any = {}) => state.username);
  return (
    <>
      { !isLogged ?
        <section className='auth-links-to'>
          <Link to="/account/registration" className='registration-link'>Registartion &#8599;</Link>
          <Link to="/account/authorization" className='authorization-link'>Authorization &#8599;</Link> 
        </section>
        : <UserAccount />}
    </>
  )
}

export default AuthPage