
import styles from './Agendar.module.css';
import Icon from "@/../public/agendar.svg";
import Image from 'next/image';
import { useState } from 'react';
export default function Agendar(){
   
    return(
      <a className={styles.link}  href="https://api.whatsapp.com/send?phone=5521964336994" target="_blank">
      <div className={ styles.container }>
         <Image src={Icon} alt="icon" className={styles.icon}/>
          <p className={styles.container_display}>Agendar</p>
      </div>
      </a>
    )
}