import styles from './TravellerTitle.module.css';
import { useEffect } from 'react';
const TravellerTitle = (props) => {
    useEffect(() => {console.log(props.agent)});
    return(
        <div className={styles.titleEncompass}>
            <h1 className={styles.heading} style = {{textTransform: "capitalize"}}>Hello {props.name} 👋</h1>
            <p className={styles.subHeading}>It's good to see you! Filter through provided tours and complete payment when ready.</p>
        </div>
    );
}

export {TravellerTitle};