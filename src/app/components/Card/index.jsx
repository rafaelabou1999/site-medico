
import Image from "next/image"
import styles from "./Card.module.css";
import Link from "next/link";
import Filosofia from "@/../public/card-filosofia.jpg";


export default function Card(props){
    return(
        
            <Link href={{
                pathname: `/blog/${props.id}`, 
                query: {title: props.title}
            }}
                className={styles.link}>
                <div className={styles.img_btn}>
                    <Image style={{width:'100%', height: '200px', objectFit: 'cover', filter: 'saturate(90%)'}} src={props.image} alt="card imagem"/>
                </div>
                <div className={styles.text_container}>
            
                <h2 className={styles.title_container} style={{textDecoration: "none"}}>{props.title}</h2>
                </div>
                <div className={styles.additional_info}>
                        <h4 className={styles.additional_title}>Tempo de leitura: 2 min</h4>
                </div>
           </Link>

             
    )
}