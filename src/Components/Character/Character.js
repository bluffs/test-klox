import React from 'react'

const Character = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} /> - {props.name} - {props.species}
        </div>
    )
}

export default Character
