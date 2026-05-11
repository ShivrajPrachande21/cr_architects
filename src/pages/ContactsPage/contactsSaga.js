import { all, put, takeLatest } from 'redux-saga/effects';
import ContactsDataService from '../../services/ContactsDataService';
import store from '../../store/store';
import {
  componentKey,
  setContactRequest,
  setContactRequestError,
  setSubmitLoadingState,
} from './contactsSlice';

export const submitContactRequest = (payload) => ({
  type: 'CONTACTS/SUBMIT_CONTACT_REQUEST',
  payload,
});

function* submitContactRequestAsync(action) {
  yield put(setSubmitLoadingState({ state: 'loading', message: 'Submitting...' }));
  yield put(setContactRequestError(null));

  try {
    const response = yield ContactsDataService.createContactRequest(action.payload);
    const responseData = response?.data?.data ?? response?.data ?? action.payload;

    yield put(setContactRequest(responseData));
    yield put(setSubmitLoadingState({ state: 'success', message: 'Request sent!' }));

    if (typeof action.payload?.onSuccess === 'function') {
      action.payload.onSuccess(responseData);
    }
  } catch (error) {
    const message = error?.response?.data?.message || error.message || 'Unable to submit request';

    yield put(setContactRequestError(message));
    yield put(setSubmitLoadingState({ state: 'error', message }));

    if (typeof action.payload?.onError === 'function') {
      action.payload.onError(error);
    }
  }
}

function* rootSaga() {
  yield all([takeLatest(submitContactRequest().type, submitContactRequestAsync)]);
}

store.sagaManager.addSaga(componentKey, rootSaga);
