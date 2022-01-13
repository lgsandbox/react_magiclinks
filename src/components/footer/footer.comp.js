import styled from "styled-components";
import { Container } from '../../styles/global.styled.js';


const FooterStyle = styled.nav`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: black;
color: white;
text-align: center;
`

function Footer() {
    return (
        

        <FooterStyle>
        <Container>
        We've got fun & games 

        </Container>
        </FooterStyle>


    )
}

export default Footer;