import React from 'react';
import { Tomato } from '../../Common/Icons';
import styles from './logo.css';

interface ILogoProps{
  classname?: string;
}

export function Logo({classname}: ILogoProps) {
  return (
    <div className={`${styles.logo} ${classname}`}>
      <Tomato size={40}/>
      <span className={styles.text}>pomodoro_box</span>
    </div>
  );
}
