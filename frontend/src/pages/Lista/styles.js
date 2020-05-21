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
    border: 1px ;
    border-radius: 4px;
    color: #FFF;  
`;
export const Section  = styled.div `
    display: flex;
    max-width: 1000px;
    padding: 0 20px;
    margin: 0px auto;
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    background: #433FBF;
    list-style: none;

`;

export const Li = styled.div`
    margin: 20px 5px;
    background: #FFF;
    padding: 20px;
    position: relative;
    border-radius: 8px;
    width:250px;
    height: 300px;
    
`;

export const Imag = styled.img`
    background: #EDEDED;
    border-radius: 8px;
    width:200px;
    height: 190px;    
    margin-left: 25px;
`;

export const Numero = styled.h1`
    margin-top: 7px;
    margin-left: 10px;
    font-size: 15px;
    color: #565656;
`;

export const Nome = styled(Numero)`
    font-size: 24px;
    margin-top: 15px;
    color: #353535;
`;

export const Detalhe = styled.button`
    padding: 7px 10px;
    margin-left: 65%;
    background: #E1AC0E;
    border: 1px ;
    border-radius: 4px;
    color: #FFF;  
`;









