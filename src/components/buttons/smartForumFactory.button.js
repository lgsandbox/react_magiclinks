import React from 'react'
import { Container } from '../../styles/global.styled.js';
import { useState } from 'react';
import { getName, setForum } from '../../abi/smartForum.abi.js';

// buttons linked to input

export default function ForumFactory() {
    const [name, setForumName] = useState('');
    console.log(name);
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


