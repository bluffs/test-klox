import React from 'react'

import Character from '../Character/Character';

const ListCharacter = (props) => {

    /*const charList = [
        {
            id: 1,
            image: 'https://vignette.wikia.nocookie.net/rick-et-morty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20170726160152&path-prefix=fr',
            name: 'Jerry',
            species: 'human'
        },
        {
            id: 2,
            image: 'https://m.media-amazon.com/images/I/81FSoavs3ZL._AC_SX466_.jpg',
            name: 'BirdMan',
            species: 'Bird and a human'
        }
    ]*/


    return (
        <div>
            List char of ep {props.selected}
            {/*charList.map((char) => (
                <Character key={char.id} image={char.image} name={char.name} species={char.species} />
            ))*/}
        </div>
    )
}

export default ListCharacter
