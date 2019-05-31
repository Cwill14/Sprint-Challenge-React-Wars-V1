import React from 'react';
import './StarWars.css';

const StarWarsChar = props => {
    return (
        <div>
            <div className="chars">
                <h2>{props.charName}</h2>
                <ul>
                    <li><b>Birth Year:</b> {props.birthYear}</li>
                    <li><b>Eye Color:</b> {props.eyeColor}</li>
                    {/* <li><b>Films:</b> {props.films}</li> */}
                    <li><b>Gender:</b> {props.gender}</li>
                    <li><b>Hair Color:</b> {props.hairColor}</li>
                    <li><b>Height(cm):</b> {props.height}</li>
                    {/* <li><b>Homeworld:</b> {props.homeworld}</li> */}
                    <li><b>Mass(kg):</b> {props.mass}</li>
                    <li><b>Skin Color:</b> {props.skinColor}</li>
                    {/* <li><b>Species:</b> {props.species}</li>
                    <li><b>Starships:</b> {props.starships}</li>
                    <li><b>Vehicles:</b> {props.vehicles}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default StarWarsChar;

// 