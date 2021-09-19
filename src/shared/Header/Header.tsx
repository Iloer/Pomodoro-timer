import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { Statistic } from './Statistic';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo classname={styles.logo}/>
      <Statistic classname={styles.statistic}/>
    </header>
  );
}
