import React from 'react';
import { PlusIcon } from '../../../../Common/Icons';
import styles from './timerpanel.css';

interface ITimerPanelProps{
  className?: string;
}

const padTime = (time: number) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const getTime = (time: number, type: 'min'|'sec') => {
  if (type === 'min') return padTime(Math.floor(time / 60));
  if (type === 'sec') return  padTime(time % 60);
};

export function TimerPanel({className=''}: ITimerPanelProps) {
  const [counter, setCounter] = React.useState(1500);

  React.useEffect(() => {
    let timer: any;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  return (
    <div className={`${className} ${styles.timerPanel}`}>
      <div className={styles.timer}>
        <span className={styles.time}>{getTime(counter, 'min')}</span> 
        <span className={styles.time2}>:</span>
        <span className={styles.time}>{getTime(counter, 'sec')}</span>
      </div>
      <button className={styles.plus}>
        <PlusIcon className={styles.plusIcon}/>
      </button>
      <span className={styles.taskLabel}>Задача 1 - 
        <span className={styles.task}>Сверстать сайт</span> 
      </span>
    </div>
  );
}
