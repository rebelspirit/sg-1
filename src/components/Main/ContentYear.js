import React from "react";

const ContentYear = (props) => {
    return (
        props.release_date || props.first_air_date ? <div className={"details-description-item"}>
            <p className={"item-name"}>Год:</p>
            {props.type === "movie" ? <p className={"item-text"}>{props.release_date}</p> : null}
            {props.type === "tv" ? <p className={"item-text"}>{props.first_air_date}</p> : null}
        </div> : null
    )
};
export default ContentYear;