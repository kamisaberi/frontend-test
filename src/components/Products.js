import React from "react"
import { Link, Outlet, useLoaderData } from "react-router-dom"


export function loader(data) {
    let name = data.params.name
    let products = JSON.parse(localStorage.getItem("products"))
    let prd = products.find(product => product.name == name)
    console.log(prd)
    return prd
}

function Products() {

    const data = useLoaderData()
    return (
        <>
            
            <Link to ="/products/0">Add New</Link>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
        </>
    )
}
export default Products