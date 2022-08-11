import { useState } from 'react';
import { PREMIUM_WISH, RAFFINE_WISH, SIMPLE_WISH } from '../redux/setWishList';
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux";

export function SaveIcon() {
    const [ colorRed, setColorRed ] = useState(true);
    const dispatch = useDispatch();
    const setWish = (e:any) => {
        let id = e.target.parentElement.parentElement.parentElement.id;
        console.log(id)
        if (id == 1) {
            setColorRed(!colorRed);
            if(colorRed) {
                dispatch(PREMIUM_WISH(true));
            } else {
                dispatch(PREMIUM_WISH(false));
            }
        } else if (id == 2) {
            setColorRed(!colorRed);
            if(colorRed) {
                dispatch(RAFFINE_WISH(true));
            } else {
                dispatch(RAFFINE_WISH(false));
            }
        } else {
            setColorRed(!colorRed);
            if(colorRed) {
                dispatch(SIMPLE_WISH(true));
            } else {
                dispatch(SIMPLE_WISH(false));
            }
        }
    }
    return (
        <button className="save-btn" onClick={setWish}>
            <svg    className={colorRed ? 'save-icon' : 'save-icon-red'} 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                <path className="cls-1" d="M12,22c8-4,11-9,11-14A6,6,0,0,0,12,4.686,6,6,0,0,0,1,8C1,13,4,18,12,22Z"/>
            </svg>
        </button>
    )
}

