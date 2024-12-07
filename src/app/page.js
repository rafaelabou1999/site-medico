
'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Sobre from "./components/Welcome";
import Banner from "./components/Banner";
import Title from "./components/Title";
import Card from "./components/Card";
import Inspiracoes from "./components/Inspiracoes";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Galeria from "./components/Galeria";
import cardInfo from './dados/cardInfo';
import { useState } from "react";

export default function Home() {
  const [isActive, setActive] = useState(true);
  const [isHidden, setHidden] = useState(styles.displayHidden)
  const [isDisplayed, setIsDisplayed] = useState(styles.display);

 
  function displayCard(){
    setActive(!isActive);
    if(isActive){
      setIsDisplayed(styles.displayHidden)
      setHidden(styles.display)
    } else{
      setIsDisplayed(styles.display)
      setHidden(styles.displayHidden)
    }
  }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <Header/>
          <div className={styles.main}>
            <div className={styles.sobre}>
              <Welcome/>
            </div>
            <div>
              <Title title="Galeria" desc="Venha Conhecer"/>
              <Galeria/>
            </div>
            <div className={styles.all_cards}>
              <Title title="Informações e Inspirações" desc="Saiba mais"/>
              <div className={isDisplayed}>
              {cardInfo && cardInfo.length > 0 ? (
                cardInfo.filter((card) => card.id <= 3).map((card) => (
                  <Card key={card.id} title={card.title}  imagem={card.imagem} />
                 
                )
                )
              ) : (
                <p>No cards available</p>
              )
              
              }
              </div>
              <div className={isHidden}>
                {cardInfo && cardInfo.length > 0 ? (
                  cardInfo.filter((card) => card.id > 3).map((card) => (
                    <Card key={card.id} title={card.title}  imagem={card.imagem} />
                  
                  )
                  )
                ) : (
                  <p>No cards available</p>
                )
              
              }
              </div>
              <div className={styles.card_btn_container}>
                <button className={styles.card_btn} onClick={displayCard}>1</button>
                <button className={styles.card_btn} onClick={displayCard}>2</button>
              </div>
           
            </div>
          </div>
        </div>
    
    </div>
   
  );
}
