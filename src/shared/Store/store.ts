import { combineReducers, createStore } from "redux";
import { taskReducer } from "./tasks/reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = {
  taskReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = {
  [k in keyof typeof reducers]: ReturnType<typeof reducers[k]>;
}; 

/*
const rootReducer: Reducer<RootState, PomadoroActions> = (state = initialState, action): RootState => {
  switch (action.type) {

    default:
      return state;
  }
}*/

export const store = createStore(rootReducer, composeWithDevTools(
   
));