'use client'


import Link from "next/link";
import styles from './Blog.module.css';
import Arrow from "@/../public/arrow-post.svg";
import Image from "next/image";
import React from 'react'
import  Filosofia from  "@/../public/card-filosofia.jpg" ;
import  Checkup from  "@/../public/card-checkup.jpg" ;
import  Atero from  "@/../public/card-atero.webp" ;
import  Risco from  "@/../public/card-risco.jpg" ;
import Renata from "@/../public/renata.jpeg"
import { useRouter } from "next/navigation";
import cardInfo from "@/app/dados/cardInfo";
export default function Blog({params}){
    const {id, title} = React.use(params);
    const card = cardInfo.find((item) => item.id === parseInt(id)); 
    let image;
    if(id  === "1"){
       image = "/card-risco.jpg"
    } else if(id === "2"){
       image = "/card-atero.webp" 
    } else if(id === "3"){
       image = "/card-checkup.jpg" 
    } else if(id === "4" ){
       image = "/card-filosofia.jpg" 
    }
  
      console.log(image)
    
    return(
        <div className={styles.container}>
            <Link href="/" style={{ textDecoration: 'none' }}>
            <button className={styles.back_btn}>
            <Image src={Arrow} alt="Voltar"/>
            Voltar
            </button>
            </Link>
           
           <div className={styles.container_image}>
            <Image width={900} height={300} className={styles.imagem} src={image} alt="foto"/>
            <Image className={styles.perfil_renata} src={Renata} alt="foto da renata"/>
           </div>
           <div className={styles.container_text}>
              <h2 className={styles.text_title}>{title}</h2>   
              <div className={styles.container_text} style={{ whiteSpace: "pre-wrap" }}>{card.text}</div>   
              <h5 className={styles.data}>24 Nov 2024</h5>
           </div>
        </div>
    )
}