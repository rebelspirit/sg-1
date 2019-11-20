import React from 'react';
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {findDataByMultiSearch} from "../../actions";
import {useHistory} from "react-router-dom";

const Search = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sendSearchRequest = () => {
        const input = document.querySelector("input");

        if(input.value.length !== 0 && input.value.length >= 3) {
            history.push("/search");
            dispatch(findDataByMultiSearch(input.value));
        }
    };

    const searchWhenEnterPress = (event) => {
        if(event.charCode === 13) {
            sendSearchRequest();
        }
    };

    return (
        <div className={'search-container'}>
            <div className={'search-field'}>
                <input type="text"
                       placeholder={'Введите запрос'}
                       onKeyPress={searchWhenEnterPress}
                />
                <button type={'button'}
                        onClick={sendSearchRequest}>
                    <FontAwesomeIcon icon={'search'} />
                </button>
            </div>
        </div>
    );
};

export default Search