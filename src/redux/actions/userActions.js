const loginWithEmail = (email, password) => async dispatch => {
    const res = await fetch(`http://localhost:5000/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    })
    // console.log(res)
    const body = await res.json()
    console.log(body)
    localStorage.setItem("token", body.data.token)
    dispatch({
        type: "LOGIN",
        payload: body.data.user
    })
}

const fetchUser = () => async dispatch => {
    if(!localStorage.getItem()) {
        // FINISH THIS
        dispatch({ type: "APP_LOADED" })
        return
    }
    const res = await fetch(`http://localhost:5000/users/me`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    })
    const body = await res.json()
    console.log(body)
    localStorage.setItem("token", body.data.token)
    dispatch({
        type: "LOGIN",
        payload: body.data
    })
    dispatch({ type: "APP_LOADED" }) 
}

export {
    loginWithEmail,
    fetchUser
}