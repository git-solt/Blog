import React, { useContext, useState } from 'react'
import moment from 'moment'
import { addPost } from '../generators/actions'
import AppContext from '../context/app-context'
import { auth, database } from '../firebase/firebase'
import PostForm from './PostForm'





const CreatePostPage = (props) => {
  
  const { posts, dispatchContext } = useContext(AppContext)
  const [error, setError] = useState('')
  const authId = auth.currentUser.uid
  const addHandler = ({ title, body }) => {

    title = title.trim()
    body = body.trim()
    const post = {
      title,
      body,
      createdAt: moment().valueOf()
    }
    if (!posts.find((cur) => cur.title === title)) {
      database.ref(`users/${authId}/posts`).push(post)
        .then((ref) => {
          dispatchContext(addPost({
            id: ref.key,
            ...post
          }))
          props.history.push('/dashboard')
        })
    } else {
      setError('Title allready exist. Please pick an original title')
    }



  }



  return (
    <div>
      <h2>Create a Post</h2>
      {error && <p>{error}</p>}
      <PostForm save={addHandler} />
    </div>
  )
}
export default CreatePostPage