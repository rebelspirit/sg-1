import React, {useEffect} from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {getActorsStuff} from "../../actions";

const ActorsStuff = (props) => {
    const actorsStuff = useSelector((store) => store.actorsStuff);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActorsStuff(props.type, props.id));
    }, [props.id, props.type]);

    return (
        actorsStuff.length ? <div className={"actors-stuff-container"}>
            <h6>Актерский состав:</h6>
            <div className={"actors-stuff"}>
                {Object.values(actorsStuff).map((actor, key) =>
                    actor.profile_path ? <div className={"actor-stuff-item"} key={key}>
                        <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt="actor"/>
                        <p>{actor.name}</p>
                    </div> : null
                )}
            </div>
        </div> : null
    )
};
export default ActorsStuff;