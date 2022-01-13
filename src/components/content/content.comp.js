import styled from "styled-components";
import { Container, Title } from '../../styles/global.styled.js';

const ContentStyle = styled.div`
    display: flex;
    align-items: center;
    background: white;
    color: black;
    padding: 10px;
    border: solid black 1px;
    width: 50%;
    
`

export default function ContentView() {
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
