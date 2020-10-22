import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from "react-router-dom";
import {Redirect} from "react-router";
import {Home} from "../index";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const loginStyle = {
    position: "absolute",
    top: "35%",
    left: "40%",
  }
function Login(props) {
    const [loginSucess, setLoginSucess] = useState(false);
    const onFinish = values => {
        console.log('Success:', values);
        setLoginSucess(true);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    if(loginSucess) return <Redirect to="/homePage"/>;

    return (
        <div style={loginStyle}>
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
}

export default Login;