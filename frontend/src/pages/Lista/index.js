import React, {Component} from 'react';
import { Section, Header, Input, Logo, Imag, Button, Ul, Li, Numero, Nome} from './styles';


import logoImg from '../../assets/logo.jpg';
import teste from '../../assets/pokemon.png';


export default class Lista extends Component {
  render() {
    return (
        <div >
            <Header>
                <Logo src={logoImg} alt="Logo"/>
                <Input placeholder="Nome ou Número" type="text" />
                <Button as="a" href="/">Buscar</Button>
            </Header>
                <Section>
                    <Ul>
                        <Li>
                            <Imag src={teste} alt="teste"/>
                            <Numero>N°:001</Numero>
                            <Nome>Charmander</Nome>
                            
                        </Li>
                    </Ul>
            </Section>  
        </div>
    );
  }
}


