import React from "react";

const ContentDuration = (props) => {
    return (
        <div className={"details-description-item"}>
            <p className={"item-name"}>Время:</p>
            <p className={"item-text"}>
                <span>{props.runtime} минут(ы)</span>
            </p>
        </div>
    )
};
export default ContentDuration;