import React from 'react';
import { state, status } from '../Timer';
import styles from './timerheader.css';

interface ITimerHeaderProps{
  className?: string;
  status: status;
  state: state;
}

export function TimerHeader({className='', status, state}: ITimerHeaderProps) {

  function getColor(){
    if (state === 'task' && status === 'new') return styles.bacgroundNew;
    if (state === 'task' && status !== 'new') return styles.bacgroundTask;
    if (state === 'break') return styles.bacgroundBreak;
  } 

  return (
    <header className={`${className} ${styles.timerHeader} ${getColor()}`}>
      <span>Сверстать сайт</span>
      <span>Помидор 1</span>
    </header>
  );
}
