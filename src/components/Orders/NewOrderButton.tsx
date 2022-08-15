import { useSelector } from "react-redux";
import { postOrder } from '../../pages/OrderPage/postOrder';
import { ModalSuccess } from '../ModalSuccess'
import { useState, useEffect } from 'react';
import { RESET_ORDER } from '../../redux/setOrders';
import { useDispatch } from 'react-redux';

export const NewOrderButton = () => {
    const { id, petId } = useSelector((state: any = {}) => state.id);
    const { collarSum } = useSelector((state: any = {}) => state.collarSum);
    const { isLogged } = useSelector((state: any = {}) => state.username);
    const [ needSignIn, setNeedSignIn ] = useState(false);
    const [ isSuccessfull, setIsSuccessfull ] = useState(false)
    const [ show, setShow ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (show) {
        document.body.style.overflow = 'hidden';
        }
        return () => {
        document.body.style.overflow = 'unset';
        };
     }, [show]);

    const handleClick = () => {
        if (isLogged) { 
            postOrder(id, petId, collarSum);
            setIsSuccessfull(true);
            setShow(true);
            setTimeout(() => {
                setIsSuccessfull(false);
                setShow(false);
                dispatch(RESET_ORDER());
            }, 2000)

        } else {
            setNeedSignIn(true);
        } 
    }
    return (
        <>
            <button onClick={handleClick} className='buy-btn'>BUY</button>
            {needSignIn && <>Sign in to complete your order.</>} 
            {isSuccessfull && <ModalSuccess />}
        </>
    )
}