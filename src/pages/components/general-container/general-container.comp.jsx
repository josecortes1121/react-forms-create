import React from 'react';
import ObjectsContainer from '../objects-container/objects-container.comp';
import ObjectsContainer2 from '../objects-container2/objects-container2.comp';

import './general-container.style.css';

const GeneralContainer = (props) => {
    return (
        <div className="general-container">
            <div >
                {
                    props.cont === 1
                    ?  <ObjectsContainer list={props.list} setList={props.setList} />
                    :  <ObjectsContainer2 list={props.list} setList={props.setList} />
                }
               
            </div>
        </div>

    );
}
export default GeneralContainer;