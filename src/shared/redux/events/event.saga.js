import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getEventById, getEvents } from '../../api'
import { fetchCurrentEventError, fetchCurrentEventSuccess, fetchEventsError, fetchEventsSuccess, resetEvents, setLoadingEvents, unSetLoadingEvents } from './event.actions'
import { EventActionTypes } from './event.reducer'

export function* allEventsFetchAsync() {
    yield put(setLoadingEvents())
    try {
        const res = yield call(getEvents)
        if (res.Data) {
            yield put(resetEvents())
            yield put(fetchEventsSuccess(res.Data))
        }
    } catch (err) {
        yield put(fetchEventsError(err))
    } finally {
        yield put(unSetLoadingEvents())
    }
}

export function* allEventsFetchSaga() {
    yield takeEvery(EventActionTypes.FETCH_EVENTS, allEventsFetchAsync)
}

export function* eventFetchAsync(action) {
    yield put(setLoadingEvents())
    try {
        const res = yield call(getEventById, action.payload)
        if (res.Data) {
            yield put(fetchCurrentEventSuccess(res.Data))
        }
    } catch (err) {
        yield put(fetchCurrentEventError(err))
    } finally {
        yield put(unSetLoadingEvents())
    }
}

export function* eventFetchSaga() {
    yield takeLatest(EventActionTypes.FETCH_CURRENT_EVENT, eventFetchAsync)
}

export function* eventsSagas() {
    yield all([
        call(allEventsFetchSaga),
        call(eventFetchSaga)
    ])
}