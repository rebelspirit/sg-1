import React from "react";

const ContentEpisodes = (props) => {
    return (
        props.type === "tv" ? <div className={"details-description-item"}>
            <p className={"item-name"}>Серий:</p>
            <p className={"item-text"}>{props.number_of_episodes}</p>
        </div> : null
    )
};
export default ContentEpisodes;