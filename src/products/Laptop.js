import React from "react"
import { Link } from "react-router-dom"
class Laptop extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <h1>Laptop</h1>
                <img src={process.env.PUBLIC_URL + "/assets/img/laptop.jpg"} width="200" />
            </>
        )
    }
}
export default Laptop