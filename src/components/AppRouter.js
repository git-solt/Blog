import React, { useContext } from 'react'
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom'
import { database } from '../firebase/firebase'
import createBrowserHistory from 'history/createBrowserHistory'
import CreatePostPage from './CreatePostPage'
import Dashboard from './Dashboard'
import EditPostPage from './EditPostPage'
import LoginPage from './LoginPage'
import Navbar from './Navbar.js'
import NotFoundPage from './NotFoundPage'
import UserBlogPage from './UserBlogPage'
import AppContext from '../context/app-context'
import PrivateRoute from '../routers/privateRoute'
import PublicRoute from '../routers/publicRoute'

const history = createBrowserHistory()


const AppRouter = () => {

  const { isAuthenticated } = useContext(AppContext)
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <PublicRoute path='/' exact={true} component={LoginPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/create' component={CreatePostPage} />
          <Route path='/edit/:id' component={EditPostPage} />
          <PublicRoute path='/blog/:user' component={UserBlogPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter