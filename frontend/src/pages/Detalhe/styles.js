import styled from 'styled-components';

export const Input = styled.input`
    padding: 10px 40px;
    margin-left: 50%;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    
`;

export const Logo = styled.img`
    padding: 1px 20px;
    margin: 10px;
    height: 65px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin-left: 10px;
    background: #E1AC0E;
    border: 2px solid palevioletred;
    border-radius: 4px;
    color: #FFF;
    transition: background-color 0.5s ease;
`;
export const Section  = styled.form `
    display: grid;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    margin: 0 auto;
    background: #E5D604;
    list-style: none;

`;

export const Li = styled.li`
    margin-top: 30px;
    background: #FFF;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    width:700px;
    height: 450px;
    left: 125px;
`;

export const Imag = styled.img`
    margin-top: 20px;
    border-radius: 8px;
    width:300px;
    height: 300px;    
    left: 10%;
    background: #E5E5E5;
`;

export const Numero = styled.h1`
    margin-top: 7px;
    margin-left: 10px;
    font-size: 15px;
    color: #565656;
`;

export const Nome = styled(Numero)`
    font-size: 24px;
    margin-top: 25px;
    color: #353535;
`;











