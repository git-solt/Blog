import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({ title, body, createdAt, editedAt, id }) => (
  <Link to={`edit/${id}`}>
    <h2>{title}</h2>
    <div>
      <p>{body}</p>
      <footer>
        {moment(createdAt).format('MMMM Do YYYY, h:mm a')}
        {editedAt && <p>Last edited: {moment(editedAt).fromNow()}</p>}
      </footer>
    </div>
  </Link>
)

export default Posts