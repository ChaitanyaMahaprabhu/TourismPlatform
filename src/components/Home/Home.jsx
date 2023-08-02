import styles from './Home.module.css';
import {Bold} from './Bold';
import {Reviews} from './Reviews';
import {Footer} from '../Footer/Footer';
import {Feedback} from '../Feedback/Feedback';

const Home = () => {
    return(
        <div className = {styles.home}>
            <Bold className = {styles.bold}/>
            <Reviews className = {styles.reviews}/>
            <Feedback className = {styles.feedback}/>
            <Footer className = {styles.footer}/>
        </div>
    );
}

export {Home};