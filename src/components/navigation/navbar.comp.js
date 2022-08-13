import styled from "styled-components";
import { Break } from '../../styles/global.styled.js';
import { Link } from "react-router-dom";

// outer element styles
const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    color: white;
    padding: 10px;
    border: solid black 1px;
    width: 100%;
    
    
`

// passing inner styles as props 
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
};

const searchStyle = {
    border: '2px solid',
    borderradius: '5px',
    height: '20px',
    width: '100%',
    padding: '2px 23px 2px 33px',
    outline: '0',
    background: '#f5f5f5',
}

export default function Navbar() {
    return (
            <NavStyle>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/error" style={linkStyle}>About</Link>
                <Break/>
                <Break/>
                <Break/>
                <Break/>
                <Break/>
                <Link to="/login" style={linkStyle}>Login</Link>
                <Link to="/signup" style={linkStyle}>Signup</Link>
            </NavStyle>
    )
}
