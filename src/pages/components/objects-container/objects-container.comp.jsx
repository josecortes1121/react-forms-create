import React, { useState } from 'react';
import TitleContainer from '../title-container/title-container.comp';
import ShowObjects from '../show-objects/show-objects.comp';
import './objects-container.style.css';

const ObjectsContainer = (props) => {

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [amount, setAmount] = useState(0);
    const [validData, setValidData] = useState(true);

    console.log(props.list);

    const cleanForms = () => {
        setCategory('');
        setName('');
        setCountry('');
        setAmount(0);
    }

    const addProduct = (event) => {
        event.preventDefault();

        if (
            name.length <= 0 ||
            country.length <= 0 ||
            amount <= 0
        ) {
            setValidData(false);
            cleanForms();
            return null;
        } else setValidData(true);

        const newData = {
            id: Date.now().toString(),
            name,
            country,
            amount,
        };

        switch (category) {
            case 'c1':
                props.list[0].trophies.push(newData);
                break;
            case 'c2':
                props.list[1].trophies.push(newData);
                break;
            case 'c3':
                props.list[2].trophies.push(newData)
                break;
            default:
                return null;
        }
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
                                    Competition
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event) => {
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        <option value="">select</option>
                                        <option value="c1">National cup</option>
                                        <option value="c2">National league</option>
                                        <option value="c3">International Cup</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Name of the team</td>
                            </tr>
                            <tr>
                                <td><input
                                    type="text"
                                    value={name}
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
                                    value={country}
                                    onChange={(event) => {
                                        setCountry(event.target.value);
                                    }}
                                />
                                </td>
                            </tr>

                            <tr>
                                <td>Amount</td>
                            </tr>
                            <tr>
                                <td><input
                                    type="number"
                                    value={amount}
                                    onChange={(event) => {
                                        setAmount(event.target.value);
                                    }}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={addProduct}
                                    >
                                        Add team
                                    </button>
                                </td>
                            </tr>
                            {validData === false && <p className="err">Invalid data</p>}
                        </tbody>

                    </table>
                </form>
            </div>

            <div className="objects-container" >
                {props.list.map((category, index) => {
                    return (
                        <React.Fragment key={category.id}>
                            <TitleContainer categoryName={category.name} complement='Num' />
                            {category.trophies.map((trophy, indexProduct) => {
                                return (
                                    <ShowObjects
                                        key={trophy.id}
                                        item={trophy}
                                    />
                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </div>

        </div>
    );
}
export default ObjectsContainer;