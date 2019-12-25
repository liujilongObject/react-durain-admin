import React, { FC, FormEvent, useEffect } from 'react'
import { Form, Input, Icon, Checkbox, Button, message } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { useDispatch } from 'react-redux'

import { setToken } from '@/store/user/actions'
import './login.scss'

interface LoginFormProps extends FormComponentProps {
  someProps: object
}

const LoginForm: FC<LoginFormProps> = props => {
  const dispatch = useDispatch()

  const { getFieldDecorator, validateFields } = props.form

  useEffect(() => {}, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const { username, password } = values
        if (username === 'admin' && password === 'adminpw') {
          dispatch(setToken({ token: 'TOKEN_TEST' }))
          window.location.href = '#/dashboard'
        } else {
          message.error('Login failed, please login again!')
        }
      } else {
        message.error('Login failed, please login again!')
      }
    })
  }

  return (
    <section className='login-wrapper'>
      <div className='login-container'>
        <p className='login-container-title'>
          <b>Durian Admin</b>
        </p>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0, 0, 0, 0.4)' }} />
                }
                placeholder='Username is admin'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0, 0, 0, 0.4)' }} />
                }
                type='password'
                placeholder='Password is adminpw'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

const Login = Form.create({ name: 'normal_login' })(LoginForm)

export default Login
