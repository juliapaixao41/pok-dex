import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams } from 'react-router-dom';
import { Section,     Logo,
         Numero,     Descricao,
         Titulo,     Habilidade,
         Peso,       Altura,
         Imag,       Div,
         Voltar      } from './styles';

import logoImg from '../../assets/logo.jpg';

export default function Detalhe () {
    const [pokemon, setPokemon] = useState([]);
    const history = useHistory();
    const {id} = useParams();

    function handleVoltar(){
        history.push('/');
    };

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}` );
            setPokemon(res.data);
        }

        fetch();
    }, []);


        return (
        <div >
            <React.Fragment>
                <header>
                    <Logo src={logoImg} alt="Logo"/>

                </header>
                <Section>
                    <div>
                        <Descricao >
                            <Voltar onClick={handleVoltar} >Voltar</Voltar>
                            <Titulo>{pokemon.name}</Titulo>
                            <Numero>N°: {pokemon.id}</Numero>
                            <Habilidade>Skills: </Habilidade>
                            <Div>
                                <Imag src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id+ ".png"} alt="pokemon"/>
                            </Div>
                            <Peso>Peso: {pokemon.weight}kg</Peso>
                            <Altura>Altura: {pokemon.height} m</Altura>
                        </Descricao>
                    </div>
                </Section>
            </React.Fragment>
        </div>
    );
}





