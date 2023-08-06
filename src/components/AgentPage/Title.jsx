import styles from './Title.module.css';
const Title = (props) => {
    return(
        <div className={styles.titleEncompass}>
            <h1 className={styles.heading}>Hello {props.name} 👋</h1>
            <h3 className={styles.subHeading}>Organization - {props.org}</h3>
        </div>
    );
}

export {Title};