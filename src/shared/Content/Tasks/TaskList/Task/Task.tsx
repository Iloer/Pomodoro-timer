import React from 'react';
import { ITask } from '../../Tasks';
import { Menu } from './Menu';
import styles from './task.css';

interface ITaskProps {
  task: ITask;
  className?: string;
}

export function Task({className='', task}: ITaskProps) {
  return (
    <>
      <li className={`${styles.task} ${className}`}>
        <span className={styles.tomatoCount}>{task.tomatoCount}</span>      
        <span className={styles.title}>{task.title}</span> 
        <Menu btnСlassName={styles.menuBtn} />
      </li>
    </>
  );
}
