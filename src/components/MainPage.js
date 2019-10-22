import React, { useReducer, useEffect } from 'react'
import AppRouter from './AppRouter'
import Header from './Header'
import { addPost } from '../generators/actions'
import AppContext from '../context/app-context'
import postReducer from '../reducers/blog-reducer'




const MainPage = () => {
  const [posts, dispatchContext] = useReducer(postReducer, [])

  useEffect(() => {
    dispatchContext(addPost({
      title: 'Dummypost 1',
      body: 'Dummy body'
    }))

    dispatchContext(addPost({
      title: 'Dummypost 2',
      body: 'My second post for testing'
    }))
  }, []

  )



  console.log(posts)

 


  return (
    <div>
      <AppContext.Provider value={{
        posts,
        dispatchContext
      }}>
        <Header />
        <AppRouter />
      </AppContext.Provider>
    </div>
  )
}

export default MainPage 