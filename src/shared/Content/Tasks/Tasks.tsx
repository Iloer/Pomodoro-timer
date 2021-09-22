import React from 'react';
import { Description } from './Description';
import { TaskList } from './TaskList';
import styles from './tasks.css';

interface ITasksProps{
  className?: string;
}

export interface ITask {
  tomatoCount: number;
  title: string;
}

const tasksData: ITask[] = [
  {tomatoCount: 2, title: "task 1"},
  {tomatoCount: 1, title: "task 2"},
  {tomatoCount: 3, title: "task 3"},
]

export function Tasks({className = ''}: ITasksProps) {
  const [tasks, setTasks] = React.useState<ITask[]>(tasksData);
  function addHandlerClik(){
    setTasks( prev => {
      const res = [...prev];
      res.push({tomatoCount: 1, title: 'new_task'});
      return res;
    });
  }
  return (
    <div className={`${styles.tasks} ${className}`}>
      <Description />
      <input 
        className={styles.taskInput} 
        placeholder="Название задачи"/>
      <button className={styles.addBtn} onClick={addHandlerClik}>Добавить</button>
      <TaskList tasks={tasks}/>
      {tasks.length > 0 && <span className={styles.timeSumm}>25 мин</span>}
    </div>
  );
}
