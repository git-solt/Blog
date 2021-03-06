import React from 'react'

const SignInWithEmailForm = (props) => {


  return (
    <div>
      {props.errorMessage && <p>{props.errorMessage}</p>}
      <form onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit(e.target.elements.email.value, e.target.elements.password.value)
      }}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default SignInWithEmailForm