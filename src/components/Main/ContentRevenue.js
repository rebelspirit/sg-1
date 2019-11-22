import React from "react";

const ContentRevenue = (props) => {
    return (
        props.type === "movie" ? <div className={"details-description-item"}>
            <p className={"item-name"}>Сбор:</p>
            <p className={"item-text"}>{props.revenue} $</p>
        </div> : null
    )
};
export default ContentRevenue;