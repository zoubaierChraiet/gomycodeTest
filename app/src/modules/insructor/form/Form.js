import React,{useState,useEffect} from 'react'
import {Form ,Input,Button, DatePicker, Row, Col} from "antd"
import {Link} from 'react-router-dom'
import ImageUpload from "../../../components/ImageUpload"

function InstructorForm({value,onChange,onSubmit,mode}) {

    const [readOnly,setReadOndly]=useState(true)
    
    const [form] = Form.useForm()

    const onFinish = () => {
        onSubmit()
        setReadOndly(true)
    }

    const onValuesChange = (value) => {
        onChange(value)
    }

    const onModify = () => {
        setReadOndly(false)
    }

    useEffect(() => {
        form.setFieldsValue(value)
    },[value])

    return (
        <React.Fragment>
                <Form form={form} onFinish={onFinish} onValuesChange={onValuesChange} >
                        <Row>
                            <Form.Item label="Photo" name="photo" rules={[{ required: true ,message:"Photo is required" }]}  >
                                <ImageUpload disabled={readOnly&&mode==="edit"} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label="Name" name="name" rules={[{ required: true,message:"Name is required" }]}  >
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    disabled={readOnly&&mode==="edit"}
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label="Number Of Stacks" name="numberOfStacks" rules={[{ required: true,message:"Number Of Stacks is required" }]}  >
                                <Input
                                    type="number"
                                    placeholder="Number Of Stacks"
                                    disabled={readOnly&&mode==="edit"}
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label="Subscription Date" name="subscriptionDate" rules={[{ required: true , message:"Subscription Date is required" }]}  >
                                <DatePicker disabled={readOnly&&mode==="edit"} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label="Time table" name="timeTable" rules={[{ required: true , message:"Time table is required" }]}  >
                                <Input
                                    type="text"
                                    placeholder="Time table"
                                    disabled={readOnly&&mode==="edit"}
                                />
                            </Form.Item>
                        </Row>
                    
                        <Row gutter={16}>
                            <Col>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" disabled={readOnly&&mode==="edit"}>
                                        Save
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col>
                                {mode === "edit" && (
                                <Row>
                                    <Form.Item >
                                        <Button type="primary" onClick={onModify}>
                                            Edit
                                        </Button>
                                    </Form.Item>
                                </Row>
                                )}
                            </Col>
                            <Col>
                                <Row>
                                    <Link to="/">
                                        <Button type="primary">
                                            Back
                                        </Button>
                                    </Link>
                                </Row>
                            </Col>
                        </Row>
                </Form>
        </React.Fragment>
    )
}


export default InstructorForm
