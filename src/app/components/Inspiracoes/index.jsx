import Image from "next/image";
import Filosofia from "@/../public/card-filosofia.jpg"
import styles from './Inspiracoes.module.css'
export default function Inspiracoes(props){
   

    return (
        <div className={styles.container}>
           
           <div>
            <Image src={Filosofia} className={styles.container_img} alt="blog imagem"/>
              <div>
                <p >10 Fev 2023 • 2 min de leitura</p>
               </div>
            <div>
             <h2>Medicina e Filosofia</h2> 
               
                <p className={styles.container_paragraph}>“Se uma pessoa volta a própria atenção para suas escolhas racionais e suas ações, ela conseguirá conquistar a possibilidade de prevenção. - Epicteto</p>
               
               <div>
               </div>        
            </div>

           
        </div>
           <div>
            <Image src={Filosofia} className={styles.container_img} alt="blog imagem"/>
              <div>
                <p >10 Fev 2023 • 2 min de leitura</p>
               </div>
            <div>
             <h2>Medicina e Filosofia</h2> 
               
                <p className={styles.container_paragraph}>“Se uma pessoa volta a própria atenção para suas escolhas racionais e suas ações, ela conseguirá conquistar a possibilidade de prevenção. - Epicteto</p>
               
               <div>
               </div>        
            </div>

           
        </div>
           <div>
            <Image src={Filosofia} className={styles.container_img} alt="blog imagem"/>
              <div>
                <p >10 Fev 2023 • 2 min de leitura</p>
               </div>
            <div>
             <h2>Medicina e Filosofia</h2> 
               
                <p className={styles.container_paragraph}>“Se uma pessoa volta a própria atenção para suas escolhas racionais e suas ações, ela conseguirá conquistar a possibilidade de prevenção. - Epicteto</p>
               
               <div>
               </div>        
            </div>

           
        </div>
    </div>
        )
}
