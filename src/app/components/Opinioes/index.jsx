import styles from './Opinioes.module.css'
import Image from 'next/image'
import Quotation from '@/../public/pontuation.svg'
export default function Opinioes(){
    return(
        <div className={styles.all}>
            <Image src={Quotation} alt="aspas" className={styles.image}/>
            <div className={styles.container}>
                <h4 className={styles.text}>Atendimento ótimo muito atenciosa e detalhista explicou tudo com a maior paciência uma ótima profissional</h4>
                
            </div>
            <div className={styles.container}>
                <h4 className={styles.text}>Excelente atendimento, com pontualidade e muita atenção. Diagnóstico com firmeza e segurança.</h4>
            </div>
            <div className={styles.container}>
                <h4 className={styles.text}>Atendimento maravilhoso e muito muito simpática! Amei!</h4>
            </div>
           
        </div>
    )
}