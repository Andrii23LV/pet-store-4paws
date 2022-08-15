import {  useSelector } from "react-redux";
import axios from 'axios';
import '../../pages/AuthPage/account.css'
import logo from '../../styles/images/user.svg';
import products from '../../products.json';

import { LOGOUT } from '../../redux/setCurrentUser';
import { useDispatch } from "react-redux";
import { PREMIUM_WISH, RAFFINE_WISH, SIMPLE_WISH } from '../../redux/setWishList';
import { INCREMENT_RAFFINE,  INCREMENT_PREMIUM, INCREMENT_SIMPLE} from '../../redux/setOrders';


export function UserAccount() {
  const { wishPremium, wishRaffine, wishSimple } = useSelector((state: any = {}) => state.wishPremium);
  const dispatch = useDispatch();
  const loginApi = async () => {
    try {
        const response = await axios.get(`https://petstore3.swagger.io/api/v3/user/logout`)
        console.log(response.data);
        dispatch(LOGOUT());
        return response.data;
    } catch (err) {
        console.log(err);
    }
} 

  const { firstName, id, petId } = useSelector((state: any = {}) => state.firstName);
  return (
    <>
      <section className='accountSection'>
          <div className="account-logout">
            <h2>Hello, <span className="form-name">{firstName}</span>. You are already logged in.</h2>
            <button onClick={ loginApi }>LOGOUT</button>
          </div>
          <div className="account-details">
            <div className="account-form">
              <img src={ logo }></img>
              <p>Name: <span>{ firstName }</span></p>
              <p>Id: <span>{ id }</span></p>
              <p>Your pet`s id is: <span>{ petId }</span></p>
            </div>
            <div>
              {(wishPremium || wishRaffine || wishSimple) &&
                <section className='wishSection'>
                <h2>Wishlist</h2>
                <div className='wish-wrap'>
                  {wishPremium &&  
                    <div className='wish-card'>
                      <div className='wish-description'>
                        <img src={products[0].img} className='order-img'></img>
                        <div>
                          <h3 className='card-title'>{ products[0].name }</h3>
                          <p className='card-text'>{ products[0].description }</p>
                          <p className='wish-price-order'>{ products[0].price }$</p>
                        </div>
                      </div>
                      <div className="wish-btns">
                        <button className='add-cart-wish' onClick={ () => {dispatch(INCREMENT_PREMIUM());} }>add to cart</button>
                        <button className='remove-wish' onClick={ () => {dispatch(PREMIUM_WISH(false));} }>remove</button>
                      </div>
                    </div>
                  }
                  {wishRaffine &&  
                    <div className='wish-card'>
                      <div className='wish-description'>
                        <img src={products[1].img} className='order-img'></img>
                        <div>
                          <h3 className='card-title'>{ products[1].name }</h3>
                          <p className='card-text'>{ products[1].description }</p>
                          <p className='wish-price-order'>{ products[1].price }$</p>
                        </div>
                      </div>
                      <div className="wish-btns">
                        <button className='add-cart-wish' onClick={ () => {dispatch(INCREMENT_RAFFINE());} }>add to cart</button>
                        <button className='remove-wish' onClick={ () => {dispatch(RAFFINE_WISH(false));} }>remove</button>
                      </div>
                    </div>
                  }
                  {wishSimple &&  
                    <div className='wish-card'>
                      <div className='wish-description'>
                        <img src={products[2].img} className='order-img'></img>
                        <div>
                          <h3 className='card-title'>{ products[2].name }</h3>
                          <p className='card-text'>{ products[2].description }</p>
                          <p className='wish-price-order'>{ products[2].price }$</p>
                        </div>
                      </div>
                      <div className="wish-btns">
                        <button className='add-cart-wish' onClick={ () => {dispatch(INCREMENT_SIMPLE());} }>add to cart</button>
                        <button className='remove-wish' onClick={ () => {dispatch(SIMPLE_WISH(false));} }>remove</button>
                      </div>
                    </div>
                  }
                </div>
              </section>
              }
            </div>
          </div>
      </section>
    </>
  )
}
