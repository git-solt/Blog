import React, { useContext, useReducer, useEffect, useState } from 'react'
import { addPost, removePost, updatePost } from '../generators/actions'
import AppContext from '../context/app-context'
import BlogForm from './BlogForm'
import blogReducer from '../reducers/blog-reducer'


const CreatePostPage = () => {
  

  //Ser ikke ut som det er nødvendig med noe annet enn lokal state i denne komponenten.
  //bruker useReducer for å få tilgang til dispatch, men kontekst er like greit. 
  const [state, dispatch] = useReducer(blogReducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { posts, dispatchContext } = useContext(AppContext)
  console.log('posts: ', posts)

  console.log(state)

  useEffect(() => {
    dispatch(addPost({ title }))
  }, [title])


  // useEffect(() => dispatchContext(updatePost({ id: '23a1', updates: { title: '!!!', body } })), [body])

  useEffect(() => {
    dispatchContext(updatePost({ id: '23a1', updates: { body: 'Damns son' } }))
  }, [body])

  

  return (
    <div>
      <h2>Create a Post</h2>
      <BlogForm />
    </div>
  )
}
export default CreatePostPage