import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

// check this; copied from airbnb app

export default function ProtectedRoute({component: Component, ...props}) { // when you render a component, it has to start with a capital letter
    // const user = useSelector(state => state.user)
    // return user.isAuthenticated
    
    return (
        props.user ? <Route {...props} render={() => <Component {...props} />} /> : <Redirect to="/login" />

    )
}
