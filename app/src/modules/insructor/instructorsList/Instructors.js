import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Table, Row,Button} from 'antd'
import {Link} from 'react-router-dom'

import {fetchInstructor} from './instructors.ducks'
import {deleteInstructor} from './instructors.ducks'

import Actions from '../../../components/Actions/Actions'

export const Instructors = ({fetchInstructor , instructors,deleteInstructor}) => {

    const [data , setInstructors] = useState([])

    useEffect(() => {
        fetchInstructor().then(() => {
            setInstructors(instructors)
        },)
    })
    
    const columns = [
        {
            title : "Instructor" ,
            dataIndex : "name" ,
            key : "name"
        },
        {
            title : "Subscribtion Date" ,
            dataIndex : "subscriptionDate" ,
            key : "subscribtionDate",
            render : (text,record) => {
                return <span> {new Date(record.subscriptionDate).toLocaleDateString()} </span>
            }
        },
        {
            title : "Time table" ,
            dataIndex : "timeTable" ,
            key : "timeTable",
        },
        {
            title : "Number of trucks" ,
            dataIndex : "numberOfStacks" ,
            key : "numberOfStacks"
        },
        {
            title : "Actions" ,
            key : "actions",
            render : (text,record) => {
                return <Actions 
                selectUrl={`/edit/${record._id}`}
                onDelete={() => {
                  deleteInstructor(record._id);
                }} />
            }
        },
    ]

    return (
        <div style={{margin : "auto"}}>
            <h3>Instructors List</h3>
            <Row>
                <Table columns={columns} dataSource={data} />
            </Row>
            <Row>
            <Link to="/new">
                <Button type="primary" htmlType="submit">
                    Add instructor
                </Button>
            </Link>
            </Row>
        </div>
    )
}

Instructors.propTypes = {
    prop: PropTypes
}

const mapStateToProps = ({instructors}) => ({
    instructors : instructors.instructorsList
})

const mapDispatchToProps = {
    fetchInstructor,
    deleteInstructor
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructors)
