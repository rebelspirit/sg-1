import React from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux'

const Main = (props) => {

    const isToggledBurger = useSelector((store) => store.isToggleBurger);
    const popularMovies = useSelector((store) => store.popularMovies);
    const popularSerials = useSelector((store) => store.popularSerials);
    const cartoons = useSelector((store) => store.cartoons);
    const tvShows = useSelector((store) => store.tvShows);

    return (
        <main style={isToggledBurger ? {paddingLeft: "240px"} : {paddingLeft: "60px"}}>
            <div className={'main-container'}>
                <div className={'row'}>
                    <NavLink to={"/films"} className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"film"} />
                        </div>
                        Фильмы
                    </NavLink>
                    <div className={'movies'}>
                        {Object.values(popularMovies).slice(0, 12).map((movie, key) =>
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
                        {Object.values(popularSerials).slice(0, 12).map((serial, key) =>
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
                        {Object.values(cartoons).slice(0, 12).map((cartoons, key) =>
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
                        {Object.values(tvShows).slice(0, 12).map((tvshows, key) =>
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

export default Main;
