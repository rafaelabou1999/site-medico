import Link from "next/link";
import styles from './Blog.module.css';
import Arrow from "@/../public/arrow-post.svg";
import Image from "next/image";
import Filosofia from "@/../public/card-filosofia.jpg";
import Renata from "@/../public/renata.jpeg"
export default function Blog(){
    return(
        <div className={styles.container}>
            <Link href="/" style={{ textDecoration: 'none' }}>
            <button className={styles.back_btn}>
            <Image src={Arrow} alt="Voltar"/>
            Voltar
            </button>
            </Link>
           
           <div className={styles.container_image}>
            <Image className={styles.imagem} src={Filosofia} alt="foto"/>
           <Image className={styles.perfil_renata} src={Renata} alt="foto da renata"/>
           </div>
           <div className={styles.container_text}>
                <h2 className={styles.text_title}>Medicina e Filosofia</h2>
                
                
                <p className={styles.text_paragraph}>“Se uma pessoa volta a própria atenção para suas escolhas racionais e suas ações, ela conseguirá conquistar a possibilidade de prevenção. Se, no entanto, ela desviar sua atenção para as coisas que não estão sob seu poder, ficará agitada, temerosa e instável." Epicteto</p>
                <p className={styles.text_paragraph}>Epicteto, filósofo grego estoico, viveu há quase dois mil anos, mas suas reflexões são atemporais.</p>
                <p className={styles.text_paragraph}>Ele nos ensina que focar em nossas escolhas racionais e ações é crucial para a prevenção e o enfrentamento de problemas, inclusive na saúde. Se concentramos nossa atenção em hábitos saudáveis, como alimentação equilibrada, exercícios físicos e visitas regulares ao médico, podemos prevenir muitas doenças. Por outro lado, se nos preocupamos excessivamente com fatores fora do nosso controle, podemos nos tornar ansiosos e estressados, prejudicando nossa saúde mental e física.</p>
                <p className={styles.text_paragraph}>Epicteto nos inspira a ter uma postura prática e consciente, concentrando nossa energia no que podemos mudar e aceitando o que não podemos. Escolher melhor e aceitar com sabedoria os desafios da vida pode tornar nossa jornada bem mais leve e feliz, pense nisso!</p>
         
            <h5 className={styles.data}>24 Nov 2024</h5>
           </div>
        </div>
    )
}