import React from "react";

const ContentBudget = (props) => {
    return (
        props.type === "movie" ? <div className={"details-description-item"}>
            <p className={"item-name"}>Бюджет:</p>
            <p className={"item-text"}>{props.budget} $</p>
        </div> : null
    )
};
export default ContentBudget;