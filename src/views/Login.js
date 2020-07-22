import React from 'react'
import { useDispatch } from "react-redux"
import {loginWithEmail} from "../redux/actions/userActions"

const Login = (props) => {
    const dispatch = useDispatch()

    
    return (
        <div>
            <h1>This is the Login page</h1>
            {/* <button onClick={dispatch({
                type: "LOGIN",
                payload: {name: "khoa"}
            })}>Change state</button> */}
            <button onClick={()=> dispatch(loginWithEmail("khoa@cs.vn", "123"))}>Example change state</button>
        </div>
    )
}

export default Login
