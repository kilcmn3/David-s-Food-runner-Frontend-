import React from "react"
import { Redirect } from "react-router-dom"

const Logout = (props) => {
    localStorage.removeItem("userId")
    return <Redirect to="/" />
}

export default Logout