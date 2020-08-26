import {combineReducers} from 'redux'

import instructors from './modules/insructor/instructorsList/instructors.ducks'
import edit from './modules/insructor/editInstructor/editInstructor.ducks'


export default combineReducers({
instructors,
edit
})