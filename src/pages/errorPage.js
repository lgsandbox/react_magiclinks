import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/header/header.comp';
import { GlobalStyle } from '../styles/global.styled';

function Error() {
    return (
        <>
        <GlobalStyle/>
        <div>
        <Header></Header>
        </div>
        <div>
            Error page 404 sorry ok
        <div>
            <Link to="/">Return home</Link>
        </div>
        </div>
        </>

        
    )
}

export default Error
