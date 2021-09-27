import { Reducer } from "redux";
import { TaskAddAction, TaskAddTomatoAction, TaskDeleteAction, TaskDeleteTomateAction, TaskEditAction, tasksActionTypes } from "./actions";
import { tasksState } from "./tasksState";

type TaskActions = TaskAddAction
  | TaskAddTomatoAction
  | TaskDeleteAction
  | TaskDeleteTomateAction
  | TaskEditAction

export const initialStateTasks: tasksState = {
  tasks: []
}

export const taskReducer: Reducer<tasksState, TaskActions> = (state = initialStateTasks, action): tasksState => {
  switch (action.type) {
    case tasksActionTypes.TASK_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case tasksActionTypes.TASK_DELETE:
      return {
        ...state,
        tasks: state.tasks.filter(x => x.id != action.taskId)
      }
    case tasksActionTypes.TASK_EDIT:
      return {
        ...state,
        tasks: state.tasks.map( el => el.id === action.taskId ? {...el, title: action.title} : el)
      }
    case tasksActionTypes.TASK_ADD_TOMATO:
      return {
        ...state,
        tasks: state.tasks.map( el => el.id === action.taskId ? {...el, tomato: el.tomato + 1} : el)
      }
      case tasksActionTypes.TASK_DELETE_TOMATO:
        return {
          ...state,
          tasks: state.tasks.map( el => el.id === action.taskId ? {...el, tomato: el.tomato - 1} : el)
        }
    default: 
      return state;
  }
}