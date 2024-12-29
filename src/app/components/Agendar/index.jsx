
import styles from './Agendar.module.css';
import Icon from "@/../public/agendar.svg";
import Image from 'next/image';
import { useState } from 'react';
export default function Agendar(){
   
    return(
      <div className={ styles.container }>
         <Image src={Icon} alt="icon" className={styles.icon}/>
          <p className={styles.container_display}>Agendar</p>
      </div>
    )
}