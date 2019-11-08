import React from 'react';
import {setActiveStatus} from "../../actions";
import { useDispatch, useSelector } from 'react-redux'

const Burger = () => {
    const isToggledBurger = useSelector((store) => store.isToggleBurger);
    const dispatch = useDispatch();

    return (
        <div className={isToggledBurger ? 'burger open' : 'burger'}
             onClick={() => dispatch(setActiveStatus())}>
            <button/>
        </div>
    )
};
export default Burger;
