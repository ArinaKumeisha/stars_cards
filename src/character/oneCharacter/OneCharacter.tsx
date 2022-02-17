import React from 'react';
import {MainType} from "../../characters/Characters";

type PropsType = {
    character: MainType
    data: MainType[]

}
const OneCharacter = (props: PropsType) => {
    const {character,} = props;
    const {name, gender, height, mass} = character;

    return (
        <div >
            <h2>gender: {name}</h2>
            <div>gender: {gender}</div>
            <div>height: {height}</div>
            <div>mass: {mass}</div>


        </div>
    );
};

export default OneCharacter;