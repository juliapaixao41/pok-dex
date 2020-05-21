import React,  { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import { Section, Input,
         Logo, Imag,
         Li, Numero,
         Nome,  Detalhe } from './styles';

import logoImg from '../../assets/logo.jpg';



export default function Lista () {

    const [pokemons, setPokemons] = useState([]);
    const [busca,  setBusca]  = useState('');
    const [filteredPoke, setFilteredPoke ] = useState([])
    const history = useHistory();


    const handleChange = event => {
        setBusca(event.target.value);
      };

    function handleDetalhe (id) {
        history.push(`/detalhe/${id}`);
    }

    useEffect(() => {
        async function loadPokemons() {
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=804&offset=0`);
         const data = response.data.results.map(pokemon => ({
           ...pokemon,
            }));

         setPokemons(data)
        }

        loadPokemons()
      }, [])

    useEffect(() => {
        setFilteredPoke( pokemons.filter( pokemon => {
            return pokemon.name.toLowerCase().includes( busca.toLowerCase() )
         })
        )

    }, [busca, pokemons]);

    return  (
        <Fragment>
            <header>
                <Logo src={logoImg} alt="Logo"/>
                <Input placeholder="Search" type="text" value={busca} onChange={handleChange}/>
            </header>
                <Section >
                    {filteredPoke.map((pokemon, index ) => (
                        <Section key={ index }>
                            <Li >
                                <Imag src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} alt="pokemon"/>
                                <Numero >N°: {index + 1}</Numero>
                                <Nome>{pokemon.name}  </Nome>
                                <Detalhe  onClick={() => handleDetalhe( index + 1)} >Detalhes</Detalhe>
                            </Li>
                        </Section>
                    ))}
                </Section>
        </Fragment>
    );
}

