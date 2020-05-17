import styled from 'styled-components';



export const Header  = styled.header `
    display: flex;
    align-items: center;
    margin-top: 30px;
    background: #C14242;
    border-radius: 5px;
    padding: 0px 10px;

`;

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
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #433FBF;

`;

export const Ul = styled.ul`
    list-style: none;
    
`;

export const Li = styled.li`
    margin-top: 10px;
    background: #FFF;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    width:250px;
    height: 300px;
    right: 12px;
`;

export const Imag = styled.img`
    border-radius: 8px;
    width:240px;
    height: 190px;    
    left: 10%;
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











