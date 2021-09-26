import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    ${mobile({ flexDirection: "column" })}
`;
const Esquerda = styled.div`
    flex:1;
    padding: 15px;
    background-color: #084154;
    align-items:flex-end
`;
const Centro = styled.div`
    flex:1;
    padding: 15px;
    background-color: #3EC6E0;
    color:#FFFFFF;
`;
const Direita = styled.div`
    flex:1;
    background-color: #3EC6E0;
`;
const Logo = styled.img`
   margin-left: 350px;
`;
const Footer = () => {
    return (
        <Container>
            <Esquerda>
                <Logo src="./img/logo_header 1.png"/>
            </Esquerda>
            <Centro>
                Agência N1 - Todos os direitos reservados
            </Centro>
            <Direita>

            </Direita>
        </Container>
    )
}

export default Footer
