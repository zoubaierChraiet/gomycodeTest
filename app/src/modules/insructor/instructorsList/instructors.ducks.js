import {combineReducers} from 'redux'

export const DELETE_INSTRUCTOR = "DELETE_INSTRUCTOR"
export const LOAD_INSTRUCTORS = "LOAD_INSTRUCTORS"
export const SET_INSTRUCTORS = "SET_INSTRUCTORS"
const DELETED_INSTRUCTOR = "DELETED_INSTRUCTOR"
const LOAD_FAILED = "LOAD_FAILED"
const DELETE_FAILED = "DELETE_FAILED"

const loading = (state=false,{type}) => {
    switch (type)  {
        case LOAD_INSTRUCTORS :
        case DELETE_INSTRUCTOR :
            return true ;
        case SET_INSTRUCTORS :
        case DELETED_INSTRUCTOR :
        case LOAD_FAILED :
        case DELETE_FAILED :
            return false ;
        default : 
        return state
    }
}

const instructorsList = (state=null,{type,payload}) => {
    switch(type) {
        case SET_INSTRUCTORS :
            return payload.data ;
        case DELETE_INSTRUCTOR :
                return state.filter(instructor => instructor._id !== payload) ;
        default : 
            return state
    }
}

const error = (state = null , {type,payload}) => {
    switch(type){
        case LOAD_FAILED :
            return payload ;
        default :
            return state
    }
}

export default combineReducers({loading , instructorsList , error})


export const deleteInstructor = (id) => {
    return {
        type : DELETE_INSTRUCTOR ,
        payload : id
    }
}

export const deletedInstructor = () => {
    return {
        type : DELETED_INSTRUCTOR ,
    }
}

export const loadInstructors = () => {
    return {
        type : LOAD_INSTRUCTORS,
    }
}


export const setInstructors = (instructors) => {
    return {
        type : SET_INSTRUCTORS,
        payload: instructors
    }
}

export const loadFailed = (err) => {
    return {
        type : LOAD_FAILED,
        payload : err
    }
}

export const deleteFailed = () => {
    return {
        type : DELETE_FAILED,
    }
}