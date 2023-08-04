import styles from './AYS.module.css';
const AYS = (props) => { 
    const message = props.message;   
    return(
        <div className = {styles.aysEncompass}>
            <div className={styles.modal}>
                <h3 className={styles.message}>{message}</h3>

                <div className={styles.buttons}>
                    <button className={styles.yes} onClick = {() => {props.setCommand(true)}}>Yes</button>
                    <button className={styles.no} onClick = {() => {props.setView(false)}}>No</button>
                </div>
            </div>
        </div>
    );
}

export {AYS};