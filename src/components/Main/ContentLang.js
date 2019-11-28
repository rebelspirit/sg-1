import React from "react";

const ContentLang = (props) => {
    return (
        <div className={"details-description-item"}>
            <p className={"item-name"}>Язык оригинала:</p>
            <p className={"item-text"}>
                <span>{props.original_language}</span>
            </p>
        </div>
    )
};
export default ContentLang;