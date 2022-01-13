import styled from 'styled-components';

// import because i keep clicking here anyways haha
// ./styles/global.styled.js

const Title = styled.h1`
  font-size: 1.5em;
  color: black;
`;

const Wrapper = styled.section`
  display: flex;
  background: papayawhip;
`;

const Break = styled.section`
  flex-basis: 100%;
  height: 0;
`
const Container = styled.section`
  display:flex;
  justify-content: center;
`
const Space = styled.section`
  flex-direction: column;
  height: 50px;
  marging: 20px;

`

export { Wrapper, Title, Break, Container, Space}