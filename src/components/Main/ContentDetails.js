import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector} from "react-redux";
import {getContentDetails, clearStoreContentDetails} from '../../actions';
import {ShareIcons} from "../ShareIcons";
import ActorsStuff from "../ActorsStuff";
import RelatedContent from "../RelatedContent";
import video404 from "../../assets/img/404_video.png"

const initialState = (props) => {
    if(props.match.params.type === "films" || props.match.params.type === "cartoons") {return "movie"}
    if(props.match.params.type === "serials" || props.match.params.type === "multi-serials") {return "tv"}
};

const ContentDetails = (props) => {
    const ContentDetails = useSelector((store) => store.ContentDetails);
    const dispatch = useDispatch();
    const [type] = useState(() => initialState(props));
    const [id] = useState(props.match.params.id);

    useEffect(() => {
        dispatch(getContentDetails(type, id));

        return () => dispatch(clearStoreContentDetails());
    }, [id, type]);

    return ContentDetails.hasOwnProperty('backdrop_path') ? (
        <main>
            {ContentDetails.backdrop_path && <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${ContentDetails.backdrop_path})` }} className={"details-background"}/>}
            <div className={'main-container'}>
                {type === "movie" ? <h1 className={"details-title yellow"}>{ContentDetails.title}</h1> : null}
                {type === "tv" ? <h1 className={"details-title pink"}>{ContentDetails.name}</h1> : null}
                {type === "movie" ? <h4 className={"details-original-title"}>{ContentDetails.original_title}</h4> : null}
                {type === "tv" ? <h4 className={"details-original-title"}>{ContentDetails.original_name}</h4> : null}
                <div className={"details-container"}>
                    <section className={"details-left-container"}>
                        <img src={`https://image.tmdb.org/t/p/w1280${ContentDetails.poster_path}`} alt="poster"/>
                        <div className={"details-like-container"}>
                            <div className={"like"}>
                                <FontAwesomeIcon icon={"thumbs-up"} />
                                Понравилось
                            </div>
                            <div className={"dislike"}>
                                <FontAwesomeIcon icon={"thumbs-down"} />
                                Не понравилось
                            </div>
                        </div>
                        <div className={"details-rating-container"}>
                            <h6>Рейтинг:</h6>
                            <div className={"popularity"}>
                                <FontAwesomeIcon icon={"star"} />
                                {ContentDetails.popularity}
                            </div>
                            <div className={"vote-average"}>
                                <FontAwesomeIcon icon={"poll"} />
                                {ContentDetails.vote_average}
                            </div>
                        </div>
                        <div className={"details-description-container"}>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Год:</p>
                                <p className={"item-text"}>{ContentDetails.release_date}</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Страна:</p>
                                <p className={"item-text"}>США, Великобритания</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Жанр:</p>
                                <p className={"item-text"}>Драма, Военный</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Язык оригинала:</p>
                                <p className={"item-text"}>{ContentDetails.original_language}</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Качество:</p>
                                <p className={"item-text"}>HD 720</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Время:</p>
                                <p className={"item-text"}>{ContentDetails.runtime} минут(ы)</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Возраст:</p>
                                <p className={"item-text"}> 16+</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Бюджет:</p>
                                <p className={"item-text"}>{ContentDetails.budget} $</p>
                            </div>
                            <div className={"details-description-item"}>
                                <p className={"item-name"}>Сбор:</p>
                                <p className={"item-text"}>{ContentDetails.revenue} $</p>
                            </div>
                        </div>
                    </section>
                    <section className={"details-right-container"}>
                        <iframe title={"movie"} allowFullScreen scrolling={"no"} src={ContentDetails.iframe_src ? ContentDetails.iframe_src : video404}/>
                        <h6>Немного о фильме:</h6>
                        <p>{ContentDetails.overview}</p>
                        <ShareIcons url={props.match.url} title={ContentDetails.title}/>
                        <RelatedContent id={id} type={type}/>
                        <ActorsStuff id={id} type={type}/>
                    </section>
                </div>
            </div>
        </main>
    ) : null
};

export default ContentDetails
