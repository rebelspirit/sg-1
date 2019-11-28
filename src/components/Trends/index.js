import React, {useEffect} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from "react-redux";
import {getTrendsMovies, getTrendsSerials} from '../../actions';
import {NavLink} from "react-router-dom";

const Trends = () => {
    const trendsMovies = useSelector((store) => store.trendsMovies);
    const trendsSerials = useSelector((store) => store.trendsSerials);
    const dispatch = useDispatch();

    const replaceUrlTitle = (title) => title ? title.replace(/ /g, "-").toLowerCase() : null;

    useEffect(() => {
        dispatch(getTrendsMovies());
        dispatch(getTrendsSerials());
    }, []);
    return (
        <main>
            <div className={"trends-container"}>
                <div className={"serials-container"}>
                    <h2 className={'content-type pink'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"tv"} />
                        </div>
                        По телевидению
                    </h2>
                    <div className="serials">
                        {Object.values(trendsSerials).map((serial, key) =>
                            serial.backdrop_path && serial.name ?
                                <NavLink to={`/serials/${replaceUrlTitle(serial.original_name)}/${serial.id}`}
                                         key={key} className={"serials-item"}
                                         style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780${serial.backdrop_path})`}}
                                >
                                    <div className="serials-item-description">
                                        <h6>{serial.name}</h6>
                                        <p>{serial.first_air_date ? serial.first_air_date.slice(0, 4) : null}</p>
                                    </div>
                                </NavLink> : null)}
                    </div>
                </div>
                <div className={"films-container"}>
                    <h2 className={'content-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"film"} />
                        </div>
                        В кинотеатрах
                    </h2>
                    <div className="films">
                        {Object.values(trendsMovies).map((movie, key) =>
                            movie.backdrop_path && movie.title ?
                                <NavLink to={`/films/${replaceUrlTitle(movie.original_title)}/${movie.id}`} className="films-item" key={key} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`}}>
                                    <div className="films-item-description">
                                        <h6>{movie.title}</h6>
                                        <p>{movie.release_date ? movie.release_date.slice(0, 4) : null}</p>
                                    </div>
                                </NavLink> : null)}
                    </div>
                </div>
            </div>
        </main>
    )
};
export default Trends;