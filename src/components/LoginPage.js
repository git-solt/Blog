import React, { useState } from 'react'
import firebase, { googleProvider } from '../firebase/firebase'
import SignUpForm from './SignUpForm'
import SignInWithEmailForm from './SignInWithEmailForm'
const LoginPage = (props) => {


  const [signUp, setSignUp] = useState(false)
  const [emailSignIn, setEmailSignIn] = useState(false)
  const googleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    // .then((result) => console.log(result.user, result.credential) )
  }

  const signInWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
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
      <SignInWithEmailForm onSubmit={signInWithEmail}/>}
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