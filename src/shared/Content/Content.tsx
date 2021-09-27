import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { task } from '../Store/tasks/tasksState';
import styles from './content.css';
import { Tasks } from './Tasks';
import { Timer } from './Timer';

export function Content() {

  const tasks: task[] = useSelector<RootState, task[]>(state => state.taskReducer.tasks);

  return (
    <main className={styles.contentMain}>
      <Tasks className={styles.block} tasks={tasks} /> 
      <Timer className={styles.blockTime} /> 
    </main>
  );
}
