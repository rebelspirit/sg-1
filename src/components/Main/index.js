import React from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux'

const Main = () => {
    const popularMovies = useSelector((store) => store.popularMovies);
    const popularSerials = useSelector((store) => store.popularSerials);
    const cartoons = useSelector((store) => store.cartoons);
    const tvShows = useSelector((store) => store.tvShows);

    const replaceUrlTitle = (title) => title.replace(/ /g, "-");

    return (
        <main>
            <div className={'main-container'}>
                <div className={'row'}>
                    <NavLink to={"/films"} className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"film"} />
                        </div>
                        Фильмы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(popularMovies).slice(0, 12).map((movie, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/films/${movie.id}/${replaceUrlTitle(movie.original_title).toLowerCase()}`}>
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
                            <FontAwesomeIcon icon={"tv"} />
                        </div>
                        Сериалы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(popularSerials).slice(0, 12).map((serial, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/serials/${serial.id}/${replaceUrlTitle(serial.original_name).toLowerCase()}`}>
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
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(cartoons).slice(0, 12).map((cartoons, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/cartoons/${cartoons.id}/${replaceUrlTitle(cartoons.original_title).toLowerCase()}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w1280${cartoons.poster_path}`} alt="poster"/>
                                    <h6>{cartoons.title}</h6>
                                </NavLink>
                                <p>США, {cartoons.release_date.slice(0, 4)}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={'row'}>
                    <NavLink to={"/multi-serials"} className={'movie-type blue'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"video"} />
                        </div>
                        Мультсериалы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(tvShows).slice(0, 12).map((multiSerials, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/multi-serials/${multiSerials.id}/${replaceUrlTitle(multiSerials.original_name).toLowerCase()}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w1280${multiSerials.poster_path}`} alt="poster"/>
                                    <h6>{multiSerials.name}</h6>
                                </NavLink>
                                <p>США, {multiSerials.first_air_date.slice(0, 4)}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;
