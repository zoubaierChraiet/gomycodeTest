import React,{useState,useEffect} from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { message, Spin} from "antd"
import moment from 'moment'

import Form from "../form/Form"

import {fetchInstructor,editInstructor} from "./editInstructor.ducks"

export const EditInstructor = ({fetchInstructor,fetchedInstructor,editInstructor ,match:{params : {id}} ,loading}) => {

    const [instructor,setInstructor] = useState({})

    useEffect(() => {
        fetchInstructor(id)
    },[]) 

    useEffect(() => {
        if(fetchedInstructor){
            fetchedInstructor.subscriptionDate = moment(fetchedInstructor.subscriptionDate)
            setInstructor(prev => {
                return fetchedInstructor
            })
        }
    },[fetchedInstructor])
    
    const onSubmit = () => {
        editInstructor(instructor)
        message.success("Instructor updated successfully")
    }

    const onChange = (value) => {
        setInstructor(prev => {
            return {...prev,...value}
        })
    }

    return (
        <div style={{margin:"135px auto"}}>
            <h1> Edit instructor </h1>
            <Spin spinning={loading} >
                <Form 
                    value={instructor} 
                    onChange={onChange} 
                    onSubmit={onSubmit} 
                    mode="edit" 
                />
            </Spin>
        </div>
    )
}

EditInstructor.propTypes = {
    fetchedInstructor : PropTypes.object ,
    loading : PropTypes.bool ,
    fetchInstructor : PropTypes.func ,
    editInstructor : PropTypes.func ,
}

const mapStateToProps = ({instructors}) => ({
    fetchedInstructor : instructors.edit.instructor,
    loading : instructors.edit.loading
})

const mapDispatchToProps = {
    fetchInstructor,
    editInstructor
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInstructor)
