import React from 'react';
import './title-container.style.css'

const TitleContainer = (props) => {
    return (
        <div className="title-container">
            <span>
                {props.categoryName}
            </span>
            <span>
                {props.complement}
            </span>

        </div>
    );
}
export default TitleContainer;