import React from "react";

const ContentLang = (props) => {
    return (
        <div className={"details-description-item"}>
            <p className={"item-name"}>Язык оригинала:</p>
            <p className={"item-text"}>{props.original_language}</p>
        </div>
    )
};
export default ContentLang;