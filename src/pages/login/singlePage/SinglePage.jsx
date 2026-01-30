import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SinglePage() {
    let API = "https://fakestoreapi.com"

    // let params = useParams()
    // let id = params.id

    let id = useParams().id

    // let {id} = useParams()

    const [user,setUser]= useState(null)

    useEffect(() => {
        axios.get(API + "/users/" + id)
        .then(res=> setUser(res.data))
        .catch(res=>console.log(res))
    }, [])

    return (
        <div>
            <h1>{user?.email}</h1>
        </div>
    )
}

export default SinglePage