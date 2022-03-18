import {createStore} from 'redux';
import { devToolsEnhancers } from 'redux-dev-tools';
import reducer from './auth';

const store = createStore(reducer, devToolsEnhancers({trace: true}));