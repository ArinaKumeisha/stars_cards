import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CharacterType} from "../types/types";
import {useParams} from "react-router-dom";

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
        vehicles: [],
    })

     const {id} = useParams<{id: string}>()
    const values = Object.values(data).map((el, index) => {
        return <div key={index}>{el}</div>
    })
    useEffect(() => {
        async function getCharacter() {
            const response = await axios.get<CharacterType>(`https://swapi.dev/api/people/${id}/`)
                console.log(id)
            setData(response.data)
        }
        getCharacter()
    }, [id])

    return (
        <div>
            {values}
        </div>
    );
};

export default Character;