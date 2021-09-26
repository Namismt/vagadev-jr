import { Facebook, Instagram, Send, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header';


const Container = styled.div`
    height: min 800px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:linear-gradient(110deg, #080415 60%, #3396aa 60%);
`;

const ContainerContato = styled.div`
    top:200px;
    left: 200px;
    align-items: center;
    color: #FFFFFF;
`;
const FaleConosco = styled.h2`
    margin-top: 50px;
    font-size: 30px;
    margin-left: 200px;
    color: #FFFFFF;
`;
const Info = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content:center;
    margin-bottom: 60px;
    padding: 30px;
`;
const Insta = styled.button`
    border-radius: 10px;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    cursor:pointer;
    color: #FFFFFF;
    background-color: #080415;
`;
const Face = styled.button`
    border-radius: 10px;
    height: 50px;
    margin-left: 10px;
    cursor:pointer;
    color: #FFFFFF;
    background-color: #080415;
`;
const Twit = styled.button`
    border-radius: 10px;
    height: 50px;
    cursor:pointer;
    color: #FFFFFF;
    background-color: #080415;
    
`;

const Contatos = styled.h1`
    margin-top: 100px;
    margin-left: 200px;
    color: #FFFFFF;
`;
const FormInput = styled.form`
    width: 200px;
    height: 400px;
    margin-left: 200px;
    justify-content: center;
    flex:1;
`;
const NomeInput = styled.input`
    width: 250px;
`;
const Nome = styled.h3`
    margin-top: 30px;
`;
const Email = styled.h3`
    margin-top: 20px;
`;
const EmailInput = styled.input`
    width:250px;
    `;
const Desc = styled.h3`
    margin-top: 20px;
    
`;
const DescInput = styled.input`
    width: 500px;
    height: 100px;
    flex:8;
`;
const Enviar = styled.button`
    margin-top: 20px;
    font-size: 17px;
    width: 110px;
    height: 35px;
    border-radius: 10px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;


const Contato = () => {
    return (
            <Container>
                <Header/>
                <ContainerContato>
                <Contatos>Empresa N1</Contatos>
                <FaleConosco>
                Aqui você pode entrar em contato conosco, estamos aqui para te ajudar!
                </FaleConosco>
                <FormInput>
                <Nome>Nome</Nome>
                <NomeInput placeholder="Insira seu nome aqui"/>
                <Email>Email</Email>
                <EmailInput placeholder="Insira seu email aqui"/>
                <Desc>Mensagem</Desc>
                <DescInput placeholder="Em que podemos te ajudar?"/>
                <Enviar>Enviar<Send/></Enviar>
                <FaleConosco/>

                </FormInput>
                <Info>
                Ou você também pode nos encontrar em nossas redes sociais:
                <Face><Facebook/></Face>
                <Insta><Instagram/></Insta>
                <Twit><Twitter/></Twit>
                </Info>
            </ContainerContato>  
                <Footer/>
            </Container> 
                     
    )
}

export default Contato