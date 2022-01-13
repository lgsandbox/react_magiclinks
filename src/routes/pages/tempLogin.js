import React from 'react'
import styled from 'styled-components';
import { Container } from '../../styles/global.styled.js'
import { Link } from "react-router-dom";

function Temp() {
    return (
        <div>
            <Container>Login Here</Container>

            <Link to="/">Return home</Link>
        </div>
    )
}

export default Temp
