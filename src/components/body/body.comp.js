import ForumFactory from '../buttons/smartForumFactory.button.js';
import ContentView from './content.comp.js'
import { Space, Container, Wrapper } from '../../styles/global.styled.js';

function Body() {
    return (
        
        <>
        <ForumFactory></ForumFactory>
        <Container>
        <Space/>
        </Container>
        <ContentView></ContentView>
        </>



    )
}

export default Body;