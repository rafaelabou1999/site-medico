import styles from "./Contact.module.css";
import Map from "@/../public/map.svg";
import Phone from "@/../public/phone-icon.svg";
import Image from "next/image";
import Icon from "@/../public/agendar.svg";

export default function Contact(){
    return(
        <div className={styles.container}>
            <div className={styles.each}>
                <div className={styles.each_title}>
                <Image src={Phone} alt="icone" className={styles.icon}/>
                <h4 className={styles.each_h4}>Telefone</h4>
                </div>
               <p className={styles.text}>+55 21 2323-2323</p> 
            </div>

            <div className={styles.each}>
                <div className={styles.each_title}>
                <Image src={Map} alt="icone" className={styles.icon}/>    
                <h4 className={styles.each_h4}>Localização</h4>
                </div>
                <p className={styles.text}>Av. das Américas, 3.500 | Barra da Tijuca <br/> Ed. Toronto, Bloco 4, sala 606</p>   
            </div>
        </div>
    )
}