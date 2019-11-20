import React from 'react';
import {changeActiveStatus} from "../../actions";
import { useDispatch, useSelector } from 'react-redux'

const Burger = () => {
    const isToggledBurger = useSelector((store) => store.isToggleBurger);
    const dispatch = useDispatch();

    return (
        <div className={isToggledBurger ? 'burger open' : 'burger'}
             onClick={() => dispatch(changeActiveStatus())}>
            <button/>
        </div>
    )
};
export default Burger;
