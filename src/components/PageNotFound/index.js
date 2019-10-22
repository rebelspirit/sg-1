import React from 'react';
import './index.css';
import {NavLink} from "react-router-dom";

const PageNotFound = () => (
    <div className={"pageNotFound"}>
        <div className={"pageNotFound-content"}>
            <h2><span>404</span>
                <br/>
                This page is under construction</h2>
            <NavLink to={"/"}>Go back</NavLink>
        </div>
    </div>
);
export default PageNotFound;