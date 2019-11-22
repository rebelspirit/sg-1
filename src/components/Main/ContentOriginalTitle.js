import React from "react";

const ContentOriginalTitle = (props) => {
    return (
        <h4 className={"details-original-title"}>
            {props.type === "movie" ? props.original_title : null}
            {props.type === "tv" ? props.original_name : null}
        </h4>
    )
};
export default ContentOriginalTitle;