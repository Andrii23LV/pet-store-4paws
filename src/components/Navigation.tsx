import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/navigation.css';
import logo from '../styles/images/logo.png';
import { useSelector } from "react-redux";

export function Navigation() {
  const { username, isLogged } = useSelector((state: any = {}) => state.username);
  const { collarSum } = useSelector((state: any = {}) => state.collarSum);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 60 ? setColor(true) : setColor(true);
  }

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={color ? 'nav-wrap-bg' : 'nav-wrap'}>
      <div className='nav-title'>
        <img className="nav-logo" alt='logo' src={logo} />
        <h2 className="nav-text">FourPaws</h2>
      </div>
      <span className='nav-elements'>
        <Link to="/" className="nav-element">Products</Link>
        <Link to="/about" className="nav-element">About</Link>
        <Link to="/orders" className="nav-element">Orders{collarSum > 0 ? <span id='orders-num'>{collarSum}</span> : ''}</Link>
        <Link to="/account" className="nav-element">{isLogged ? username : 'Account'}</Link>
      </span>
    </nav>
  )
}