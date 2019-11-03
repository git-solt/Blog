import React from 'react'

const SignUpForm = (props) => {


  return (
    <div>
      <h2>Fill out form to register</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit(e.target.elements.email.value, e.target.elements.password.value)
      }}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
      </form>
    </div>
  )
}

export default SignUpForm