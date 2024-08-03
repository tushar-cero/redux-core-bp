import { ledgerReducer }  from '../reducers'
import {  legacy_createStore as createStore } from 'redux';

const store = createStore(ledgerReducer);

export default store;