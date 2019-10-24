import React, { useContext, useReducer, useEffect, useState } from 'react'

import AppContext from '../context/app-context'
import BlogForm from './BlogForm'

const EditPostPage = () => {
  const {posts} = useContext(AppContext)

  console.log('from edit page -> ', posts[0])
  return (
    <div>
      Edit
    </div>
  )
}

export default EditPostPage