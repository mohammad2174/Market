import './homePage.styles.scss'
import { HomePageContainer } from './homePage.styles'
import Directory from '../../directory/directory.component';

const HomePage = () => {
    // throw Error;
    return (
        <HomePageContainer className='homepage'>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage