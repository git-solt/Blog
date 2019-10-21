import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/create">Create a post</Link>    
  </div>
)

export default Navbar