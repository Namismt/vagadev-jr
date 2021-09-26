import React from 'react'
import styled from 'styled-components'
import './Produto.css'
import Swal from 'sweetalert2'

const Container = styled.div`
    flex:1;
    margin: 30px;
    width: 350px;
    height: 602px;
    top:-50px;
    left:-100px;
    border-radius: 2px;
    border-color: #ccd5dd;
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
    position:relative;
`;
const ContainerImagem = styled.div`
    width: 350px;
    height: 363px;
    align-items: center;
`;
const Imagem = styled.img`
    position:absolute;
    height: 70%;
`;
const Info = styled.div`
    width: 350px;
    height: 185px;
    top: 95px;
    background-color: #F5F5F5;
    border-radius: 0px 0px 10px 10px;
    position: relative;
`;
const Titulo = styled.p`
    font-size: 14px;
    left:20px;
    top:20px;
    color:#084154;
    position: absolute;
    justify-content: center;

`;
const Preco = styled.h2`
    top:65px;
    left:20px;
    color:#084154;
    position: absolute;
`;
const Comprar = styled.button`
    top: -90px;
`;
const Linha = styled.img`
    top: 455px;
    position: absolute;
`;
const Mario = styled.img`
    position: absolute;
    height: 50%;
    width: 50%;
    top:300px;
    right: 120px;
`;
const Fechar = styled.img`
    position: absolute;
    top:10px;
    right: 10px;
`;
const CompradoContainer = styled.div`
    position: absolute;
    border: none;
    display:flex;
    top:100px;
    right: 60px;
`;
const PedidoTitulo = styled.h1`
    margin-top: 150px;
    margin-left: 0px;
    position: absolute;
 
`;
const Sair = styled.button`
    height: 37px;
    width: 37px;
    border-radius: 50%;
    margin-left: 300px;
    margin-bottom: 2px;
    position: absolute;
    justify-content: center;
    cursor:pointer;
    background-color: transparent;
    border: none;
    
`;


const Produto = ({item}) => {

   
        function pedido(){
            Swal.fire({
                height:'500',
                width: '300',
                title:'Pedido realizado com sucesso!',
                imageUrl:'./img/image 6.png',
                imageHeight:300,
                showConfirmButton:false,
                showCancelButton:false,
                showCloseButton:true,
                closeButtonColor:'#FFFFFF',
                closeButtonBorderRadius:'50%',
                closeButtonBackGroundColor:'#DC143C',
                closeButtonText:'<img src="./img/close_btn.png"/>',

            }   
        )}

    return (
        <Container>
            <ContainerImagem>
            <Imagem src={item.img}/>
            </ContainerImagem>
            <Linha src="./img/Rectangle 27.png"/>
            <Info>
                <Titulo>{item.titulo}</Titulo>
                <Preco>{item.preco}</Preco>
                <CompradoContainer>
                <Comprar className="comprar" onClick={pedido}>
                </Comprar>
                </CompradoContainer>
                
            </Info>
        </Container>
    )
}

export default Produto
