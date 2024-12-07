
import styles from "./Title.module.css"
export default function Title(props){
    return(
        <div className={styles.container}>
            <h2 className={styles.title_container}>{props.title}</h2>
            <h4 className={styles.desc_container}>{props.desc}</h4>
            <div className={styles.line_container}></div>
        </div>
    )
}