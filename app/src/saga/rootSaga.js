import {fork} from "redux-saga/effects"
import {loadInstructorsWatcher} from './loadInstructorsSaga'
import {addInstructorsWatcher} from './addInstructorSaga'
import {editInstructorsWatcher} from './editInstructorSaga'
import {deleteInstructorsWatcher} from './deleteInstructorSaga'
import {fetchInstructorsWatcher} from './fetchInstructorSaga'

export  function* rootSaga(){
    yield fork(loadInstructorsWatcher)
    yield fork(addInstructorsWatcher)
    yield fork(editInstructorsWatcher)
    yield fork(deleteInstructorsWatcher)
    yield fork(fetchInstructorsWatcher)
}