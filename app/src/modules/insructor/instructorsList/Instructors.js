import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Table, Row,Button,notification} from 'antd'
import {Link} from 'react-router-dom'

import {loadInstructors,deleteInstructor} from './instructors.ducks'

import Actions from '../../../components/Actions/Actions'
import Avatar from 'antd/lib/avatar/avatar'



export const Instructors = ({loadInstructors , instructors , deleteInstructor , loading ,error}) => {

    const [data , setInstructors] = useState([])


    useEffect(() => {
        loadInstructors()
    },[])

    useEffect(() => {
        setInstructors(instructors)
        if(error){
            notification.error({
                message: 'Internal server error',
                description:
                  'Please try again later',
              });
        }
    },[instructors,error])


    const columns = [
        {
            title : "Photo" ,
            dataIndex : "photo" ,
            key : "photo",
            render : (text,record) => {
                return <Avatar src={record.photo} />
            }
        },
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
                <Table columns={columns} dataSource={data} loading={loading} />
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
    prop: PropTypes,
    instructors : PropTypes.arrayOf(PropTypes.object),
    loading : PropTypes.bool,
    loadInstructors : PropTypes.func,
    deleteInstructor : PropTypes.func,
}

const mapStateToProps = ({instructors}) => ({
    instructors : instructors.list.instructorsList ,
    loading : instructors.list.loading ,
    error : instructors.list.error
})

const mapDispatchToProps = {
    loadInstructors,
    deleteInstructor
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructors)
