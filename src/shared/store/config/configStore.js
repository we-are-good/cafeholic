import { configureStore } from '@reduxjs/toolkit';
import todo from '../modules/test';

export default configureStore({
  reducer: {
    todo
  }
});
