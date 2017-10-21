import { call, put, takeLatest, select, take, cancel } from 'redux-saga/effects';
import request from 'utils/request';
import { API_URL, SEARCH_LIMIT } from 'constants/app';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as consts from './constants';
import * as actions from './actions';
import mainSelector from './selectors';

export function* search() {
  const data = yield select(mainSelector('searchParams'));
  const requestURL = `${API_URL}/data`;

  try {
    const result = yield call(request, requestURL, {
      method: 'GET'
    });

    yield [
      put(actions.searchSuccess(result))
    ];
  } catch (err) {
    yield [
      put(actions.searchError(err))
    ];
  }
}

export function* mainData() {
  const watcher = yield [
    takeLatest(consts.SEARCH, search) 
  ];

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield watcher.map((task) => cancel(task));
}

// All sagas to be loaded
export default [
  mainData,
];
