import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import { Section,     Logo,             
         Numero,     Descricao,  
         Titulo,     Habilidade, 
         Peso,       Altura,     
         Voltar      } from './styles';

import logoImg from '../../assets/logo.jpg';

export default function Detalhe () {
    const [pokemon, setPokemon] = useState([]);
    const history = useHistory();
  
    
    function handleVoltar(){
        history.push('/');
    };

   

    useEffect(() => {
        const fetch = async (id) => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1/` )
            setPokemon(res.data);
        }

        fetch();
    }, []);

    console.log(pokemon);
  


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
                            <Peso>Peso: {pokemon.weight}kg</Peso>
                            <Altura>Altura: {pokemon.height} m</Altura>
                        </Descricao> 
                    
                    </div> 
                </Section>
            </React.Fragment>
        </div>
    );
}





