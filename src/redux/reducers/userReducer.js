const init = {
    isAuthenticated: false
}

export default (state=init, {type, payload}) => { // reducer has 2 arguments: 1st is state, 2nd is dispatch object
    switch (type) {
        case "LOGIN":
            return {...state, ...payload, isAuthenticated: true}
        case "LOGOUT": 
            return {...init }
        default: 
            return state
    }
}