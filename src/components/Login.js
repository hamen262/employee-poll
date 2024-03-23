import React from 'react';
import { Form, Input, Button } from 'antd';

const Login = (props) => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Add your login logic here
    };

    return (
        <div  style={{ marginLeft: '50px', textAlign: 'center' }}>
            <h1>Login</h1>
            <Form onFinish={onFinish}
            layout='vertical'
           >
                <Form.Item
                    label="User"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;