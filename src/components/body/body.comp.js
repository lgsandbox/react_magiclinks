import ForumFactory from '../buttons/smartForumFactory.button.js';
import ContentView from '../content/content.comp.js'
import { Space } from '../../styles/global.styled.js';

function Body() {
    return (   
            <>
                <ForumFactory/>
                <Space/>
                <ContentView/>
            </>
    )
}

export default Body;