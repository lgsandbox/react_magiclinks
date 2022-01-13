import React from 'react'
import Header from '../components/header/header.comp'
import Body from '../components/body/body.comp'
import Footer from '../components/footer/footer.comp'
import Login from '../components/login/Login'
import { Container } from '../styles/global.styled.js'
import { magic } from '../auth/magic.js';
import Profile from '../components/login/Profile'
import { useState, useEffect } from 'react'


function Home() {


    
    return (
        <div>
        <Header/>
        <Container>
        <div>Currently logged in as: {<Profile></Profile>} </div>
        </Container>
        <Login/>
        <Body/>
        <Footer/>
        </div>
    )
}

export default Home
