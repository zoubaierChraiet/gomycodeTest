import { put , takeLatest, call } from "redux-saga/effects"
import {DELETE_INSTRUCTOR,deletedInstructor,deleteFailed} from "../modules/insructor/instructorsList/instructors.ducks"
import {deleteInstructor} from "./apiCalls"

export function* deleteInstructorsWatcher() {
    yield takeLatest(DELETE_INSTRUCTOR, deleteInstructorsWorker)
}

export function* deleteInstructorsWorker(action) {
    try {
        yield call(deleteInstructor,action.payload)
        yield put(deletedInstructor())
    } catch(err){
        yield put(deleteFailed())
    }
}