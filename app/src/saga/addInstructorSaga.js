import { put , takeLatest, call } from "redux-saga/effects"
import {ADD_INSTRUCTOR,addedInstructor,addFailed} from "../modules/insructor/addInstructor/addInstructor.ducks"
import {addInstructor} from "./apiCalls"

export function* addInstructorsWatcher() {
    yield takeLatest(ADD_INSTRUCTOR, addInstructorsWorker)
}

export function* addInstructorsWorker(action) {
    try{
        yield call(addInstructor,action.payload)
        yield put(addedInstructor())
    } catch(err){
        yield put(addFailed(err))
    }
}