import React from "react";

const ContentTitle = (props) => {
    return (
        <h1 className={props.type === "movie" ? "details-title yellow" : "details-title pink"}>
            {props.type === "movie" ? props.title : null}
            {props.type === "tv" ? props.name : null}
        </h1>
    )
};
export default ContentTitle;