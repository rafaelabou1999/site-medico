import styles from "./Contact.module.css";
import Map from "@/../public/map.svg";
import Phone from "@/../public/phone-icon.svg";
import Image from "next/image";
export default function Contact(){
    return(
        <div className={styles.container}>
            <div className={styles.each}>
               <Image src={Phone} alt="icone" className={styles.icon}/>
               <p  className={styles.text}>+55 21 2323-2323</p> 
            </div>

            <div className={styles.each}>
                <Image src={Map} alt="icone" className={styles.icon}/>    
                <p className={styles.text}>Av. das Américas, 3.500 | Barra da Tijuca <br/> Ed. Toronto, Bloco 4, sala 606</p>   
            </div>
           
        </div>
    )
}