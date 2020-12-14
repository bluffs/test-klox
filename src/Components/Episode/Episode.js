import React from 'react'

const Episode = (props) => {
    return (
        <div onClick={() => props.clicked(props.episode)} >
            {props.episode} - {props.name}
        </div>
    )
}

export default Episode
