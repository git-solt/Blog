import React, { useState, useContext, useEffect } from 'react'
import AppContext from '../context/app-context'
import Posts from './Post'
import postSelector from '../selectors/postSelector'






const Bloglist = () => {

  


  const { copy, posts, filter} = useContext(AppContext)
  const selectedPosts = postSelector(posts, filter)



  return (
    <div>
      {selectedPosts.map(({ title, id, createdAt, editedAt, body }) =>
        <Posts
          id={id}
          key={id}
          title={title}
          body={body}
          editedAt={editedAt}
          createdAt={createdAt}
        />)}
    </div>
  )
}

export default Bloglist