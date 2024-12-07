import Image from "next/image";
import SobreImg from "@/../public/welcome.jpg"
import styles from './Welcome.module.css';
import Icon from "@/../public/agendar.svg";
import Title from "../Title";
export default function Sobre(){
    return(
        <div className={styles.container}>
          
                <div>
                <h2 className={styles.title}>Seja bem-vindo!</h2>
                <h3 className={styles.name}>por Dra. Renata Bourdette</h3>
                </div>
                <p className={styles.single_paragraph}>Sou cardiologista formada pela UERJ e titulada como Especialista pela Sociedade Brasileira de Cardiologia. A medicina me pegou pelo coração e levou por uma incrível jornada de conhecimento humano e científico. Longa jornada, muitos aprendizados!
                </p>
                <p className={styles.second_paragraph}>Minha proposta é transformar conhecimento em ferramenta de promoção de saúde e bem estar através da prevenção, identificação e tratamento das doenças cardiovasculares, com foco nas necessidades de cada paciente.</p>

                <div className={styles.container_agende}>
                <Image src={Icon} alt="icon"/>
             <button className={styles.container_button}> Agendar consulta</button>


            </div>
        </div>
    )
}