import * as firebase from 'firebase'

import {addExpense} from '../generators/actions'

var firebaseConfig = {
  apiKey: "AIzaSyC25biXrClPd4FzyNSPNMZcJeUQAYsIQ_w",
  authDomain: "blog-786ee.firebaseapp.com",
  databaseURL: "https://blog-786ee.firebaseio.com",
  projectId: "blog-786ee",
  storageBucket: "blog-786ee.appspot.com",
  messagingSenderId: "1022061227164",
  appId: "1:1022061227164:web:9ac88852dbfecc3be75159",
  measurementId: "G-YT718RVX37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database()




// database.ref().remove()

// const userId = 'xyeksay'

// const userId2 = '2jeldw23'
// const userId3 = 'sasafwe3'


// database.ref(`users/${userId}`).set({posts: ''})



// database.ref(`users/${userId}/posts`).push({
//   title: 'first one',
//   body: 'looooong body',
//   createdAt: 932940,

// })

// database.ref(`users/${userId2}/posts`).push({
//   title: 'new post',
//   body: 'shorter body',
//   createdAt: 932940,

// })

// database.ref(`users/${userId}/posts`).push({
//   title: 'my second blog',
//   body: 'please work',
//   createdAt: 932940,

// })

// database.ref(`users/${userId}/posts`).update({'-LsCti_xU66VwQg3kgr': {
//   title: 'updated'
// }})

// database.ref(`users/${userId2}/posts/-kwewjcnt`).set({
//   title: 'HardCoded',
//   body: 'From hardcortded',
//   createdAt: 32322
// })








