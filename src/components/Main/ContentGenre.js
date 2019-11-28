import React from "react";

const ContentCountry = (props) => {
    return (
        <div className={"details-description-item"}>
            <p className={"item-name"}>Жанр:</p>
            <p className={"item-text"}>
                {Object.values(props.genres).map((genre, key) => <span key={key} className={"touchable"}>
                    {genre.name}
                </span>)}
            </p>
        </div>
    )
};
export default ContentCountry;