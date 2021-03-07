import { createStore } from 'redux';
import reducer from "./reducer";

//getState, subscribe ,redispatch this 3 things we need to learn for redux
const store=createStore(reducer);

export default store;