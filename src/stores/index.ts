import {configureStore} from '@reduxjs/toolkit';
import contactslice from './contacts/slice';

const store = configureStore({
  reducer: contactslice,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
