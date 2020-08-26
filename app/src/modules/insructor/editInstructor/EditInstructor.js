import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {Form , Input,Button ,Col, DatePicker, Row} from "antd"


import {fetchInstructor,editInstructor} from "./editInstructor.ducks"

export const EditInstructor = ({fetchInstructor,fetchedInstructor,editInstructor ,match} ) => {

    const [instructor , setInstructor] = useState(null)
    const [name,setName] = useState("")
    const [subscriptionDate,setSubscriptionDate] = useState("")
    const [timeTable,setTimeTable] = useState("")
    const [numberOfStacks,setNumberOfStacks] = useState("")

    useEffect(() => {
        fetchInstructor(match.params.id)
    },[]) 

    useEffect(() => {
        setInstructor(fetchedInstructor)
    } , [fetchedInstructor])


    useEffect(() => {
        setName(instructor && instructor.name)
        setSubscriptionDate(instructor && instructor.subscriptionDate)
        setTimeTable(instructor && instructor.timeTable)
        setNumberOfStacks(instructor && instructor.numberOfStacks)
    } ,[instructor])


    onsubmit = () => {
        const newInstructor = {
            name,
            subscriptionDate,
            timeTable,
            numberOfStacks
        }
        editInstructor(newInstructor,match.params.id) ;
    }


    return (
        <div>
            {instructor && (
                <div>
                <h3> Edit instructor </h3>
                <Form name="basic">
                 <Row gutter={16} >
                     <Col span={6} xs={24} md={6}> 
                     <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        
                    >
                        <Input onChange={(e) => setName(e.target.value)} value={name} />
                    </Form.Item>
                      </Col>
                      <Col span={6} xs={24} md={6}>
                      <Form.Item
                        label="Time Table"
                        name="timeTable"
                        rules={[{ required: true, message: 'Please input your subscriptionDate!' }]}
                    >
                        <Input onChange={(e) => (e.target.value)}  value={subscriptionDate} />
                    </Form.Item>
                      </Col>
                 </Row>

                 <Row gutter={16}>
                     <Col span={6} xs={24} md={6}>
                     <Form.Item label="Subscription Date"  name="subscriptionDate">
                        <DatePicker onChange={(value) => setSubscriptionDate(value)} value={timeTable}  />
                    </Form.Item>
                     </Col>
                     <Col span={6} xs={24} md={6}>
                     <Form.Item
                        label="Number Of Stacks"
                        name="NumberOfStacks"
                        rules={[{ required: true, message: 'Please input your subscriptionDate!' }]}
                    >
                        <Input type="number" onChange={(e) => setNumberOfStacks(e.target.value)} value={numberOfStacks}  />
                    </Form.Item>
                     </Col>
                 </Row>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" onClick={onsubmit}>
                         Edit instructor
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = ({edit}) => ({
    fetchedInstructor : edit.instructor
})

const mapDispatchToProps = {
    fetchInstructor,
    editInstructor
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInstructor)
