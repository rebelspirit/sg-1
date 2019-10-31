import React, {useState, useEffect} from 'react';
import './index.css';
import axios from "axios";

const ActorsStuff = (props) => {
    const [actors, setActors] = useState({});

    useEffect(() => {
        const api = '37381515063aba22627eb415da0adfe3';
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=${api}&language=ru-UA`)
            .then(response => {
                const results = response.data;
                setActors(results.cast.slice(0, 9));
            })
    }, []);
    return (
        <div className={"actors-stuff-container"}>
            <h6>Актерский состав:</h6>
            <div className={"actors-stuff"}>
                {Object.values(actors).map((actor, key) =>
                    actor.profile_path ? <div className={"actor-stuff-item"} key={key}>
                        {console.log(actor)}
                        <img src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`} alt="actor"/>
                        <p>{actor.name}</p>
                    </div> : null
                )}
            </div>
        </div>
    )
};
export default ActorsStuff;