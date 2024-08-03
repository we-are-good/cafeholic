import { configureStore } from '@reduxjs/toolkit';
import search from '../modules/search';
import list from '../modules/list';
import connection from '../modules/listConnection';
import info from '../modules/info';

export default configureStore({
  reducer: {
    search,
    list,
    connection,
    info
  }
});
