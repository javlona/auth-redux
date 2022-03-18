import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import todoReducer from './todo'

const store = configureStore({reducer : {
    user : authReducer,
    todos: todoReducer,
}});

export default store;