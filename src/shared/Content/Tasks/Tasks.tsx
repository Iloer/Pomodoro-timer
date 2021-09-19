import React from 'react';
import { Description } from './Description';
import styles from './tasks.css';

interface ITasksProps{
  className?: string;
}


export function Tasks({className = ''}: ITasksProps) {
  return (
    <div className={`${styles.tasks} ${className}`}>
      <Description />
      <input 
        className={styles.taskInput} 
        placeholder="Название задачи"/>
      <button className={styles.addBtn}>Добавить</button>
    </div>
  );
}
