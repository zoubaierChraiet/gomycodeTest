import {combineReducers} from 'redux'

export const FETCH_INSTRUCTOR = "FETCH_INSTRUCTOR" 
export const EDIT_INSTRUCTOR = "EDIT_INSTRUCTOR"
export const EDITED_INSTRUCTOR = "EDITED_INSTRUCTOR"
const EDIT_FAILED = "EDIT_FAILED"
const SET_INSTRUCTOR = "SET_INSTRUCTOR"
const FETCH_FAILED = "FETCH_FAILED"


const loading = (state=false,{type}) => {
    switch (type)  {
        case EDIT_INSTRUCTOR :
        case FETCH_INSTRUCTOR :
            return true
        case EDITED_INSTRUCTOR :
        case EDIT_FAILED :
        case SET_INSTRUCTOR :
        case FETCH_FAILED :
            return false
        default : 
        return state
    }
}

const instructor = (state=null,{type,payload}) => {
    switch (type)  {
        case SET_INSTRUCTOR :
            return payload
        default : 
        return state
    }
}

const error = (state=null,{type,payload}) => {
    switch (type)  {
        case FETCH_FAILED :
            return payload
        default : 
        return state
    }
}

export default combineReducers({
    loading ,
    instructor,
    error
})


export const fetchInstructor = (id) =>{
    return {
        type : FETCH_INSTRUCTOR ,
        payload : id
    }
}

export const setInstructor = instructor => {
    return {
        type : SET_INSTRUCTOR ,
        payload : instructor.data
    }
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
