import React from 'react'
import styled from 'styled-components'
import { destaqueProdutos } from '../data';
import Produto from './Produto';

const Container = styled.div`
    margin-top: 300px;
    padding: 20px;
    margin-bottom: 200px;
`;
const ContainerProduto = styled.div`
    width: 350px;
    height: 560px;
    margin: 50px;
    margin-left: 100px;
    display: flex;
    justify-content: space-between;
`;
const Destaque = styled.h1`
    margin-left: 20px;
    margin-bottom: 80px;
    color:#084154
    
`;
const DestaqueContainer = styled.div`
    display: flex;
    justify-content:flex-start;
`;
const Retangulo = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 80px;
    margin-top: 5px;
`;


const Produtos = () => {
    return (
        <Container>
        <DestaqueContainer>
        <Retangulo src="./img/Group 6.png"/>
            <Destaque>Produtos em destaque</Destaque>
        </DestaqueContainer>
            <ContainerProduto>
            {destaqueProdutos.map(item =>(
                <Produto item={item} key={item.id}/>
                ))}
            </ContainerProduto>
            
        </Container>
    )
}

export default Produtos