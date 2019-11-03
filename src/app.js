
import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import 'normalize.css/normalize.css'
import './styles/globals.scss'
import firebase, { database, auth, isLoggedIn } from './firebase/firebase'
import './firebase/firebase'






firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    database.ref(`users/${user.uid}/posts`).once('value', (snapshot) => {
      const defaultState = []

      snapshot.forEach((cur) => {
        defaultState.push({ id: cur.key, ...cur.val() })
      })

      ReactDOM.render(<MainPage defaultState={defaultState} />, document.querySelector('#appRoot'))
      console.log(auth.currentUser.uid)
    })
  } else {

    ReactDOM.render(<LoginPage />, document.querySelector('#appRoot'))
    console.log('Offline')
  }
})












