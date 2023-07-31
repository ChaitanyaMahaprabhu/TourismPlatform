import styles from './Home.module.css';
import {Bold} from './Bold';
import {Reviews} from './Reviews';
import {Footer} from '../Footer/Footer';

const Home = () => {
    return(
        <div className = {styles.home}>
            <Bold className = {styles.bold} id = "bold"/>
            <Reviews className = {styles.reviews} id = "review"/>
            <Footer className = {styles.footer}/>
        </div>
    );
}

export {Home};