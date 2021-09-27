import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { taskAdd } from '../../Store/tasks/actions';
import { task } from '../../Store/tasks/tasksState';
import { Description } from './Description';
import { TaskList } from './TaskList';
import styles from './tasks.css';
import { v4 } from 'uuid';

interface ITasksProps{
  className?: string;
  tasks: task[];
}

export interface ITask {
  id: string;
  tomatoCount: number;
  title: string;
}

export function Tasks(prop: ITasksProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const tasks: ITask[] = prop.tasks.map( task => ({id:task.id, tomatoCount: task.tomato, title: task.title}));
  const dispatch = useDispatch();
  
  function onHandleTaskTitleChange(e: ChangeEvent<HTMLInputElement>){
    setTaskTitle(e.currentTarget.value);
  }

  function addHandlerClik(){
    if (taskTitle != '') {
      dispatch(taskAdd({id:v4(), tomato: 1, title: taskTitle}));
      setTaskTitle('');
    }
  }
  return (
    <div className={`${styles.tasks} ${prop.className}`}>
      <Description />
      <input 
        className={styles.taskInput} 
        value={taskTitle}
        onChange={onHandleTaskTitleChange}
        placeholder="Название задачи"/>
      <button 
        className={styles.addBtn} 
        onClick={addHandlerClik}
        disabled={taskTitle === ''}
        title={taskTitle === '' ? 'Название задачи не введено': ''}>
          Добавить
      </button>
      <TaskList tasks={tasks}/>
      {tasks.length > 0 && <span className={styles.timeSumm}>25 мин</span>}
    </div>
  );
}
