import React, { useState } from 'react';
import logo from './logo.svg';
import GeneralContainer from './components/general-container/general-container.comp';
import './reactv.style.css';

const ReacTV = () => {

    let cupList = [

        {
            id: "c1",
            name: 'National Cup',
            trophies: [
                {
                    id: "c1p1",
                    name: "Bayer",
                    country: "GER",
                    amount: 15,
                }
            ]
        },
        {
            id: "c2",
            name: ' National league',
            trophies: [
                {
                    id: "c2p1",
                    name: "Barcelona ",
                    country: "ESP",
                    amount: 15,
                }
            ]
        },
        {
            id: "c3",
            name: ' International cup',

            trophies: [
                {
                    id: "c3p1",
                    name: "Nacional  ",
                    country: "URU",
                    amount: 15,
                }
            ]
        }


    ];

    let playerList = [
        {
            id: "10",
            name: "Lionel Messi",
            nationality: "ARG",
            numberGoals: 600
        }
    ]

    const [cups, setCups] = useState(cupList)
    const [players, setPlayers] = useState(playerList);


    return (
        <div>
            <div >
                <div className="reactv-container">
                    ReactCUP
                </div>
                <div className="reactv-container">
                    <p>"Thropy history in </p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p> the world socccer"</p>
                </div>

            </div>
            <div>
                <GeneralContainer list={cups} setList={setCups} cont={1} />
            </div>
            <div>
                <GeneralContainer list={players} setList={setPlayers} cont={2} />
            </div>
        </div>
    );
}
export default ReacTV;