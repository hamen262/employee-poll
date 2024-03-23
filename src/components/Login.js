import React from 'react';
import { Form, Input, Button } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Add your login logic here
    };

    return (
        <div>
            <h1>Login</h1>
            <Form onFinish={onFinish}>
                <Form.Item
                    label="Username"
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
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;