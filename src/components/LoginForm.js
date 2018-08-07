import React from 'react'
import AuthForm from './AuthForm'
import { Redirect } from 'react-router'

export default class LoginForm extends React.Component {

  render(){
    return (
      <div className="register">
        <h3>Log In</h3>
          { this.props.auth ? <Redirect to="/" /> : null }
          <AuthForm { ...this.props }
           url="https://squall-backend.herokuapp.com/sessions"
           mode="login"
           />
      </div>
    )
  }
}
