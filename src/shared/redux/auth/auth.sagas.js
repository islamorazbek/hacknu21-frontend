import { all, call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { useHistory } from "react-router";
import { getProfile, login } from "../../api";
import { fetchProfileAction, fetchProfileErrorAction, fetchProfileSuccessAction, loginErrorAction, loginSuccessAction } from "./auth.actions";
import { AuthActionTypes } from "./auth.reducer";

export function* loginAsync(action) {
    try {
        const res = yield call(login, action.payload)
        if (res.Data) {
            localStorage.clear()
            localStorage.setItem('token', res.Data.token)
            localStorage.setItem('userID', res.Data.id)
            yield put(loginSuccessAction())
            yield put(fetchProfileAction())
        }
    } catch (err) {
        yield put(loginErrorAction(err))
    }
}

export function* loginSaga() {
    yield takeLatest(AuthActionTypes.AUTH_LOGIN, loginAsync)
}

export function* fetchProfileAsync() {
    try {
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        const res = yield call(getProfile, { token, userID })
        if (res.Data) {
            yield put(fetchProfileSuccessAction(res.Data))
        }
    } catch (err) {
        yield put(fetchProfileErrorAction(err))
    }
}

export function* fetchProfileSaga() {
    yield takeEvery(AuthActionTypes.FETCH_PROFILE, fetchProfileAsync)
}

export function* authSagas() {
    yield all([
        call(loginSaga),
        call(fetchProfileSaga)
    ])
}