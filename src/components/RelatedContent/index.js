import React, {useEffect} from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {getRelaitedContent} from "../../actions";
import {NavLink} from "react-router-dom";

const RelatedContent = (props) => {
    const relatedContent = useSelector((store) => store.relatedContent);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getRelaitedContent(props.type, props.id));
    }, [props.id, props.type]);

    const replaceUrlTitle = (title) => title ? title.replace(/ /g, "-").toLowerCase() : null;

    return (
        relatedContent.length ? <div className={"related-content-container"}>
            <h6>Похожий материал:</h6>
            <div className={"related-content"}>
                {Object.values(relatedContent).map((content, key) =>
                    content.poster_path ? <div className={"related-content-item"} key={key}>
                        {props.type === "movie" ? <NavLink to={`/${props.urlType}/${replaceUrlTitle(content.original_title)}/${content.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w342${content.poster_path}`} alt="poster"/>
                            <p>{content.title}</p>
                        </NavLink> : null}
                        {props.type === "tv" ? <NavLink to={`/${props.urlType}/${replaceUrlTitle(content.original_name)}/${content.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w342${content.poster_path}`} alt="poster"/>
                            <p>{content.name}</p>
                        </NavLink> : null}
                    </div> : null
                )}
            </div>
        </div> : null
    )
};
export default RelatedContent;
