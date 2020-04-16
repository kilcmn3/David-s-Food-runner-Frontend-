import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => {
    const checkAuth = () => {
        // const token = localStorage.getItem("userId")
        return false
    }

    return (< Route
        {...rest}
        render={props =>
            checkAuth()
                ? <Component {...props} />
                : <Redirect to='/login-signup' />}
    />
    )
}

export default AuthRoute