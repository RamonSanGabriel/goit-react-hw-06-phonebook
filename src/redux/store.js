// import { createStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
// const initialState = {};
// const enhancer = devToolsEnhancer();

// export const store = createStore(reducer, initialState, enhancer);

// configureStore sets up the enhancer under the hood so that we don't need to normally import the devtool enhancer function to use the Redux Dev Tools.
export const store = configureStore({
  reducer: rootReducer,
});
