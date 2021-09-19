import React from 'react';
import { StatisticIcon } from '../../Common/Icons';
import styles from './statistic.css';

interface IStatisticProps{
  classname?: string;
}

export function Statistic({classname=''}: IStatisticProps) {
  return (
    <button className={`${styles.statistic} ${classname}`}>
      <StatisticIcon size={16} className={styles.ico}/>
      <span className={styles.text}>Статистика</span>
    </button>
  );
}
