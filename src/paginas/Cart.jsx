import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Header";
import { mobile } from "../responsive";
import React from 'react'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  background-color: #3EC6E0;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Produto = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  ${mobile({ flexDirection: "column" })}
`;

const ProdutoDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 330px;
  height: 350px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProdutoName = styled.span``;

const ProdutoId = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProdutoAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProdutoAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProdutoPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 35px;
  background-color:#084154;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Sua Sacola</Title>
        <Top>
          <TopButton>Continuar comprando</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Produto>
              <ProdutoDetail>
                    <Image src="./img/product-donkey-kong-country-tropical-freeze.png"/>
                <Details>
                  <ProdutoName>
                    <b>Produto:</b> Donkey Kong - Country Tropical Freeze
                  </ProdutoName>
                  <ProdutoId>
                    <b>ID:</b> 93813718293
                  </ProdutoId>
                </Details>
              </ProdutoDetail>
              <PriceDetail>
                <ProdutoAmountContainer>
                  <Add />
                  <ProdutoAmount>2</ProdutoAmount>
                  <Remove />
                </ProdutoAmountContainer>
                <ProdutoPrice>R$ 400,00</ProdutoPrice>
              </PriceDetail>
            </Produto>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>PEDIDO TOTAL</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$400,00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frete</SummaryItemText>
              <SummaryItemPrice>R$10.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$410,90</SummaryItemPrice>
            </SummaryItem>
            <Button>Finalizar a compra</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;