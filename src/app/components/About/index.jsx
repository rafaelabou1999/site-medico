import styles from './About.module.css'
import Image from 'next/image'
import Renata from '@/../public/about.jpg'
import Medicine from '@/../public/med-symbol.svg'
import Oncology from '@/../public/oncology.svg'
import College from '@/../public/college.svg'

export default function About(){
    return(
       <div className={styles.container}>
        <Image className={styles.image} src={Renata} alt="Foto de Renata"/>
        <div className={styles.container_text}>
                <p className={styles.single_paragraph}>Sou cardiologista formada pela UERJ e titulada como Especialista pela Sociedade Brasileira de Cardiologia. A medicina me pegou pelo coração e levou por uma incrível jornada de conhecimento humano e científico. Longa jornada, muitos aprendizados!
                </p>
                <p className={styles.second_paragraph}>Minha proposta é transformar conhecimento em ferramenta de promoção de saúde e bem estar através da prevenção, identificação e tratamento das doenças cardiovasculares, com foco nas necessidades de cada paciente.</p>
                <div className={styles.formacao_container}>
                    <h4 className={styles.title_formacao}>Formação</h4>
                    <p className={styles.text_formacao}>Graduação em Medicina</p>
                    <p className={styles.text_formacao}>Residência em Cardiologia</p>
                    <p className={styles.text_formacao}>Pós-graduação em Cardioncologia</p>
                </div>
                
              
        </div>
     
       </div> 
    )
}