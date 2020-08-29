import {combineReducers} from 'redux'
import axios from 'axios' ;

export const FETCH_INSTRUCTOR = "FETCH_INSTRUCTOR" 
export const EDIT_INSTRUCTOR = "EDIT_INSTRUCTOR"
export const EDITED_INSTRUCTOR = "EDITED_INSTRUCTOR"
const EDIT_FAILED = "EDIT_FAILED"

const loading = (state=false,{type,payload}) => {
    switch (type)  {
        case EDIT_INSTRUCTOR :
            return true
        case FETCH_INSTRUCTOR :
        case EDITED_INSTRUCTOR :
        case EDIT_FAILED :
            return false
        default : 
        return state
    }
}

const instructor = (state=null,{type,payload}) => {
    switch (type)  {
        case FETCH_INSTRUCTOR :
            return payload
        default : 
        return state
    }
}

export default combineReducers({
    loading ,
    instructor
})

export const fetchInstructor = (id) => async dispatsh => {
    const instructor = await axios.get(`/instructors/${id}`)
    dispatsh({
        type : FETCH_INSTRUCTOR ,
        payload : instructor.data
    })
}

export const editInstructor = (instructor) => {
    return {
        type : EDIT_INSTRUCTOR ,
        payload : instructor
    }
}

export const editedInstructor = () => {
    return {
        type : EDITED_INSTRUCTOR ,
    }
}

export const editFailed = () => {
    return {
        type : EDIT_FAILED ,
    }
}
