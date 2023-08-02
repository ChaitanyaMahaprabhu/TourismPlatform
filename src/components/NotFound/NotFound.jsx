import styles from './NotFound.module.css';
const NotFound = () => {
    return(
        <div className={styles.nfEncompass}>
            <h1 className={styles.warningText}>Page Not Found</h1>
        </div>
    );
}

export {NotFound};