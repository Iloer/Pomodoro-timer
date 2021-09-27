import { ActionCreator } from "redux";
import { task } from "./tasksState";

export enum tasksActionTypes {
  TASK_ADD = 'TASK_ADD',
  TASK_DELETE = 'TASK_DELETE',
  TASK_EDIT = 'TASK_EDIT',
  TASK_ADD_TOMATO = 'TASK_ADD_TOMATO',
  TASK_DELETE_TOMATO = 'TASK_DELETE_TOMATO',
}

export type TaskAddAction = {
  type: typeof tasksActionTypes.TASK_ADD,
  task: task,
};

export const taskAdd: ActionCreator<TaskAddAction> = (task: task) => ({
  type: tasksActionTypes.TASK_ADD,
  task: task,
})

export type TaskDeleteAction = {
  type: typeof tasksActionTypes.TASK_DELETE,
  taskId: string,
}

export const taskDelete: ActionCreator<TaskDeleteAction> = (taskId: string) => ({
  type: tasksActionTypes.TASK_DELETE,
  taskId: taskId,
})

export type TaskEditAction = {
  type: typeof tasksActionTypes.TASK_EDIT,
  taskId: string,
  title: string,
}

export const taskEdit: ActionCreator<TaskEditAction> = (taskId: string, title: string) => ({
  type: tasksActionTypes.TASK_EDIT,
  taskId: taskId,
  title: title,
})

export type TaskAddTomatoAction = {
  type: typeof tasksActionTypes.TASK_ADD_TOMATO,
  taskId: string,
}

export const taskAddTomato: ActionCreator<TaskAddTomatoAction> = (taskId: string) => ({
  type: tasksActionTypes.TASK_ADD_TOMATO,
  taskId: taskId,
})

export type TaskDeleteTomateAction = {
  type: typeof tasksActionTypes.TASK_DELETE_TOMATO,
  taskId: string,
}

export const taskDeleteTomato: ActionCreator<TaskDeleteTomateAction> = (taskId: string) => ({
  type: tasksActionTypes.TASK_DELETE_TOMATO,
  taskId: taskId,
})