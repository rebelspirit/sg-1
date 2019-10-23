import React from 'react'
import {NavLink} from "react-router-dom";

const Logo = () => (
    <h1 className={'logo'}>
            <NavLink to={"/"}>gofilm.io</NavLink>
    </h1>
);

export default Logo