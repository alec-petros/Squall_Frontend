import React from 'react';
import AuthForm from './AuthForm'


class RegisterForm extends React.Component {
  render(){
    return (
      <div className="register">
        <h3>Register</h3>
        <AuthForm { ...this.props }
          url="http://squall-backend.herokuapp.com/api/v1/users"
          mode="register"
          />
      </div>
    )
  }
}

export default RegisterForm
