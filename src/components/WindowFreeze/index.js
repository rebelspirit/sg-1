import React, {useEffect} from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {setActiveStatus} from "../../actions";

const overflow = {
    "true": "hidden",
    "false": "auto"
};

const WindowFreeze = () => {
    const isToggledBurger = useSelector((store) => store.isToggleBurger);
    const dispatch = useDispatch();

    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = overflow[isToggledBurger];
    }, [isToggledBurger]);
    return (
        isToggledBurger ? <div className={"freeze-container"}
             onClick={() => dispatch(setActiveStatus())}
        /> : null
    )
};

export default WindowFreeze;