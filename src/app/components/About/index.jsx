import styles from './About.module.css'
import Image from 'next/image'
import Renata from '@/../public/about.jpg'
export default function About(){
    return(
       <div className={styles.container}>
        <Image className={styles.image} src={Renata} alt="Foto de Renata"/>
        
        <ul className={styles.text}>
            <li> formada pela UERJ e titulada como Especialista pela Sociedade Brasileira de Cardiologia</li>
            <li> formada pela UERJ e titulada como Especialista pela Sociedade Brasileira de Cardiologia</li>
            <li> formada pela UERJ e titulada como Especialista pela Sociedade Brasileira de Cardiologia</li>
        </ul>
       
       </div> 
    )
}