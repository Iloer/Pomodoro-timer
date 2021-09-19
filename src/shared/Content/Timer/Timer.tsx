import React from 'react';
import styles from './timer.css';
import { TimerHeader } from './TimerHeader';
import { TimerMain } from './TimerMain';

interface ITimerProps{
  className?: string;
}

export function Timer({className = ''}: ITimerProps) {
  return (
    <div className={`${styles.timer} ${className}`}>
      <TimerHeader className={styles.header}/>
      <TimerMain/>
    </div>
  );
}
