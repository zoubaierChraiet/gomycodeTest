import { put , takeLatest, call } from "redux-saga/effects"
import {LOAD_INSTRUCTORS,setInstructors,loadFailed} from "../modules/insructor/instructorsList/instructors.ducks"
import {getInstructors} from './apiCalls'

export function* loadInstructorsWatcher() {
    yield takeLatest(LOAD_INSTRUCTORS, loadInstructorsWorker)
}

export function* loadInstructorsWorker() {
    const {instructors,err} =  yield call(getInstructors)
    if(instructors){
        yield put(setInstructors(instructors))
    } else {
        yield put(loadFailed(err))
    }
}