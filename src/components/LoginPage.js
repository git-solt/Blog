import React, { useState } from 'react'
import firebase, { googleProvider } from '../firebase/firebase'
import SignUpForm from './SignUpForm'
import SignInWithEmailForm from './SignInWithEmailForm'
const LoginPage = (props) => {


  const [signUp, setSignUp] = useState(false)
  const [emailSignIn, setEmailSignIn] = useState(false)
  const [error, setErrorMessage] = useState('')
  const googleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    // .then((result) => console.log(result.user, result.credential) )
  }

  const signInWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setErrorMessage('No user with this password or email. Please check spelling and provide valid information')
      })
  }

  const createUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  return (

    <div>
      <button onClick={googleSignIn}>Log in with Google</button>
      <h3>Or</h3>
      <button onClick={() => setEmailSignIn(true)}>Your email</button>
      {emailSignIn &&
      <SignInWithEmailForm errorMessage={error} onSubmit={signInWithEmail}/>}
      {!signUp &&
        <div>
          <p>Don't have an account? </p> 
          <a 
            onClick={() => setSignUp(true)} 
            href="#">Sign up with email
          </a>
        </div>}
      {signUp && <SignUpForm onSubmit={createUser} />}
    </div>
  )
}


export default LoginPage