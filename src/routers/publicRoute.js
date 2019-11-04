import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AppContext from '../context/app-context'


const PublicRoute = ({component: Component, ...rest}) => {
  const { isAuthenticated } = useContext(AppContext)

  return (
    <Route {...rest}>
      <Component />
      {isAuthenticated && <Redirect to="/dashboard" />}
    </Route>
  )
}

export default PublicRoute