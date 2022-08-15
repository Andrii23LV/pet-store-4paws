import React from 'react'
import { useState } from 'react'
import { getOrder }  from '../../pages/OrderPage/ordersApi';
import zoomImg from '../../styles/images/zoom.png';

export function FindOrder() {
    const [orderTime, setOrderTime] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [orderQuantity, setOrderQuantity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState(''); 
    const [ incorrectOrder , setIncorrectOrder] = useState({
        status: false,
        text: ''
    });

    const  handleSearch = async () => {
        setIsLoading(true);
        const response = await getOrder(value);
        if(response.status === 404) {
            setIsLoading(false);
            setOrderTime('');
            setOrderStatus('');
            setOrderQuantity('');
            setIncorrectOrder(prev => {
                return { text: 'Order not found', status: true }
            }) 
        } else {
            setOrderTime(response.data.shipDate)
            setOrderStatus(response.data.status)
            setOrderQuantity(response.data.quantity)
            setIsLoading(false);
            setIncorrectOrder(prev => {return {...prev, status: false}});
            setValue('');
        }
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
            { incorrectOrder.status && <p className='loader'>Order not found</p>}
            <div className='order-info'>
                <div>
                    <p>Quantity: <span>{orderQuantity}</span></p>
                    <p>Ship date is: <span>{orderTime}</span></p>
                    <p>Status: <span>{orderStatus}</span></p>
                </div>
                <div>
                    <h2>Our delivery</h2>
                    <p>We cooperate with many leading companies that provide goods delivery services. 
                        Therefore, speed and quality are guaranteed. 
                        If you have any questions about your order. Call our hotline numbers.
                        </p>
                </div>
            </div>
        </div>
    )
}

