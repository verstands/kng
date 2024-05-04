import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reduceurs';

const store = configureStore({
  reducer: rootReducer,
  devTools: true 
});

export default store;
