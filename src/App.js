import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faBaby,
	faBell,
	faChevronDown,
	faChevronRight,
	faClock,
	faCog,
	faCommentAlt,
	faFilm,
	faFire,
	faFlag,
	faFolder,
	faHistory,
	faHome,
	faList,
	faPizzaSlice,
	faPoll,
	faQuestionCircle,
	faSearch,
	faSignInAlt,
	faStar,
	faTh,
	faThumbsDown,
	faThumbsUp,
	faTv
} from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar'
import Main from './components/Main'
import Films from './components/Main/Films'
import Serials from './components/Main/Serials'
import MovieDetails from './components/Main/MovieDetails'
import SerialDetails from './components/Main/SerialDetails'
import PageNotFound from './components/PageNotFound'
import MultiSearch from './components/Main/MultiSearch'
import TEST from './components/Main/TEST'
import { useDispatch } from 'react-redux'
import { getCartoons, getPopularMovies, getPopularSerials, getTvShows } from './actions'
import ScrollToTop from './components/ScrollToTop'
import WindowFreeze from "./components/WindowFreeze";
import ContentDetails from "./components/Main/ContentDetails";


library.add(faSearch, faTh, faBell, faSignInAlt, faHome, faFire, faChevronRight, faFolder, faHistory, faClock, faThumbsUp, faFilm, faBaby, faTv, faList, faPizzaSlice, faCog, faFlag, faQuestionCircle, faCommentAlt, faChevronDown, faThumbsDown, faStar, faPoll);


const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPopularMovies());
		dispatch(getPopularSerials());
		dispatch(getCartoons());
		dispatch(getTvShows());
	}, []);

	return (
		<Router>
			<ScrollToTop />
			<div className={'app'}>
				<Header />
				<div className={'container'}>
					<LeftSideBar />
					<WindowFreeze/>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/films" component={Films} />
						<Route exact path="/serials" component={Serials} />
						<Route exact path="/test" component={TEST} />
						<Route exact path="/cartoons" component={PageNotFound}/>
						<Route exact path="/tvshows" component={PageNotFound}/>
						<Route path="/:media_type/:id/" component={ContentDetails} />
						{/*<Route path="/serials/:id" component={SerialDetails} />*/}
						{/*<Route path="/cartoons/:id" component={MovieDetails}/>*/}
						{/*<Route path="/tvshows/:id" component={SerialDetails}/>*/}
						<Route path="/search/" component={MultiSearch} />
						<Route path="*" component={PageNotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	)
};

export default App
