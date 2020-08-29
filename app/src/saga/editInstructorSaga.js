import { put , takeLatest, call } from "redux-saga/effects"
import {EDIT_INSTRUCTOR,editedInstructor,editFailed} from "../modules/insructor/editInstructor/editInstructor.ducks"
import {editInstructor} from "./apiCalls"

export function* editInstructorsWatcher() {
    yield takeLatest(EDIT_INSTRUCTOR, editInstructorsWorker)
}

export function* editInstructorsWorker(action) {
    try{
        yield call(editInstructor,action.payload)
        yield put(editedInstructor())
    } catch(err){
        yield put(editFailed())
    }
}