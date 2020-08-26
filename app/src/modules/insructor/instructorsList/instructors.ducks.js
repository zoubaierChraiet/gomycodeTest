import {combineReducers} from 'redux'
import axios from 'axios' ;
import { Instructors } from './Instructors';


const FETCH_INSTRUCTORS = "FETCH_INSTRUCTORS" 
const DELETE_INSTRUCTOR = "DELETE_INSTRUCTOR"

const loading = (state=true,{type,payload}) => {
    switch (type)  {
        case FETCH_INSTRUCTORS :
            return false
        default : 
        return state
    }
}

const instructorsList = (state=null,{type,payload}) => {
    switch(type) {
        case FETCH_INSTRUCTORS :
            return payload ;
            default : 
            return state
    }
}

export default combineReducers({loading , instructorsList})

export const fetchInstructor = (id) => async dispatsh => {
    const instructors = await axios.get(`/instructors`)
    dispatsh({
        type : FETCH_INSTRUCTORS ,
        payload : instructors.data
    })
}

export const deleteInstructor = (id) => async dispatsh => {
    const instructors = await axios.delete(`/instructors/delete/${id}`)
    dispatsh({
        type : DELETE_INSTRUCTOR ,
        payload : instructors.data
    })
}
