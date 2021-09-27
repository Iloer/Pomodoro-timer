import React from 'react';
import { state } from '../../Timer';
import { status } from '../../../Shema';
import styles from './btnPanel.css';

interface IBtnPanelProps{
  className?: string;
  status: status;
  state: state;
  onStartPause?: () => void;
  onStopReset?: () => void;
}

const NOOP = () => {}

export function BtnPanel({className='', status, state, onStartPause=NOOP, onStopReset=NOOP}: IBtnPanelProps) {
  
  const onStartPauseClick = () => onStartPause();
  const onStopResetClick = () => onStopReset();

  function getBtnName(): string
  {
    switch(status){
      case 'new': return 'Старт';
      case 'active': return 'Пауза'; 
      case 'pause': return 'Продолжить';
      default: return 'Старт';
    }
  }

  function getBtn2Name(): string
  {
    if (state === 'break') 
      return 'Пропустить'
    else 
      return 'Стоп';
  }

  return (
    <footer className={`${className} ${styles.btnPanel}`}>
      <button className={styles.btnStart} onClick={onStartPauseClick}>{getBtnName()}</button>
      <button className={styles.btnStop} onClick={onStopResetClick}>{getBtn2Name()}</button>
    </footer>
  );
}
