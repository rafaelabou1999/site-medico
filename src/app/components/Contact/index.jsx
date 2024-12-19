import styles from "./Contact.module.css";

export default function Contact(){
    return(
        <div className={styles.container}>
            <div className={styles.each}>
                <h2  className={styles.title}>Telefone</h2>
                <p className={styles.text}>+55 21 2323-2323</p>
            </div>

            <div className={styles.each}>
                <h2 className={styles.title}>Localização</h2>
                <p className={styles.text}>Av. das Américas, 3.500 | Barra da Tijuca <br/> Ed. Toronto, Bloco 4, sala 606</p>
            </div>
           
        </div>
    )
}