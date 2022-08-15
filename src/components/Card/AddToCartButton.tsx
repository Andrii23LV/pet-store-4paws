import { INCREMENT_RAFFINE,  INCREMENT_PREMIUM, INCREMENT_SIMPLE} from '../../redux/setOrders';
import { useDispatch } from "react-redux";

function AddToCartButton() {
    const dispatch = useDispatch();
    const handleClick = (e:any) => {
        let a = e.target.parentElement.id;
        if (a == 1) {
            dispatch(INCREMENT_PREMIUM());
        } else if (a == 2) {
            dispatch(INCREMENT_RAFFINE());
        } else {
           dispatch(INCREMENT_SIMPLE());
        }
    }
    return (
        <button className='card-cart-btn' onClick={ handleClick }>Add to cart</button>
    )
}

export default AddToCartButton