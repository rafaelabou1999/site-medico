
import Image from 'next/image';
import styles from './Banner.module.css';
import Flowers from '@/../public/flowers.png'
export default function Banner(){
    return(
        <div className={styles.container}>
            <Image className={styles.container_img} src={Flowers} alt="flores"/>
             <h2 className={styles.container_title}>Dra. Renata Bourdette</h2>   
        </div>
    )
}