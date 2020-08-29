import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import {Spin} from "antd"

import {addInstructor} from "./addInstructor.ducks"

import Form from '../form/Form'

export const AddInstructor = ({addInstructor , history : {push} , loading}) => {
    
    const [instructor,setInstructor] = useState({})
    
    const onSubmit = () => {
        addInstructor(instructor)
        push("/")
    }

    const onChange = (value) => {
        setInstructor(prev => {
            return {...prev,...value}
        })
    }

    return (
        <div style={{margin:"135px auto"}}>
            <h1> Add instructor </h1>
                <Spin spinning={loading} >
                    <Form 
                    value={instructor} 
                    onChange={onChange}
                    onSubmit={onSubmit}
                    loading={loading}
                    />
                </Spin>
        </div>
    )
}

AddInstructor.propTypes = {
    loading : PropTypes.bool ,
    addInstructor : PropTypes.func ,
}

const mapStateToProps = ({instructors}) => ({
    loading : instructors.add.loading
})

const mapDispatchToProps = {
    addInstructor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInstructor)
