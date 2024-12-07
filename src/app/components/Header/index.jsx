
import styles from "./Header.module.css";
import Icon from "@/../public/agendar.svg";
import Image from "next/image";
import Logo from "@/../public/renata.jpeg"
export default function Header(){
    return (
        <header className={styles.container}>
          <div className={styles.logo_container}>
                <Image src={Logo} className={styles.logo} alt="perfil Renata"/>
            <div className={styles.container_text}>
                <h2 className={styles.logo_h2}>Dra. Renata Bourdette</h2>
                <p className={styles.logo_p}>Cardiologista</p>
                <p className={styles.logo_crm}>CRM: 604248-RJ</p>
            </div> 
          </div>
          <div className={styles.line}></div>
            <ul className={styles.container_list}>
                <li className={styles.text_li}><a className={styles.text_link} href="#">Início</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#">Contato</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#">Galeria</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#">Opiniões</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#">Informações e Inspirações</a></li>
            </ul>
        </header>
    )
}