import React, {useEffect, useState} from 'react';
import './index.css';
import Loader from "../Loader";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMoviesFromApi, loadMoreMovies} from "../../actions";
import InfiniteScroll from 'react-infinite-scroller';
import {NavLink} from "react-router-dom";

const TEST = () => {
    const movies = useSelector((store) => store.movies);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getMoviesFromApi(page));
    }, []);

    useEffect(() => {
        if(page > 1){dispatch(loadMoreMovies(page))}
    }, [page]);

    return (
        <main>
            <div className={'main-container'}>
                <div className={'row'}>
                    <h2 className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"film"} />
                        </div>
                        Фильмы
                    </h2>
                    <InfiniteScroll
                        pageStart={page}
                        loadMore={() => {
                            if(movies.length >= 20) {
                                return setPage(page + 1)
                            }
                        }}
                        hasMore={true}
                        loader={<Loader key={0}/>}
                        useWindow={true}
                        threshold={500}
                    >
                        <div className={'movies'}>
                            {Object.values(movies).map((movie, key) =>
                                <div key={key} className={'movies-item'}>
                                    <NavLink to={`/films/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="poster"/>
                                        <h6>{movie.title}</h6>
                                    </NavLink>
                                    <p>США, {movie.release_date.slice(0, 4)}</p>
                                </div>
                            )}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </main>
    )};

export default TEST;