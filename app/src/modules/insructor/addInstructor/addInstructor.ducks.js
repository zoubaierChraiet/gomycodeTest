import {combineReducers} from 'redux'

export const ADD_INSTRUCTOR = "ADD_INSTRUCTOR" 
export const ADDED_INSTRUCTOR = "ADDED_INSTRUCTOR" 
const ADD_FAILED = "ADD_FAILED" 


const loading = (state=false,{type}) => {
    switch (type)  {
        case ADD_INSTRUCTOR :
            return true ;
        case ADDED_INSTRUCTOR :
        case ADD_FAILED :
            return false
        default : 
        return state
    }
}

const error = (state=null , {type , payload}) => {
    switch(type){
        case ADD_FAILED :
            return payload ;
        default : 
            return state
    }
}

export default combineReducers({
    loading,
    error
})

export const addInstructor = (instructor) => {
    return {
        type : ADD_INSTRUCTOR ,
        payload : instructor
    }
}

export const addedInstructor = () => {
    return {
        type : ADDED_INSTRUCTOR ,
    }
}

export const addFailed = (err) => {
    return {
        type : ADD_FAILED ,
        payload : err
    }
}
