import styles from './Galeria.module.css';
import Image from 'next/image';
import Galeria1 from "@/../public/galeria-1.jpg";
import Galeria2 from "@/../public/galeria-2.jpg";
import Galeria3 from "@/../public/galeria-3.jpg";
import Galeria4 from "@/../public/galeria-4.jpg";

export default function Galeria(){
    return(
        <div className={styles.image_container}>
            <Image className={styles.image} style={{width:'450px', height:'380px', objectFit: 'cover'}} src={Galeria1} alt="foto da galeria"/>
            <Image className={styles.image}  style={{width:'450px', height:'380px', objectFit: 'cover'}} src={Galeria2} alt="foto da galeria"/>
            <Image className={styles.image} style={{width:'450px', height:'380px', objectFit: 'cover'}} src={Galeria3} alt="foto da galeria"/>
            <Image className={styles.image}  style={{width:'450px', height:'380px', objectFit: 'cover'}} src={Galeria4} alt="foto da galeria"/>
        </div>
    )
}