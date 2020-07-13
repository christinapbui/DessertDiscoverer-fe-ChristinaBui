import React from 'react'
import { Route, Redirect } from "react-router-dom"

// check this; copied from airbnb app

export default function ProtectedRoute({component: Component, ...props}) { // when you render a component, it has to start with a capital letter
    
    
    return (
        props.user ? <Route {...props} render={() => <Component {...props} />} /> : <Redirect to="/" />

    )
}
