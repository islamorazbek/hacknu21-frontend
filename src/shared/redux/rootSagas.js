import { all, call } from '@redux-saga/core/effects'
import { authSagas } from './auth/auth.sagas'
import { eventsSagas } from './events/event.saga'

export default function* rootSaga() {
    yield all([
        call(authSagas),
        call(eventsSagas)
    ])
}