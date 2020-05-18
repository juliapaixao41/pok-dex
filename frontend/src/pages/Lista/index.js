import React,  { useState, useEffect } from 'react';
import { Section, Input, Logo, Imag, Button, Li, Numero, Nome} from './styles';
import axios from 'axios';

import logoImg from '../../assets/logo.jpg';




export default function Lista () {
    const [pokemons, setPokemons] = useState([]);
    const [busca, setBusca] =  useState('');
    const [buscaResults, setBuscaResults] = useState([]);



  
    const encontrePokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/2/` )
        .then(response => {
            console.log(response)
            setPokemons(response.data);
            
        })
    }

 
    const handleChange = e => {
        setBusca(e.target.value);
    };
   useEffect(() => {
      const results = pokemons.filter(person =>
        person.includes(busca)  
        );
    encontrePokemons()

    }, []);


    return (
        <div >
            <React.Fragment>
                <header>
                    <Logo src={logoImg} alt="Logo"/>
                    
                    <Input placeholder="Nome Pokemon" type="text" 
                        value={busca}
                        onChange={handleChange}/>
                    <Button onChange={ encontrePokemons} >Buscar</Button>
                </header>
                
                <Section >
                {buscaResults.map((item, index)  => (
                    <Section > 
                    <Li key={ index }>
                        <Imag src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + item.id + ".png"} alt="pokemon"/>
                        <Numero>N°: {item}</Numero>
                        <Nome>{item}  </Nome>
                    </Li>         
                </Section>
                ))} 
                    
                </Section>
            </React.Fragment>
        </div>
    );
}




