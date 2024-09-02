// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

// Actions declaration using the createAction(type) function

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');

/* export const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
    },
    });
    export const deleteContact = ({ id }) => ({
      type: DELETE_CONTACT,
      payload: {
        id,
        },
        });
        export const filterContact = ({ filter }) => ({
          type: FILTER_CONTACT,
          payload: {
            filter,
            },
            }); */
