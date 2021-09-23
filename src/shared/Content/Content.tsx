import React from 'react';
import styles from './content.css';
import { Tasks } from './Tasks';
import { Timer } from './Timer';

export function Content() {
  return (
    <main className={styles.contentMain}>
      <Tasks className={styles.block} /> 
      <Timer className={styles.blockTime} /> 
    </main>
  );
}
