
import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import 'normalize.css/normalize.css'
import './styles/globals.scss'
import firebase, { database, auth} from './firebase/firebase'
import './firebase/firebase'
import createBrowserHistory from 'history/createBrowserHistory'
import Dashboard from './components/Dashboard'
import CreatePostPage from './components/CreatePostPage'
import UserBlogPage from './components/UserBlogPage'


const history = createBrowserHistory()

console.log(history.location.pathname)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    database.ref(`users/${user.uid}/posts`).once('value', (snapshot) => {
      const defaultState = []

      snapshot.forEach((cur) => {
        defaultState.push({ id: cur.key, ...cur.val() })
      })

      ReactDOM.render(<MainPage curId={auth.currentUser.uid} defaultState={defaultState} />, document.querySelector('#appRoot'))

    })
  } else {

    ReactDOM.render(<LoginPage />, document.querySelector('#appRoot'))
    console.log('Offline')

  }
})













