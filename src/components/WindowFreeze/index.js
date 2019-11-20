import React, {useEffect} from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {closeBurger} from "../../actions";

const overflow = {
    "true": "hidden",
    "false": "auto"
};

const WindowFreeze = () => {
    const isToggledBurger = useSelector((store) => store.isToggleBurger);
    const dispatch = useDispatch();

    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflowY = overflow[isToggledBurger];
    }, [isToggledBurger]);

    return (
        isToggledBurger ? <div className={"freeze-container"}
             onClick={() => dispatch(closeBurger())}
        /> : null
    )
};

export default WindowFreeze;