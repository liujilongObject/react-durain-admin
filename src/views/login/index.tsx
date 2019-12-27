import React, { FC, FormEvent, useEffect, useState } from 'react'
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
  const [loading, setLoading] = useState(false)

  const { getFieldDecorator, validateFields } = props.form

  useEffect(() => {}, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    validateFields((err, values) => {
      try {
        if (!err) {
          console.log('Received values of form: ', values)
          const { username, password } = values
          if (username === 'admin' && password === 'adminpw') {
            dispatch(setToken({ token: 'TOKEN_TEST' }))
            setTimeout(() => {
              window.location.href = '#/dashboard'
            }, 2000)
          } else {
            message.error('Login failed, please login again!')
            throw Error('Login failed, please login again!')
          }
        } else {
          message.error('Login failed, please login again!')
          throw Error('Login failed, please login again!')
        }
      } catch (error) {
        setLoading(false)
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
              loading={loading}
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
