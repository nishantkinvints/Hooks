import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counter_1';
import { counterReducerten } from './counter_10';


const rootReducer = combineReducers({
    counterReducer,
    counterReducerten
})


const store = createStore(rootReducer);


export default store;

