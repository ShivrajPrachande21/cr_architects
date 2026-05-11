import store from '../../store/store';

export const componentKey = 'CONTACTS_SLICE';

const initialState = {
  contactRequest: null,
  submitLoadingState: {
    state: 'idle',
    message: '',
  },
  error: null,
};

const slice = store.reducerManager.add({
  key: componentKey,
  initialReducerState: initialState,
  addedReducers: {
    setContactRequest: (state, action) => {
      state.contactRequest = action.payload;
    },
    setSubmitLoadingState: (state, action) => {
      state.submitLoadingState = action.payload;
    },
    setContactRequestError: (state, action) => {
      state.error = action.payload;
    },
    resetContactRequestState: (state) => {
      state.contactRequest = null;
      state.submitLoadingState = initialState.submitLoadingState;
      state.error = null;
    },
  },
});

export const {
  setContactRequest,
  setSubmitLoadingState,
  setContactRequestError,
  resetContactRequestState,
} = slice.actions;
