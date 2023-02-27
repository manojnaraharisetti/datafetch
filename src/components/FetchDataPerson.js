import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idfrombtnclick,setIdfrombtnclick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombtnclick}`)
        .then((response) => {
            console.log(response.data)
            setPost(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[idfrombtnclick])
    const handlepost = () => {
        setIdfrombtnclick(id)
      };
  return (
    <div>
        {/* <input type="text" value={id} onChange={(event) => setId(event.target.value)}/> */}
        <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
        <button  onClick={handlepost}>Submit</button>
        {post.title}
        
    </div>
  )
}
