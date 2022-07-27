import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/navigation.css';
import logo from '../styles/images/logo.png';

export function Navigation() {
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
        <Link to="/orders" className="nav-element">Orders</Link>
      </span>
    </nav>
  )
}