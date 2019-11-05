import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
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
import {getMoviesFromApi, getSerialsFromApi, getPopularMovies, getPopularSerials, getCartoons, getTvShows} from "./actions";
import connect from "react-redux/es/connect/connect";
import PreLoader from "./components/PreLoader";
import PageNotFound from "./components/PageNotFound";
import MultiSearch from "./components/Main/MultiSearch";
import TEST from './components/Main/TEST';

library.add(faSearch, faTh, faBell, faSignInAlt, faHome, faFire, faChevronRight, faFolder, faHistory, faClock, faThumbsUp, faFilm, faBaby, faTv, faList, faPizzaSlice, faCog, faFlag, faQuestionCircle, faCommentAlt, faChevronDown, faThumbsDown, faStar, faPoll);


class App extends Component {

    componentDidMount() {
        this.props.getPopularMovies();
        this.props.getPopularSerials();
        this.props.getCartoons();
        this.props.getTvShows();
        this.props.getMoviesFromApi();
        this.props.getSerialsFromApi();
    }

    render() {
        const { isLoadingMovies, isLoadingSerials } = this.props;

        if(isLoadingMovies && isLoadingSerials) {
            return (
                <PreLoader/>
            )
        }
        return (
            <Router history={this.history}>
                <div className={'app'}>
                    <Header/>
                    <div className={'container'}>
                        <LeftSideBar/>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/films" component={Films}/>
                            <Route exact path="/serials" component={Serials}/>
                            <Route exact path="/test" component={TEST}/>
                            {/*<Route path="/cartoons" component={MovieDetails}/>*/}
                            {/*<Route path="/tvshows" component={Tvshows}/>*/}
                            <Route path="/films/:id" component={MovieDetails}/>
                            <Route path="/serials/:id" component={SerialDetails}/>
                            <Route path="/search/" component={MultiSearch}/>
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoadingMovies: state.isLoadingMovies,
    isLoadingSerials: state.isLoadingSerials
});
const mapDispatchToProps = (dispatch) => ({
    getMoviesFromApi: bindActionCreators(getMoviesFromApi, dispatch),
    getSerialsFromApi: bindActionCreators(getSerialsFromApi, dispatch),
    getPopularMovies: bindActionCreators(getPopularMovies, dispatch),
    getPopularSerials: bindActionCreators(getPopularSerials, dispatch),
    getCartoons: bindActionCreators(getCartoons, dispatch),
    getTvShows: bindActionCreators(getTvShows, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
