import { createSlice } from '@reduxjs/toolkit';

const initialFilterContacts = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterContacts,
  reducers: {
    setFilter: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer; // export reducer for store.js
