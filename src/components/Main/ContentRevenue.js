import React from "react";

const ContentRevenue = (props) => {
    return (
        props.type === "movie" ? <div className={"details-description-item"}>
            <p className={"item-name"}>Сбор:</p>
            <p className={"item-text"}>
                <span>{props.revenue} $</span>
            </p>
        </div> : null
    )
};
export default ContentRevenue;