import styles from './Submenu.module.css';
import { useState } from 'react';

export default function Submenu() {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.container} style={{ display: isClicked ? 'none' : 'block' }}>
      <ul className={styles.list}>
        <li className={styles.item} style={{ display: isClicked ? 'none' : 'block' }}>
          <a className={styles.item_link} href="#about" onClick={handleClick}>Sobre mim</a>
        </li>
        <li className={styles.item} style={{ display: isClicked ? 'none' : 'block' }}>
          <a className={styles.item_link} href="#galeria" onClick={handleClick}>Galeria</a>
        </li>
        <li className={styles.item} style={{ display: isClicked ? 'none' : 'block' }}>
          <a className={styles.item_link} href="#contact" onClick={handleClick}>Contato</a>
        </li>
        <li className={styles.item} style={{ display: isClicked ? 'none' : 'block' }}>
          <a className={styles.item_link} href="#info" onClick={handleClick}>Informações e Inspirações</a>
        </li>
      </ul>
    </div>
  );
}