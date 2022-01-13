import { Title, Wrapper, Container } from '../../styles/global.styled.js';
import Navbar from './navbar.comp.js';


export default function Header() {

  return (
    <>
      <Wrapper>
        <Navbar/>
      </Wrapper>
      <Container>
        <Title>Welcome to The Jungle:</Title>
      </Container>      
    </>   
    )}

