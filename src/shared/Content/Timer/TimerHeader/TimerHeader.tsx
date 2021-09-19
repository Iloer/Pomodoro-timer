import React from 'react';
import styles from './timerheader.css';

interface ITimerHeaderProps{
  className?: string;
}

export function TimerHeader({className=''}: ITimerHeaderProps) {
  return (
    <header className={`${className} ${styles.timerHeader}`}>
      <span>Сверстать сайт</span>
      <span>Помидор 1</span>
    </header>
  );
}
