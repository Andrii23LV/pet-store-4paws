import products from '../products.json'
import '../pages/OrderPage/orderpage.css';
import { useSelector } from "react-redux";
import { DECREMENT_RAFFINE,  DECREMENT_PREMIUM, DECREMENT_SIMPLE} from '../redux/setOrders';
import { useDispatch } from "react-redux";
import { NewOrderButton } from './NewOrderButton';
import { IdMessage } from '../components/IdMessage'

export function MakeOrder() {
  const { premiumQuantity, raffineQuantity, simpleQuantity, collarSum } = useSelector((state: any = {}) => state.premiumQuantity);
  const { id } = useSelector((state: any = {}) => state.id);

  const dispatch = useDispatch();
  return (
    <section className='newOrderSection'>
      <div className='orders-wrap'>
        {premiumQuantity > 0 &&  
          <div className='new-order'>
            <div className='order-description'>
              <img src={products[0].img} className='order-img'></img>
              <div>
                <h3 className='card-title'>{ products[1].name }</h3>
                <p className='card-text'>{ products[1].description }</p>
                <p className='order-price-order'>{ products[1].price }$</p>
              </div>
            </div>
              <div className='order-total'>
                <p className='order-quantity'>х{ premiumQuantity }</p>
                <p>{products[1].price * premiumQuantity}$</p>
                <button className='remove-order' onClick={ () => {dispatch(DECREMENT_PREMIUM())} }>remove</button>
              </div>
          </div>
        }
        {raffineQuantity > 0 &&  
          <div className='new-order'>
            <div className='order-description'>
              <img src={products[1].img} className='order-img'></img>
              <div>
                <h3 className='card-title'>{ products[1].name }</h3>
                <p className='card-text'>{ products[1].description }</p>
                <p className='order-price-order'>{ products[1].price }$</p>
              </div>
            </div>
              <div className='order-total'>
                <p className='order-quantity'>х{ raffineQuantity }</p>
                <p>{products[1].price * raffineQuantity}$</p>
                <button className='remove-order' onClick={ () => {dispatch(DECREMENT_RAFFINE())} } >remove</button>
              </div>
          </div>
        }
        {simpleQuantity > 0 &&  
          <div className='new-order'>
            <div className='order-description'>
              <img src={products[2].img} className='order-img'></img>
              <div>
                <h3 className='card-title'>{ products[2].name }</h3>
                <p className='card-text'>{ products[2].description }</p>
                <p className='order-price-order'>{ products[2].price }$</p>
              </div>
            </div>
              <div className='order-total'>
                <p className='order-quantity'>х{ simpleQuantity }</p>
                <p>{products[2].price * simpleQuantity}$</p>
                <button className='remove-order' onClick={ () => {dispatch(DECREMENT_SIMPLE())} }>remove</button>
              </div>
          </div>
        }
          {collarSum > 0 && <h2 className='total-price-order'>Total price: {products[0].price * premiumQuantity + products[1].price * 
          raffineQuantity + products[2].price * simpleQuantity }$</h2>}
          {collarSum > 0 && <NewOrderButton />}
          <IdMessage />
        </div>
    </section>
  )
}
