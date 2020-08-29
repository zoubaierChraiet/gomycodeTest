import { put , takeLatest, call } from "redux-saga/effects"
import {LOAD_INSTRUCTORS,setInstructors,loadFailed} from "../modules/insructor/instructorsList/instructors.ducks"
import {getInstructors} from './apiCalls'

export function* loadInstructorsWatcher() {
    yield takeLatest(LOAD_INSTRUCTORS, loadInstructorsWorker)
}

export function* loadInstructorsWorker() {
    try {
        const instructors =  yield call(getInstructors)
        yield put(setInstructors(instructors))
    } catch(err){
        yield put(loadFailed(err))
    }
}