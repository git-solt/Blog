import React, {useReducer, useEffect, useState} from 'react'
import blogReducer from '../reducers/blog-reducer'

const CreatePostPage = () => {
  console.log('app up')

  //Ser ikke ut som det er nødvendig med noe annet enn lokal state i denne komponenten.
  //bruker useReducer for å få tilgang til dispatch, men kontekst er like greit. 
  const [state, dispatch ] = useReducer(blogReducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  
  console.log(state)
  
  useEffect(() => {
    dispatch({type:'ADD_POST', title})
  }, [title])
  
 
  useEffect(() => dispatch({type: 'UPDATE_POST', id: '23a5', updates : {
    title: body,
    body: title
  }}),[body])
  

  return (
    <form>
      <input onChange={(e) => {setTitle(e.target.value)}}/>
      <textarea onChange={(e) => {setBody(e.target.value)}}/>
      <button >Create</button>
    </form>
  )
}
export default CreatePostPage