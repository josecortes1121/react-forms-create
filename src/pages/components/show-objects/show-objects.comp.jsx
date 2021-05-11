import React from 'react';
import './show-objects.style.css'

const ShowObjects = (props) => {
    return (
        <div className="show-objects">
            <div>
                {
                    props.item.amount === 0
                        ?
                        <span className="product-without-stock">{props.item.name}</span>
                        :
                        <span>{props.item.name}</span>
                }
                ({props.item.country})
            </div>
            <div>
                {props.item.amount}
            </div>
        </div>
    );
}
export default ShowObjects;