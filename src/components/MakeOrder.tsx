import React, { useState } from 'react'
import '../styles/orederpage.css'
import { postOrder } from '../api/ordersApi'

export function MakeOrder() {
  const [makeOrder, setMakeOrder] = useState(false);
  const [newOrderID, setNewOrderID] = useState('');
  const [newOrderPetId, SetNewOrderPetId] = useState('');
  const [newOrderQuantity, SetNewOrderQuantity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlerPostOrder = async () => {
    setIsLoading(true);
    await postOrder(newOrderID, newOrderPetId, newOrderQuantity);
    setIsLoading(false);
    setNewOrderID('');
    SetNewOrderPetId('');
    SetNewOrderQuantity('');
  }


  return (
    <section className='newOrderSection'>
      <div className='newOrder-wrap'>
        <h2>Make order</h2>
        <button onClick={() => setMakeOrder(prev => !prev)} 
        className='newOrder-btn-more'>
          { makeOrder ? 'close form' : 'open form' }
        </button>
        {isLoading && <p className='loader'>Loading...</p>}
        {makeOrder && <div>
          <div className='newOrder-form'>
            <input placeholder='ID' value={newOrderID} onChange={(e) => {setNewOrderID(e.target.value)}}></input>
            <input placeholder='Pet`s ID' value={newOrderPetId} onChange={(e) => {SetNewOrderPetId(e.target.value)}}></input>
            <input placeholder='Quantity' value={newOrderQuantity} onChange={(e) => {SetNewOrderQuantity(e.target.value)}}></input>
            <button className='newOrder-btn' onClick={ handlerPostOrder }>Submit order</button>
          </div>
        </div>}
      </div>
    </section>
  )
}