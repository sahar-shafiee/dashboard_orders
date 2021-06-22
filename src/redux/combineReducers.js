// reducers
import { combineReducers } from 'redux';
import { counter } from './reducers/counter/reducer';
import { modal } from './reducers/modal/reducer';
import { todo } from './reducers/todoList/reducer';
// get all redusers in this value
let allRedusers = {
    counter,
    modal,
    todo
};
// run all reducers
export const Reducer = combineReducers(allRedusers);
