import styles from './Helpline.module.css';

const Helpline = () => {
    return(
        <div className={styles.helplineEncompass}>
            <div className = {styles.info}>
                <h2 className = {styles.heading}>Reach Out</h2>
                <h4 className = {styles.subheading}><a href = "mailto:chaitanya.kanini@gmail.com">chaitanya.kanini@gmail.com</a></h4>
                <h4 className = {styles.subheading}><a href = "tel:6360010830">6360010830</a></h4>
            </div>
        </div>
    );
}

export {Helpline};