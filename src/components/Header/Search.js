import React from 'react';
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => (
    <div className={'search-container'}>
        <form action="">
            <input type="text" placeholder={'Введите запрос'}/>
            <button type={'submit'}>
                <FontAwesomeIcon icon={'search'} />
            </button>
        </form>
    </div>
);

export default Search