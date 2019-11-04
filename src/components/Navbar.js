import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'
const Navbar = () => (
  <div>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/create">Create a post</Link>
    <Link to={`/blog/${auth.currentUser.uid}`}>Blog</Link>
  </div>
)

export default Navbar