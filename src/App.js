import React, {Component} from 'react';
import './App.css';
import {Route, HashRouter} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faSearch,
    faTh,
    faBell,
    faSignInAlt,
    faHome,
    faFire,
    faChevronRight,
    faFolder,
    faHistory,
    faClock,
    faThumbsUp,
    faFilm,
    faBaby,
    faTv,
    faList,
    faPizzaSlice,
    faCog,
    faFlag,
    faQuestionCircle,
    faCommentAlt,
    faChevronDown,
    faThumbsDown,
    faStar,
    faPoll
} from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import Main from './components/Main';
import Films from './components/Main/Films';
import Serials from './components/Main/Serials';
import MovieDetails from './components/Main/MovieDetails';
import SerialDetails from './components/Main/SerialDetails'
import {bindActionCreators} from "redux";
import {getMoviesFromApi, getSerialsFromApi} from "./actions";
import connect from "react-redux/es/connect/connect";
import PreLoader from "./components/PreLoader";

library.add(faSearch, faTh, faBell, faSignInAlt, faHome, faFire, faChevronRight, faFolder, faHistory, faClock, faThumbsUp, faFilm, faBaby, faTv, faList, faPizzaSlice, faCog, faFlag, faQuestionCircle, faCommentAlt, faChevronDown, faThumbsDown, faStar, faPoll);


class App extends Component {

    state = {
        loading: true
    };
    componentDidMount() {
        this.props.getMoviesFromApi();
        this.props.getSerialsFromApi();
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }


    render() {
        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <PreLoader/>
            )
        }
        return (
            <HashRouter history={this.history}>
                <div className={'app'}>
                    <Header/>
                    <div className={'container'}>
                        <LeftSideBar/>

                                <Route exact path="/" component={Main}/>
                                <Route path="/films" component={Films}/>
                                <Route exact path="/serials" component={Serials}/>
                                {/*<Route path="/cartoons" component={Cartoons}/>*/}
                                {/*<Route path="/tvshows" component={Tvshows}/>*/}
                                <Route path="/details/:id" component={MovieDetails}/>
                                <Route path="/serials/:id" component={SerialDetails}/>
                                {/*<Route path="/serial/details/:id" component={MovieDetails}/>*/}

                    </div>
                </div>
            </HashRouter>
        );
    };
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
const mapDispatchtoProps = (dispatch) => ({
    getMoviesFromApi: bindActionCreators(getMoviesFromApi, dispatch),
    getSerialsFromApi: bindActionCreators(getSerialsFromApi, dispatch),
});

export default connect(null, mapDispatchtoProps)(App);
