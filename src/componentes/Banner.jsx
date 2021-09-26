import  styled  from 'styled-components'


const Container = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    display: flex;
    position: relative;
`;
const Zelda = styled.img`
    width: 40%;
    margin-right: 10px;
    border-radius: 2px;
    position:absolute;
    top: -100px;
    left: 100px;
 `;
const Sekiro = styled.img`
    width: 40%;
    margin-left: 0px;
    border-radius: 2px;
    position:absolute;
    top: -100px;
    left: 640px;
`;
const TitleSekiro = styled.div`
    width:488px;
    height:15px;
    background-color: #3EC6E0;
    margin-left: 20px;
    border-radius: 3px;
    position:absolute;
    padding: 10px;
    top:195px;
    left:620px;
    cursor: pointer;
    justify-content: center;
`;
const TitleZelda = styled.div`
    width:488px;
    height:15px;
    padding: 10px;
    background-color: #3EC6E0;
    margin-left: 10px;
    border-radius: 3px;
    position:absolute;
    top:195px;
    left:90px;
    cursor:pointer;
    justify-content: center;
`;

const Banner = () => {
    return (
        <Container>
            <Zelda src="./img/zelda_banner.jpg"/><TitleZelda>The Legend of Zelda - Breath of Wild</TitleZelda>
            <Sekiro src="./img/sekiro_banner.jpg"/><TitleSekiro>SEKIRO - Shadows die twice</TitleSekiro>
        </Container>
    )
}

export default Banner
