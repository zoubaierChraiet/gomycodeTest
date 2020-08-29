import { put , takeLatest, call } from "redux-saga/effects"
import {FETCH_INSTRUCTOR,setInstructor} from "../modules/insructor/editInstructor/editInstructor.ducks"
import {fetchInstructor} from "./apiCalls"

export function* fetchInstructorsWatcher() {
    yield takeLatest(FETCH_INSTRUCTOR, fetchInstructorsWorker)
}

export function* fetchInstructorsWorker(action) {
    try {
        const instructor = yield call(fetchInstructor,action.payload)
        yield put(setInstructor(instructor))
    } catch(err){
        yield put({type : "FETCH_FAILED" , payload:err})
    }
}