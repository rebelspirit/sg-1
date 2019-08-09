import React from 'react';
import {connect} from "react-redux";
import {changeTodoColor, setActiveStatus} from "../../actions";
import {bindActionCreators} from "redux";

class Burger extends React.Component {

    render() {
        return (
            <div className={this.props.isToggleBurger ? 'burger open' : 'burger'}
                 onClick={() => {
                     this.props.onToggleBurger();
                 }}>
                <button/>
            </div>
        )
    };
};

const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
});

const mapDispatchToProps = (dispatch) => ({
    onToggleBurger: bindActionCreators(setActiveStatus, dispatch),
    // onChangeTodoColor: bindActionCreators(changeTodoColor, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Burger);