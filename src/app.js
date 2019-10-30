
import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from './components/MainPage'
import 'normalize.css/normalize.css'
import './styles/globals.scss'
import { database } from './firebase/firebase'



const FirebaseTest = () => (
  <div>Firebase</div>
)

console.log(database.ref('posts/-LsSwxqt3d4ZStCi4TWq').once('value', (snap) => {
  return snap.val().title
}))

database.ref('posts').once('value', (snapshot) => {
  const defaultState = []
  snapshot.forEach((cur) => {
    defaultState.push({ id: cur.key, ...cur.val() })
  })

  ReactDOM.render(<MainPage defaultState={defaultState}/>, document.querySelector('#appRoot'))

})







