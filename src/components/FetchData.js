import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [posts,setposts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data)
            setposts(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
  return (
    <div>
        {
            posts.map(post => <h4 key={post.id}>The title is {post.title}</h4> )
        }
      
    </div>
  )
}
