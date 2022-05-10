import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from './reducers/budgetReducer';
import thunk from 'redux-thunk';
export default configureStore({
    reducer: budgetReducer,
    
})