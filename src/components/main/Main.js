import React from "react"
import Login from '../auth/Login'
class Main extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <h1>Main Page</h1>
                <Login/>
            </>
        )

    }
}
export default Main