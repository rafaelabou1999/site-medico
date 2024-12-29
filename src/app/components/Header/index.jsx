
'use client'

import styles from "./Header.module.css";
import Icon from "@/../public/agendar.svg";
import Image from "next/image";
import Logo from "@/../public/renata.jpeg"
import Burger from "@/../public/burger.svg"
import Submenu from "@/app/Submenu";
import { useState, useEffect, use } from 'react';
export default function Header(){
    const [size, setSize] = useState(0)
    const [isClicked, setClick] = useState(false)
    useEffect(() => {
        if(typeof window !== "undefined"){
            const handleSize = () => setSize(window.innerWidth);
            window.addEventListener('resize', handleSize)
            return () => {
                window.removeEventListener('resize', handleSize)
            }
        }
      
    },[])

    function handleClick(){
        setClick(!isClicked)
    }

    
    
    return (
        <header className={styles.container}>
            <div className={styles.menu_burger}>
            <div className={styles.logo_container}>
                <Image src={Logo} className={styles.logo} alt="perfil Renata"/>
            <div className={styles.container_text}>
                <h2 className={styles.logo_h2}>Dra. Renata Bourdette</h2>
                <p className={styles.logo_p}>Cardiologista</p>
                <p className={styles.logo_crm}>CRM: 604248-RJ</p>
            </div> 
            </div>
         
            <div className={size  <= 1300 ? styles.burger : styles.isBurger}>
                <Image src={Burger} alt="menu burger" className={styles.isBurger} onClick={handleClick}/>
                {size && isClicked ? <Submenu/> : ''}
            </div>
          </div>
          <div className={styles.line}></div>
            <ul className={styles.container_list}>
                <li className={styles.text_li}><a className={styles.text_link} href="#about">Sobre mim</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#galeria">Galeria</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#contact">Contato</a></li>
                <li className={styles.text_li}><a className={styles.text_link} href="#info">Informações e Inspirações</a></li>
            </ul>
    
        </header>
    )
}