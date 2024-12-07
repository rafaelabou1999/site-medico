import styles from "./Contact.module.css";

export default function Contact(){
    return(
        <div className={styles.container}>
            <div>
                <h2  className={styles.title}>Agende sua consulta</h2>
                <p>+55 21 2323-2323</p>
            </div>

            <div>
                <h2 className={styles.title}>Localização</h2>
                <p>121 Rock Street, 21 Avenue, New York, NY</p>
            </div>
            <div>
                <h2  className={styles.title}>Horas</h2>
                <p className={styles.hour}>Seg-Se....11h</p>
            </div>
        </div>
    )
}