import React, { useState, useEffect } from 'react';
import { Section, Input, Logo, Imag, Button, Ul, Li, Numero, Nome} from './styles';
import axios from 'axios';

import logoImg from '../../assets/logo.jpg';


export default function Detalhe () {
    const [pokedex, setPokedex] = useState([]);
    const [pokemons, setPokemons] = useState({});

    useEffect( () => {
        encontrePokemons()
    }, []);

   

    const encontrePokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/3/' )
        .then(response => {
            console.log(response.data);
            setPokemons(response.data);
        })
    }
      
    return (
        <div >
            <React.Fragment>
                <header>
                    <Logo src={logoImg} alt="Logo"/>
                    <Input placeholder="Nome Pokemon" type="text"/>
                    <Button as="a" href="/">Buscar</Button>
                </header>
           
                <Section > 
                    <Li >
                        <Imag src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemons.id + ".png"} alt="pokemon"/>
                        <Numero>N°0001</Numero>
                        <Nome>{pokemons.name}</Nome>
                    </Li>         
                </Section>
        
            </React.Fragment>
        </div>
    );

}



