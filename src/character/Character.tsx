import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CharacterType} from "../types/types";

const Character = () => {
    const [data, setData] = useState<CharacterType>({
        birth_year: '',
        created: '',
        edited: '',
        eye_color: '',
        films: [],
        gender: '',
        hair_color: '',
        height: '',
        mass: '',
        name: '',
        homeworld: '',
        skin_color: '',
        url: '',
        species: [],
        starships: [],
        vehicles: []
    })
    const values = Object.values(data)
    useEffect(() => {
        async function getCharacter(id: string) {
            const response = await axios.get<CharacterType>(`https://swapi.dev/api/people/${id}`)
            setData(response.data)
        }

        getCharacter('3')
    }, [])

    return (
        <div>
            {values.map((el, index) => {
                return <div key={index}>{el}</div>
            })}
        </div>
    );
};

export default Character;