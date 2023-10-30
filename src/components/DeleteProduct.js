import React from "react"
import { Link, Outlet, useLoaderData } from "react-router-dom"


export function loader(data) {
   
}

function DeleteProduct() {

    const data = useLoaderData()
    return (
        <>
            hello world
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
        </>
    )
}
export default DeleteProduct