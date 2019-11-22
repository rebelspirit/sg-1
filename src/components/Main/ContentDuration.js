import React from "react";

const ContentDuration = (props) => {
    return (
        <div className={"details-description-item"}>
            <p className={"item-name"}>Время:</p>
            <p className={"item-text"}>{props.runtime} минут(ы)</p>
        </div>
    )
};
export default ContentDuration;