import React from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {bindActionCreators} from "redux";
import {findDataByMultiSearch} from "../../actions";
import {useHistory} from "react-router-dom";

const Search = (props) => {

    const history = useHistory();

    return (
        <div className={'search-container'}>
            <form>
                <input type="text" placeholder={'Введите запрос'}/>
                <button type={'button'}
                        onClick={() => {
                            const input = document.querySelector("input");
                            history.push("/search");
                            props.findDataByMultiSearch(input.value);
                        }}>
                    <FontAwesomeIcon icon={'search'} />
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    findDataByMultiSearch: bindActionCreators(findDataByMultiSearch, dispatch)
});
export default connect(null, mapDispatchToProps)(Search)