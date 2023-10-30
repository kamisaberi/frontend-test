import React from "react"
import { Link } from "react-router-dom"
class Tablet extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <h1>Tablet</h1>
                <img src={process.env.PUBLIC_URL + "/assets/img/tablet.webp"} width="200" />
            </>
        )

    }
}
export default Tablet