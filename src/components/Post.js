import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({ title, body, createdAt, editedAt, id }) => (
  <Link to={`edit/${id}`}>
    <h2>{title}</h2>
    <div>
      <p>{body}</p>
      <footer>
        {createdAt}
        {editedAt && editedAt}
      </footer>
    </div>
  </Link>
)

export default Posts