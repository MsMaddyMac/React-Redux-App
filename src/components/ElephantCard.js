import React from 'react'

export const ElephantCard = (props) => {
    console.log(props);
    return (
        <div key={props.elephant.id}>
            <img src={props.elephant.image} alt="Elephant"></img>
            <h3>{props.elephant.name}</h3>
            <p>Species: {props.elephant.species}</p>
            <p>Gender: {props.elephant.sex}</p>
            <p>note:{props.elephant.note}</p>
        </div>
    )
}
