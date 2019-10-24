import React from 'react'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'
import CreatePostPage from './CreatePostPage'
import Dashboard from './Dashboard'
import EditPostPage from './EditPostPage'
import Navbar from './Navbar.js'
import NotFoundPage from './NotFoundPage'



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/create' component={CreatePostPage} />
        <Route path='/edit/:id' component={EditPostPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter