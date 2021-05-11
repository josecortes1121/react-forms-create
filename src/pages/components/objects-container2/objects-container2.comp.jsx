import React, { useState } from 'react';
import TitleContainer from '../title-container/title-container.comp';
import ShowObjects2 from '../show-objects2/show-objects2.comp';
import './objects-container2.style.css';

const ObjectsContainer2 = (props) => {

    const [name, setName] = useState('');
    const [nationality, setNatioinality] = useState('');
    const [numberGoals, setNumberGoals] = useState(0);
    const [validData, setValidData] = useState(true);

    console.log(props.list);

    const cleanForms = () => {
        setName('');
        setNatioinality('');
        setNumberGoals(0);
    }

    const addPlayer = (event) => {
        event.preventDefault();

        if (
            name.length <= 0 ||
            nationality.length <= 0 ||
            numberGoals <= 0
        ) {
            setValidData(false);
            cleanForms();
            return null;
        } else setValidData(true);

        const newData = {
            id: Date.now().toString(),
            name,
            nationality,
            numberGoals,
        };
        props.list.push(newData);
        props.setList([...props.list]);
        cleanForms();
    }
    return (
        <div >
            <div className="products-forms">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Players
                                </td>
                            </tr>
                            <tr>
                                <td>Player's name</td>
                            </tr>
                            <tr>
                                <td><input
                                    type="text"
                                    value={name}
                                    minLength="1"
                                    maxLength="100"
                                    onChange={(event) => {
                                        setName(event.target.value);
                                    }}
                                />
                                </td>
                            </tr>

                            <tr>
                                <td>Country</td>
                            </tr>
                            <tr>
                                <td><input
                                    type="text"
                                    value={nationality}
                                    minLength="1"
                                    maxLength="100"
                                    onChange={(event) => {
                                        setNatioinality(event.target.value);
                                    }}
                                />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Number of goals</td>
                            </tr>
                            <tr>
                                <td><input
                                    type="number"
                                    min="1"
                                    max="2000"
                                    value={numberGoals}
                                    onChange={(event) => {
                                        setNumberGoals(event.target.value);
                                    }}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={addPlayer}
                                    >
                                        Add player
                                    </button>
                                </td>
                            </tr>
                            {validData === false && <p className="err">Invalid data</p>}
                        </tbody>

                    </table>
                </form>
            </div>

            <div className="objects-container" >
                <TitleContainer categoryName='Players' complement='Goals' />
                {props.list.map((player, index) => {

                    return (
                        <ShowObjects2
                            key={player.id}
                            item={player}
                        />
                    );
                })}
            </div>

        </div>
    );
}
export default ObjectsContainer2;