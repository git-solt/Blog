import React from 'react'
import firebase from '../firebase/firebase'
const Header = () => (
  <div className="header">
    <div className="header__title">
      <h1>Speak</h1>
      <h3>Express what's on your mind</h3>
    </div>
    <button onClick={() => firebase.auth().signOut()}>Log Out</button>
  </div>
)

export default Header 