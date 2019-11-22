import React from "react";

const ContentOverview = (props) => {
    return (
        props.overview ? <div className={"content-overview-container"}>
            <h6>Немного о фильме:</h6>
            <p>{props.overview}</p>
        </div> : null
    )
};
export default ContentOverview;