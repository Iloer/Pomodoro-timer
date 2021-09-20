import React from 'react';
import { PlusIcon } from '../../../../Common/Icons';
import styles from './timerpanel.css';

interface ITimerPanelProps{
  className?: string;
}

export function TimerPanel({className=''}: ITimerPanelProps) {
  return (
    <div className={`${className} ${styles.timerPanel}`}>
      <div className={styles.timer}>
        <span className={styles.time}>25:00</span>
        <button className={styles.plus}>
          <PlusIcon className={styles.plusIcon}/>
        </button>
      </div>
      <span className={styles.taskLabel}>Задача 1 - 
        <span className={styles.task}>Сверстать сайт</span> 
      </span>
    </div>
  );
}
