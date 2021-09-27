import { status } from "../../Shema";

export type task = {
  id: string;
  title: string;
  tomato: number;
  status: status;
}

export type tasksState = {
  tasks: task[];
}