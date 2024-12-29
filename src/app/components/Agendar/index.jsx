
import styles from './Agendar.module.css';
import Icon from "@/../public/agendar.svg";
import Image from 'next/image';
import { useState } from 'react';
export default function Agendar(){
    const [isDisplayed, setDisplay] = useState(false);
    function handleHover(){
        setDisplay(!isDisplayed);
    }
    return(
      <div className={isDisplayed ? styles.container : styles.container_hidden} onMouseEnter={handleHover} onMouseLeave={handleHover}>
         <Image src={Icon} alt="icon" className={styles.icon}/>
         {isDisplayed && <p className={styles.container_display}>Agendar</p>}
      </div>
    )
}