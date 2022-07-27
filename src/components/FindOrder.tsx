import React from 'react'
import { useState } from 'react'
import { getOrder }  from '../api/ordersApi';
import zoomImg from '../styles/images/zoom.png';

export function FindOrder() {
    const [orderTime, setOrderTime] = useState();
    const [orderStatus, setOrderStatus] = useState();
    const [orderQuantity, setOrderQuantity] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState(''); 

    const  handleSearch = async () => {
        setIsLoading(true);
        const data = await getOrder(value);
        setOrderTime(data.shipDate)
        setOrderStatus(data.status)
        setOrderQuantity(data.quantity)
        console.log(data);
        setIsLoading(false);
        setValue('');
    }

    return (
        <div className='findOrderSection'>
            <div className='findOrder-title'>
                <h2>Find your order</h2>
                <img alt='search-img' src={zoomImg}/>
            </div>
            <div className='search-form'>
                <input value={value} onChange={(e) => {setValue(e.target.value)}} 
                placeholder='Please enter your orderID'/>
                <button onClick={ handleSearch }>Search</button>
            </div>
            {isLoading && <p className='loader'>Loading...</p>}
            <div className='order-info'>
                <div>
                    <p>Quantity: <span>{orderQuantity}</span></p>
                    <p>Ship date is: <span>{orderTime}</span></p>
                    <p>Status: <span>{orderStatus}</span></p>
                </div>
                <div>
                    <h2>Our delivery</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptas ex quidem fugit placeat, aperiam natus praesentium. Iusto consequatur, 
                        minima.
                        </p>
                </div>
            </div>
        </div>
    )
}

