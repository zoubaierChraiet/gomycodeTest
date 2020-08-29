import {combineReducers} from "redux"

import instructors from './instructorsList/instructors.ducks'
import edit from './editInstructor/editInstructor.ducks'
import add from './addInstructor/addInstructor.ducks'

export default combineReducers({
    list :instructors ,
    edit,
    add
})