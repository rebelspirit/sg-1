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

    const replaceUrlTitle = (title) => title ? title.replace(/ /g, "-").toLowerCase() : null;

    return (
        <main>
            <div className={'main-container'}>
                {popularMovies.length ? <div className={'row'}>
                    <NavLink to={"/films"} className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"film"} />
                        </div>
                        Фильмы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(popularMovies).slice(0, 12).map((movie, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/films/${replaceUrlTitle(movie.original_title)}/${movie.id}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster"/>
                                    <h6>{movie.title}</h6>
                                </NavLink>
                                <p>США, {movie.release_date.slice(0, 4)}</p>
                            </div>
                        )}
                    </div>
                </div> : null}
                {popularSerials.length ? <div className={'row'}>
                    <NavLink to={"/serials"} className={'movie-type pink'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"tv"} />
                        </div>
                        Сериалы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(popularSerials).slice(0, 12).map((serial, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/serials/${replaceUrlTitle(serial.original_name)}/${serial.id}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w342${serial.poster_path}`} alt="poster"/>
                                    <h6>{serial.name}</h6>
                                </NavLink>
                                <p>{serial.origin_country}, {serial.first_air_date.slice(0, 4)}</p>
                            </div>
                        )}
                    </div>
                </div> : null}
                {cartoons.length ? <div className={'row'}>
                    <NavLink to={"/films/cartoons"} className={'movie-type green'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"baby"} />
                        </div>
                        Мультфильмы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(cartoons).slice(0, 12).map((cartoons, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/cartoons/${replaceUrlTitle(cartoons.original_title)}/${cartoons.id}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w342${cartoons.poster_path}`} alt="poster"/>
                                    <h6>{cartoons.title}</h6>
                                </NavLink>
                                <p>США, {cartoons.release_date.slice(0, 4)}</p>
                            </div>
                        )}
                    </div>
                </div> : null}
                {tvShows.length ? <div className={'row'}>
                    <NavLink to={"/serials/cartoons"} className={'movie-type blue'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"video"} />
                        </div>
                        Мультсериалы
                    </NavLink>
                    <div className={'movies movies-mobile-mainpage'}>
                        {Object.values(tvShows).slice(0, 12).map((multiSerials, key) =>
                            <div key={key} className={'movies-item'}>
                                <NavLink to={`/multi-serials/${replaceUrlTitle(multiSerials.original_name)}/${multiSerials.id}`}>
                                    <img className={'waves-image'} src={`https://image.tmdb.org/t/p/w342${multiSerials.poster_path}`} alt="poster"/>
                                    <h6>{multiSerials.name}</h6>
                                </NavLink>
                                <p>США, {multiSerials.first_air_date.slice(0, 4)}</p>
                            </div>
                        )}
                    </div>
                </div> : null}
            </div>
        </main>
    )
};

export default Main;
