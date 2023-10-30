import React from "react"
import { Link } from "react-router-dom"
class Mobile extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <h1>Mobile</h1>
                <img src={process.env.PUBLIC_URL + "/assets/img/mobile.webp"} width="200" />
            </>
        )

    }
}
export default Mobile