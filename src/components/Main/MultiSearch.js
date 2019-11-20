import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const MultiSearch = () => {
    const multiSearch = useSelector((store) => store.multiSearch);

    return (
        <main>
            <div className={'main-container'}>
                <div className={'row'}>
                    <h2 className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"search"} />
                        </div>
                        {multiSearch.length ? `Найдено ${multiSearch.length} совпадений..` : `В каталоге совпадений не найдено`}
                    </h2>
                    <div className={'movies'}>
                        {Object.values(multiSearch).map((content, key) =>
                            <div key={key} className={'movies-item'}>
                                {console.log(content)}
                                <NavLink to={content.media_type === "movie" ? `/films/${content.id}` : `/serials/${content.id}`}>
                                    {content.media_type !== "person" ? <img src={`https://image.tmdb.org/t/p/w1280${content.poster_path}`} alt="poster"/> : <img src={`https://image.tmdb.org/t/p/w1280${content.profile_path}`} alt="poster"/>}
                                    <h6>{content.title ? content.title : content.name}</h6>
                                </NavLink>
                                {content.media_type === "movie" && content.release_date ? <p>США, {content.release_date.slice(0, 4)}</p> : null}
                                {content.media_type === "tv" && content.first_air_date ? <p>США, {content.first_air_date.slice(0, 4)}</p> : null}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )};

export default MultiSearch;