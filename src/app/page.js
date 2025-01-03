'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Title from "./components/Title";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Galeria from "./components/Galeria";
import cardInfo from './dados/cardInfo';
import LeftArrow from "@/../public/left-arrow.svg";
import RightArrow from "@/../public/right-arrow.svg";

import { useState } from "react";
import About from "./components/About";
import Agendar from "./components/Agendar";

export default function Home() {
  const [isActive, setActive] = useState(true);
  const [isHidden, setHidden] = useState(styles.displayHidden);
  const [isDisplayed, setIsDisplayed] = useState(styles.display);
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = 2;
  const minPage = 1;

  function displayCard(direction) {
    handleArrow(direction);

    setActive(!isActive);
    if (isActive) {
      setIsDisplayed(styles.displayHidden);
      setHidden(styles.display);
    } else {
      setIsDisplayed(styles.display);
      setHidden(styles.displayHidden);
    }
  }

  function handleArrow(direction) {
    if (direction === 'right' && currentPage < maxPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === 'left' && currentPage > minPage) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
        <div className={styles.main}>
          <Agendar />
          <div className={styles.about} id="about">
            <Title title="Sobre mim" />
            <About />
          </div>
          <div id="galeria">
            <Title title="Galeria" />
            <Galeria />
          </div>
          <div id="contact">
            <Title title="Contato" />
            <Contact />
          </div>
          <div className={styles.all_cards} id="info">
            <Title title="Informações e Inspirações" />
            <div className={styles.card_btn_container}>
              <button
                className={styles.card_btn}
                onClick={() => displayCard('left')}
                disabled={currentPage === minPage}
              >
                <Image src={LeftArrow} alt="seta para esquerda" />
              </button>
              <button
                className={styles.card_btn}
                onClick={() => displayCard('right')}
                disabled={currentPage === maxPage}
              >
                <Image src={RightArrow} alt="seta para direita" />
              </button>
            </div>
            <div className={isDisplayed}>
              {cardInfo && cardInfo.length > 0 ? (
                cardInfo.filter((card) => card.id <= 3).map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    image={card.imagem}
                  />
                ))
              ) : (
                <p>No cards available</p>
              )}
            </div>
            <div className={isHidden}>
              {cardInfo && cardInfo.length > 0 ? (
                cardInfo.filter((card) => card.id > 3).map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    image={card.imagem}
                  />
                ))
              ) : (
                <p>No cards available</p>
              )}
            </div>
          </div>
          <footer className={styles.footer}>
            Desenvolvido por Rafaela Bourdette 2023
          </footer>
        </div>
      </div>
    </div>
  );
}
