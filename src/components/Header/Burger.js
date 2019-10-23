import React from 'react';
import {connect} from "react-redux";
import {setActiveStatus} from "../../actions";
import {bindActionCreators} from "redux";

class Burger extends React.Component {

    render() {
        return (
            <div className={this.props.isToggleBurger ? 'burger open' : 'burger'}
                 onClick={() => {
                     console.log(this);
                     this.props.onToggleBurger();
                 }}>
                <button/>
            </div>
        )
    };
}

const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
});

const mapDispatchToProps = (dispatch) => ({
    onToggleBurger: bindActionCreators(setActiveStatus, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Burger);