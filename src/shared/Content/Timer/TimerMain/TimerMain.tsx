import React from 'react';
import { BtnPanel } from './BtnPanel';
import styles from './timermain.css';
import { TimerPanel } from './TimerPanel';

interface ITimerMainProps{
  className?: string;
}

export function TimerMain({className=''}: ITimerMainProps) {
  return (
    <main className={`${className} ${styles.timerMain}`}>
      <TimerPanel />
      <BtnPanel className={styles.btnPanel} />
    </main>
  );
}
