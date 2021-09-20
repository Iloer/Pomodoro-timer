import React from 'react';
import styles from './btnPanel.css';

interface IBtnPanelProps{
  className?: string;
}

export function BtnPanel({className=''}: IBtnPanelProps) {
  return (
    <footer className={`${className} ${styles.btnPanel}`}>
      <button className={styles.btnStart}>Старт</button>
      <button className={styles.btnStop}>Стоп</button>
    </footer>
  );
}
