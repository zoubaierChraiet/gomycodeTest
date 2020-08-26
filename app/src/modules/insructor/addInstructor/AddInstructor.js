import React,{useState} from 'react'
import { connect } from 'react-redux'
import {Form , Input,Button ,Col, DatePicker, Row} from "antd"

import {addInstructor} from "./addInstructor.ducks"

export const AddInstructor = ({addInstructor , history}) => {
    
    const [name,setName] = useState("")
    const [subscriptionDate,setSubscriptionDate] = useState("")
    const [timeTable,setTimeTable] = useState("")
    const [numberOfStacks,setNumberOfStacks] = useState("")

    onsubmit = () => {
        const newInstructor = {
            name,
            subscriptionDate,
            timeTable,
            numberOfStacks : parseInt(numberOfStacks)
        }
        addInstructor(newInstructor) ;
        history.push('/')
    }

    return (

        <div>
            <h1> Add Instructor </h1>
             <Form name="basic">
                 <Row gutter={16} >
                     <Col span={6} xs={24} md={6}> 
                     <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        
                    >
                        <Input onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                      </Col>
                      <Col span={6} xs={24} md={6}>
                      <Form.Item
                        label="Subscription Date"
                        name="subscriptionDate"
                        rules={[{ required: true, message: 'Please input your subscriptionDate!' }]}
                    >
                        <DatePicker onChange={(value) => setSubscriptionDate(value)} />
                    </Form.Item>
                      </Col>
                 </Row>

                 <Row gutter={16}>
                     <Col span={6} xs={24} md={6}>
                     <Form.Item label="Time Table"  name="timeTable">
                        <Input onChange={(e) => setTimeTable(e.target.value)} />

                    </Form.Item>
                     </Col>
                     <Col span={6} xs={24} md={6}>
                     <Form.Item
                        label="Number Of Stacks"
                        name="NumberOfStacks"
                        rules={[{ required: true, message: 'Please input your subscriptionDate!' }]}
                    >
                        <Input type="number" onChange={(e) => setNumberOfStacks(e.target.value)} />
                    </Form.Item>
                     </Col>
                 </Row>
      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={onsubmit}>
          Add instructor
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    addInstructor
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInstructor)
