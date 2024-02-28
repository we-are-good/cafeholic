import { configureStore } from '@reduxjs/toolkit';
import todo from '../modules/test';
import search from '../modules/search';
import list from '../modules/list';
import connection from '../modules/listConnection';
import info from '../modules/info';

export default configureStore({
  reducer: {
    todo,
    search,
    list,
    connection,
    info
  }
});
