import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SinglePage = ()=>{
    const { id } = useParams()
    const [post, setPost] = useState('')
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])
    return(post ?
        <div style={{display: 'flex', flexDirection: 'column', textAlign: "center", width: '50vw'}}>
           <h1> {post.title}</h1>
            {post.body}
        </div> : 'Loading...'
    )
}


export {SinglePage}