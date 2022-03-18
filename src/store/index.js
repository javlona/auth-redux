import { configureStore } from '@reduxjs/toolkit';
import {createStore} from 'redux';
import reducer from './auth';


const store = configureStore({reducer : {}});

export default store;