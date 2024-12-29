import styles from './Submenu.module.css'
export default function Submenu(){
    return(
        <div>
            <ul className={styles.container}>
                <li>Sobre mim</li>
                <li>Galeria</li>
                <li>Contato</li>
                <li>Informações e Inspirações</li>
            </ul>
        </div>
    )
}