import React, {Component} from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popularMovie: [],
            popularSerials: [],
            popularCartoons: [],
            popularTvshows: [],
            openWidth: {
                paddingLeft: "240px"
            },
            closedWidth: {
                paddingLeft: "60px"
            },
        };
    };

    componentDidMount() {
        const api = '37381515063aba22627eb415da0adfe3';
        const language = 'language=ru';
        const region = 'region=UA';
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&${language}&${region}`)

            .then(response => {
                const results = response.data.results;
                this.setState({popularMovie: results }, () => console.log(this.state.popularMovie))
            });
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&${language}&${region}`)

            .then(response => {
                const results = response.data.results;
                this.setState({popularSerials: results }, () => console.log(this.state.popularSerials))
            });
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}&${language}&${region}&sort_by=popularity.desc&include_adult=false&with_genres=16`)

            .then(response => {
                const results = response.data.results;
                this.setState({popularCartoons: results }, () => console.log(this.state.popularCartoons))
            });
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api}&${language}&${region}&sort_by=popularity.desc&with_genres=10764`)

            .then(response => {
                const results = response.data.results;
                this.setState({popularTvshows: results }, () => console.log(this.state.popularTvshows))
            });

        window.scrollTo(0, 0);
    };

    render() {
        return (
            <main style={this.props.isToggleBurger ? this.state.openWidth : this.state.closedWidth}>
                <div className={'main-container'}>
                    <div className={'row'}>
                        <NavLink to={"/films"} className={'movie-type yellow'}>
                            <div className="nav-icon">
                                <FontAwesomeIcon icon={"film"} />
                            </div>
                            Фильмы
                        </NavLink>
                        <div className={'movies'}>
                            {Object.values(this.state.popularMovie).slice(0, 12).map((movie, key) =>
                                <div key={key} className={'movies-item'}>
                                    <NavLink to={`/details/${movie.id}`}>
                                        <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="poster"/>
                                        <h6>{movie.title}</h6>
                                    </NavLink>
                                    <p>США, {movie.release_date.slice(0, 4)}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={'row'}>
                        <NavLink to={"/serials"} className={'movie-type pink'}>
                            <div className="nav-icon">
                                <FontAwesomeIcon icon={"pizza-slice"} />
                            </div>
                            Сериалы
                        </NavLink>
                        <div className={'movies'}>
                            {Object.values(this.state.popularSerials).slice(0, 12).map((serial, key) =>
                                <div key={key} className={'movies-item'}>
                                    <img onClick={() => this.serialDetails(serial.id)} src={`https://image.tmdb.org/t/p/w1280${serial.poster_path}`} alt="poster"/>
                                    <h6 onClick={() => this.serialDetails(serial.id)}>{serial.name}</h6>
                                    <p>{serial.origin_country}, {serial.first_air_date.slice(0, 4)}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={'row'}>
                        <NavLink to={"/cartoons"} className={'movie-type green'}>
                            <div className="nav-icon">
                                <FontAwesomeIcon icon={"baby"} />
                            </div>
                            Мультфильмы
                        </NavLink>
                        <div className={'movies'}>
                            {Object.values(this.state.popularCartoons).slice(0, 12).map((cartoons, key) =>
                                <div key={key} className={'movies-item'}>
                                    <NavLink to={`/details/${cartoons.id}`}>
                                        <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w1280${cartoons.poster_path}`} alt="poster"/>
                                        <h6>{cartoons.title}</h6>
                                    </NavLink>
                                    <p>США, {cartoons.release_date.slice(0, 4)}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={'row'}>
                        <NavLink to={"/tvshows"} className={'movie-type blue'}>
                            <div className="nav-icon">
                                <FontAwesomeIcon icon={"tv"} />
                            </div>
                            Передачи и шоу
                        </NavLink>
                        <div className={'movies'}>
                            {Object.values(this.state.popularTvshows).slice(0, 12).map((tvshows, key) =>
                                <div key={key} className={'movies-item'}>
                                    <NavLink to={`/details/${tvshows.id}`}>
                                        <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w1280${tvshows.poster_path}`} alt="poster"/>
                                        <h6>{tvshows.title}</h6>
                                    </NavLink>
                                    <p>США, {tvshows.first_air_date.slice(0, 4)}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        )};
}

const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger
});

export default connect(mapStateToProps, null)(Main);