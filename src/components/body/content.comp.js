import styled from "styled-components";
import { Space, Container, Wrapper, Title } from '../../styles/global.styled.js';

const ContentStyle = styled.nav`
    display: flex;
    align-items: center;
 
    background: white;
    color: black;
    padding: 10px;
    border: solid black 1px;
    width: 50%;
    
`


function ContentView() {
    return (
        <>
        <Container>
            <Title>Forum List</Title>
        </Container>
        <Container>
            <ContentStyle>List Create Read Update goes here</ContentStyle>
        </Container>
        </>
    )
}

export default ContentView
