import React from 'react';
import StarWarsChar from './StarWarsChar';

const StarWarsList = props => {
    return (
        <div>
            {props.charList.map(char => (
                <StarWarsChar
                key={char.name}    
                charName={char.name}
                birthYear={char.birth_year}
                eyeColor={char.eye_color}
                films={char.films}
                gender={char.gender}
                hairColor={char.hair_color}
                height={char.height}
                    

                />
            ))};
        </div>
    )
}

export default StarWarsList;

