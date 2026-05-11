import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export default function createReducerManager() {
  const initialState = {};
  const reducers = {};
  let combinedReducer = null;
  let keysToRemove = [];

  return {
    reduce: (state = initialState, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer ? combinedReducer(state, action) : initialState;
    },

    add: ({ key, addedReducers, initialReducerState }) => {
      if (!key || reducers[key]) {
        return undefined;
      }

      const slice = createSlice({
        name: key,
        initialState: initialReducerState,
        reducers: addedReducers,
      });

      initialState[key] = initialReducerState;
      reducers[key] = slice.reducer;
      combinedReducer = combineReducers(reducers);

      return { actions: slice.actions };
    },

    remove: (key) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
