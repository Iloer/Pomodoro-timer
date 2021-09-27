import React, { useState, useEffect } from 'react';
import styles from './timer.css';
import { TimerHeader } from './TimerHeader';
import { BtnPanel } from './BtnPanel/BtnPanel';
import { TimerPanel } from './TimerPanel';

interface ITimerProps{
  className?: string;
}

export type status = 'new' | 'active' | 'pause';
export type state = 'task' | 'break';

export function Timer({className = ''}: ITimerProps) {

  const [status, setStatus] = useState<status>('new');
  const [state, setState] = useState<state>('task');
  const [time, setTime] = useState<number>(1500);

  function onTimerStopStart(){ 
    setStatus( (prev: status) => {
      switch (prev){
        case 'new': return 'active';
        case 'active': return 'pause';
        case 'pause': return 'active';
        default: return 'new';
      }
    });
  }

  function onTimerStop(){
    setState( (prev: state) => {
      switch (prev){
        case 'task': return 'break';
        default: return 'task';
      }
    });    
  }

  useEffect(() => {
    setStatus('new');
    setTime(1500)
  }, [state]);

  return (
    <div className={`${styles.timer} ${className}`}>
      <TimerHeader className={styles.header} status={status} state={state}/>
      <main className={`${styles.timerMain}`}>
        <TimerPanel minutes={time} status={status} state={state}/>
        <BtnPanel className={styles.btnPanel} status={status} state={state} onStartPause={onTimerStopStart} onStopReset={onTimerStop} />
      </main>
    </div>
  );
}
