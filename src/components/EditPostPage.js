import React, { useContext } from 'react'
import moment from 'moment'
import AppContext from '../context/app-context'
import { database } from '../firebase/firebase'
import { removePost, updatePost } from '../generators/actions'
import PostForm from './PostForm'


const EditPostPage = (props) => {
  const { posts, dispatchContext } = useContext(AppContext)
  const id = props.match.params.id
  const match = posts.find(({ id }) => id === props.match.params.id)

  const deletePost = () => {
    database.ref(`posts/${id}`).remove()
      .then(() => {
        dispatchContext(removePost(id))
        props.history.push('/dashboard')
      })


  }

  const updateHandler = (data) => {

    const editedAt = moment().valueOf()
    database.ref(`posts/${id}`).update({ ...data, editedAt })
      .then(() => {
        dispatchContext(updatePost({
          id,
          updates: { ...data },
          editedAt,
        }))
        props.history.push('/dashboard')
      })


  }

  const usable = { ...match }

  return (
    <div>
      <h2>Edit the post or remove it</h2>
      <PostForm deletePost={deletePost} save={updateHandler} usable={usable} />
    </div>
  )
}

export default EditPostPage