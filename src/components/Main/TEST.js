import React, {useState, useEffect} from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

const TEST = (props) => {
    const [openWidth] = useState({paddingLeft: "240px"});
    const [closedWidth] = useState({paddingLeft: "60px"});

    useEffect(() => {

    }, []);

    return (
        <main style={props.isToggleBurger ? openWidth : closedWidth}>
            {console.log(props)}
            <div className={'main-container'}>
                <div className={'row'}>
                    <NavLink to={"/films"} className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"film"} />
                        </div>
                        Фильмы
                    </NavLink>
                    <div className={'movies'}>
                        {Object.values(props.popularMovies).slice(0, 12).map((movie, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/films/${movie.id}`}>
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
                        {Object.values(props.popularSerials).slice(0, 12).map((serial, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/serials/${serial.id}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w1280${serial.poster_path}`} alt="poster"/>
                                    <h6>{serial.name}</h6>
                                </NavLink>
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
                        {Object.values(props.cartoons).slice(0, 12).map((cartoons, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/cartoons/${cartoons.id}`}>
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
                        {Object.values(props.tvShows).slice(0, 12).map((tvshows, key) =>
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
    )
};
const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
    popularMovies: state.popularMovies,
    popularSerials: state.popularSerials,
    cartoons: state.cartoons,
    tvShows: state.tvShows,

});

export default connect(mapStateToProps, null)(TEST);