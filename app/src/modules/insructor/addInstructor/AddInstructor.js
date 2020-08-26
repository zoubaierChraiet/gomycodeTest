import React,{useState} from 'react'
import { connect } from 'react-redux'
import {Form , Input,Button ,Checkbox, DatePicker} from "antd"

import {addInstructor} from "./addInstructor.ducks"

export const AddInstructor = ({addInstructor}) => {
    
    const [name,setName] = useState("")
    const [subscriptionDate,setSubscriptionDate] = useState("")
    const [timeTable,setTimeTable] = useState("")
    const [numberOfStacks,setNumberOfStacks] = useState("")

    onsubmit = () => {
        const newInstructor = {
            name,
            subscriptionDate,
            timeTable,
            numberOfStacks
        }
        addInstructor(newInstructor) ;
    }

    return (
        <div>
             <Form name="basic">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input onChange={(value) => setName(value)} />
      </Form.Item>

      <Form.Item
        label="Subscription Date"
        name="subscriptionDate"
        rules={[{ required: true, message: 'Please input your subscriptionDate!' }]}
      >
        <Input onChange={(value) => setSubscriptionDate(value)} />
      </Form.Item>

      <Form.Item label="Time Table"  name="timeTable">
        <DatePicker onChange={(value) => setTimeTable(value)} />
      </Form.Item>

      <Form.Item
        label="Number Of Stacks"
        name="NumberOfStacks"
        rules={[{ required: true, message: 'Please input your subscriptionDate!' }]}
      >
        <Input type="number" onChange={(value) => setNumberOfStacks(value)} />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={onsubmit}>
          Submit
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
