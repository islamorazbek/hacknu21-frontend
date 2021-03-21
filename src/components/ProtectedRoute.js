import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ path, component, ...props }) => {
    const { auth } = useSelector(state => state.auth)

    return auth ? <Route path={path} component={component} {...props} />
        :
        <Redirect to="login" />
}

export default ProtectedRoute
