import React from "react";

const ContentStatus = (props) => {
    return (
        props.type === "tv" ? <div className={"details-description-item"}>
            <p className={"item-name"}>Статус:</p>
            <p className={"item-text"}>{props.in_production ? "Продолжается" : "Завершен"}</p>
        </div> : null
    )
};
export default ContentStatus;