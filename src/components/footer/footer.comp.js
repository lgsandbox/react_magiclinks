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

export default function Footer() {
    return (
        <FooterStyle>
            <Container>
            
            </Container>
        </FooterStyle>
    )
}

