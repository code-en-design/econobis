import { put, call } from 'redux-saga/effects';
import WebformsAPI from '../../api/webform/WebformsAPI';

export function* fetchWebformsSaga() {
    try {
        const webforms = yield call(WebformsAPI.fetchWebforms);
        yield put({ type: 'FETCH_WEBFORMS_SUCCESS', webforms });
    } catch (error) {
        yield put({ type: 'FETCH_WEBFORMS_ERROR', error });
    }
}

export function* deleteWebformSaga({ id }) {
    try {
        yield call(WebformsAPI.deleteWebform, id);
        yield put({ type: 'DELETE_WEBFORM_SUCCESS', id });
    } catch (error) {
        yield put({ type: 'DELETE_WEBFORM_ERROR', error });
    }
}