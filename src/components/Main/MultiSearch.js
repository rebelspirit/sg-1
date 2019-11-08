import React, {useState} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const MultiSearch = (props) => {

    return (
        <main>
            <div className={'main-container'}>
                <div className={'row'}>
                    <h2 className={'movie-type yellow'}>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={"search"} />
                        </div>
                        Поиск по каталогу..
                    </h2>
                    <div className={'movies'}>
                        {Object.values(props.multiSearch).map((content, key) =>
                            <div key={key} className={'movies-item'}>
                                {console.log(content)}
                                <NavLink to={content.media_type === "movie" ? `/films/${content.id}` : `/serials/${content.id}`}>
                                    {content.media_type !== "person" ? <img src={`https://image.tmdb.org/t/p/w1280${content.poster_path}`} alt="poster"/> : <img src={`https://image.tmdb.org/t/p/w1280${content.profile_path}`} alt="poster"/>}
                                    <h6>{content.title ? content.title : content.name}</h6>
                                </NavLink>
                                {content.media_type === "movie" ? <p>США, {content.release_date.slice(0, 4)}</p> : null}
                                {content.media_type === "tv" ? <p>США, {content.first_air_date.slice(0, 4)}</p> : null}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )};

const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
    multiSearch: state.multiSearch,
});

export default connect(mapStateToProps, null)(MultiSearch);