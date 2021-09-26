import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
  margin-top: 50px;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 93%;
  width: 92%;
  flex: 1;
  align-items: center;
  display:flex
`;

const Image = styled.img`
  height: 100%;
  position:absolute
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position: relative;
  justify-content:center;
  
`;

const Titulo = styled.h2`
  font-size: 45px;
  color: white;
  align-items: left;
  position: absolute;
  top: -100px;
  left: 180px;
`;
const Preco = styled.h1`
  font-size: 80px;
  color:#3EC6E0;
  align-items: center;
  position: absolute;
  top: -50px;
  left: 330px;
`
const Cent = styled.h3`
  font-size: 40px;
  color:#3EC6E0;
  align-items: center;
  position: absolute;
  top: -40px;
  left: 470px;
`
const Real = styled.h1`
  font-size: 80px;
  color:#3EC6E0;
  align-items: center;
  position: absolute;
  top: -50px;
  left: 220px;
`
const Desc = styled.p`
  font-size: 17px;
  font-weight: 200;
  color: white;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 22em;
  position: absolute;
  text-align: right !important;
  left: 170px;
  display:inline-block;
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          <Slide>
            <ImgContainer>
              <Image src="./img/principal_banner_desktop.jpg"/>
            </ImgContainer>
            <InfoContainer>
            <Titulo>MORTAL KOMBAT</Titulo>
            <Real>R$</Real><Preco>299</Preco><Cent>,99</Cent>
              <Desc>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</Desc>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src="./img/principal_banner_desktop_02.jpg"/>
            </ImgContainer>
          </Slide>
        ))
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
