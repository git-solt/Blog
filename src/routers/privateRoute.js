import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppContext from '../context/app-context'


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AppContext)

  return (
    <Route {...rest}>
      {!isAuthenticated && <Redirect to="/" />}
      <Component/>
    </Route>
  )
}

export default PrivateRoute