import React, { useContext } from 'react' 
import AppContext from '../context/app-context'
import Posts from './Post'

const Bloglist = () => {

  const {posts} = useContext(AppContext)
  

  return (
    <div>
      {posts.map(({title, id, createdAt, editedAt, body}) => 
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