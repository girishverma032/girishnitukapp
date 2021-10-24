import React, {useState} from 'react';
import {connect} from 'react-redux';
import {userPostFetch } from '../../redux/Action';
import { Form, Input, Button } from 'antd';
const Signup =(props)=>{
    const [data, setData]= useState({
        username: '',
        email: '',
        name: '',
        contact: '',
        website: ''
    });
    const {userPostFetch} = props;
    const onFinish = (values) => {
        setData({...values});
        userPostFetch(data);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const handleChange = event => {this.setState({ [event.target.name]: event.target.value})}
    // const handleSubmit = event => {event.preventDefault();this.props.userPostFetch(this.state)};

    return (
        <div style={{display: 'flex'}}>
            <div>
                <Form name="basic" labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}
                // initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type='text' />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type= 'email'/>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input type='text' />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="contact"
                    rules={[{ required: true, message: 'Please input your contact!' }]}
                >
                    <Input type='number' />
                </Form.Item>
                <Form.Item
                    label="Website"
                    name="website"
                    rules={[{ required: true, message: 'Please input your contact!' }]}
                >
                    <Input type='url' />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Submit !! </Button>
                </Form.Item>
                </Form>
            </div>
            <div>

            </div>
        </div> 
    )
}
const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);
