import {combineReducers} from 'redux'
import axios from 'axios' ;

const FETCH_INSTRUCTOR = "FETCH_INSTRUCTOR" 
const EDIT_INSTRUCTOR = "EDIT_INSTRUCTOR"

const loading = (state=true,{type,payload}) => {
    switch (type)  {
        case FETCH_INSTRUCTOR :
            return false
        default : 
        return state
    }
}

combineReducers({
    loading 
})

export const fetchInstructor = (id) => async dispatsh => {
    const instructor = await axios.get(`/instructors/${id}`)
    dispatsh({
        type : FETCH_INSTRUCTOR ,
        payload : instructor
    })
}

export const editInstructor = (instructor,id) => async dispatsh => {
    const instructor = await axios.post(`/instructors/${id}`,instructor)
    dispatsh({
        type : EDIT_INSTRUCTOR ,
        payload : instructor
    })
}
