import React, { useContext, useState } from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../context/app-context'
import { addPost } from '../generators/actions'



const BlogForm = () => {
  const history = useHistory()

  console.log(history)


  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { dispatchContext } = useContext(AppContext)


  const createHandler = (e) => {
    e.preventDefault()

    

    if (history.location.pathname === '/create') {
      
      dispatchContext(addPost({title, body}))
      history.push('/dashboard')
    }
    else {
      console.log('this is not create')
    }
  }
  return (
    <form>
      <input onChange={(e) => { setTitle(e.target.value.trim()) }} />
      <textarea onChange={(e) => { setBody(e.target.value.trim()) }} />
      <button onClick={createHandler} disabled={!title || !body}>Create</button>
    </form>
  )
}

export default BlogForm