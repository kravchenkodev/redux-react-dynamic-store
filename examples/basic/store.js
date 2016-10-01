import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createDynamicStoreMiddleware } from '../../dist/index.js'

// test reducers
const exampleReducer = (state = {}, action) => {
    return state;
};

// combined test reducers
export const createReducers = (async) =>
    combineReducers({
        exam1: exampleReducer,
        exam2: exampleReducer,
        ...async
    });

export const configureStore = () =>
    createStore(
        createReducers(),
        applyMiddleware(createDynamicStoreMiddleware(createReducers))
    );

export default window.store = configureStore();
