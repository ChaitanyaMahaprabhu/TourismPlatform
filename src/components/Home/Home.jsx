import styles from './Home.module.css';
import {Bold} from './Bold';
import {Reviews} from './Reviews';
import {Footer} from '../Footer/Footer';
import {Feedback} from '../Feedback/Feedback';
import { useEffect, useState } from 'react';

const Home = () => {
    const [scroll, setScroll] = useState(false);
    const [top, setTop] = useState(false);
    useEffect(() => {
        if(scroll == true){
            window.scrollTo(0, 780);
            setScroll(false);
        }

        if(top == true){
            window.scrollTo(0, 0);
            setTop(false);
        }
    }, [scroll, top]);

    return(
        <div className = {styles.home}>
            <Bold className = {styles.bold} setScroll = {setScroll}/>
            <Reviews className = {styles.reviews}/>
            <Feedback className = {styles.feedback}/>
            <Footer className = {styles.footer} setTop = {setTop}/>
        </div>
    );
}

export {Home};