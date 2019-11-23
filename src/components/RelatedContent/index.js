import React, {useState, useEffect} from 'react';
import './index.css';
import axios from "axios";

const RelatedContent = (props) => {
    const [relatedContent, setRelatedContent] = useState({});

    useEffect(() => {
        const api = '37381515063aba22627eb415da0adfe3';
        axios.get(`https://api.themoviedb.org/3/${props.type}/${props.id}/recommendations?api_key=${api}&language=ru-UA`)
            .then(response => {
                const results = response.data.results;
                setRelatedContent(results.slice(0, 6));
                console.log(results)
            })
    }, [props.id, props.type]);

    return (
        <div className={"related-content-container"}>
            {relatedContent.length ? <h6>Похожий материал:</h6> : null}
            <div className={"related-content"}>
                {Object.values(relatedContent).map((content, key) =>
                    content.poster_path ? <div className={"related-content-item"} key={key} onClick={() => props.pushToRelatedContent(content.id)}>
                        <img src={`https://image.tmdb.org/t/p/w342${content.poster_path}`} alt="poster"/>
                        <p>{props.type === "movie" ? content.title : content.name}</p>
                    </div> : null
                )}
            </div>
        </div>
    )
};
export default RelatedContent;
