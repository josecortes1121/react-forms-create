import React from 'react';
import './show-objects2.style.css'

const ShowObjects2 = (props) => {
    return (
        <div className="show-objects">
            <div>
                {
                    props.item.numberGoals === 0
                        ?
                        <span className="product-without-stock">{props.item.name}</span>
                        :
                        <span>{props.item.name}</span>
                }
                ({props.item.nationality})
            </div>
            <div>
                {props.item.numberGoals}
            </div>
        </div>
    );
}
export default ShowObjects2;