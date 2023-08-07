import styles from './Title.module.css';
import { useEffect } from 'react';
const Title = (props) => {
    useEffect(() => {console.log(props.agent)});
    return(
        <div className={styles.titleEncompass}>
            <h1 className={styles.heading}>Hello {props.name} 👋</h1>
            <h3 className={styles.subHeading}>Organization - {props.org}</h3>
        </div>
    );
}

export {Title};