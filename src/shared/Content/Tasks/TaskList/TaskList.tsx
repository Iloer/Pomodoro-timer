import React from 'react';
import { ITask } from '../Tasks';
import { Task } from './Task';
import styles from './tasklist.css';

interface ITaskListProps{
  className?: string;
  tasks: ITask[];
}
export function TaskList({className = '', tasks}: ITaskListProps) {
  return (
    <ul className={`${className} ${styles.taskList}`}>
      {tasks.map( task => <Task task={task} className={styles.task} key={task.id}/>)}
    </ul>
  );
}
