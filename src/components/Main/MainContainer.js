import React,{ useState } from 'react';
import {connect} from "react-redux";

const MainContainer = (props) => {
    const openWidth = useState("240px");
    const closedWidth = useState("60px");
     return <main>

     </main>
};


const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
});

export default connect(mapStateToProps, null)(MainContainer);