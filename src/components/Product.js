import React from "react"
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom"


export function loader(data) {
    if (data.params.id == 0) {
        return { id: 0, name: "", family: "" }
    } else {

    }
}

function Product() {

    const data = useLoaderData()
    const navigate = useNavigate()
    return (
        <>



            name<input type="text" ref={txtName} />
            <br />
            description<input type="text" ref={txtDescription} />
            <br />
            price<input type="text" ref={txtPrice} />
            <br />
            name<input type="button" onClick={() => {

                navigate("/products")
            }} />
        </>
    )
}
export default Product