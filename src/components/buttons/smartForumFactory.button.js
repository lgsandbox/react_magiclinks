import React from 'react'
import { Container } from '../../styles/global.styled.js';
import { useState } from 'react';
import { getName, setForum } from '../../abi/smartForum.abi.js';





function ForumFactory() {


    
    const [name, setForumName] = useState('');
    return (
        <Container>
            <button onClick={getName}>Update List </button>
            <button onClick={setForum}>Create Forum </button>

            <input onChange={e => setForumName(e.target.value)} 
            placeholder="Forum name here..." 
            /> 

        </Container>
    )
}

export default ForumFactory
