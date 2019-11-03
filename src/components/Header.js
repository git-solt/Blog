import React from 'react'
import firebase from '../firebase/firebase'
const Header = () => (
  <div>
    <h1>Speak</h1>
    <h3>Express what's on your mind</h3>
    <button onClick={() => firebase.auth().signOut()}>Log Out</button>
  </div>
)

export default Header 