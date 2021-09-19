import React from 'react';
import styles from './timermain.css';

interface ITimerMainProps{
  className?: string;
}

export function TimerMain({className=''}: ITimerMainProps) {
  return (
    <main className={`${className} ${styles.timerMain}`}>

    </main>
  );
}
