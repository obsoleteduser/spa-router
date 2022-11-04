import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const SinglePage = ()=>{
    const { id } = useParams()
    const [post, setPost] = useState('')
    const navigate = useNavigate();

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})


    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [id])
    return(post ?
        <div style={{display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: "center", alignItems: 'center', textAlign: "center", width: '50vw'}}>
            <button style={{background: 'green', border: 'black', color: 'white', padding: '10px', width: '80px', borderRadius: '3px'}} onClick={goBack}>Back</button>
            <button style={{background: 'brown', border: 'black', color: 'white', padding: '10px', width: '80px', borderRadius: '3px'}} onClick={goHome}>Home</button>
           <h1> {post.title}</h1>
            {post.body}
            <Link style={{width: '60px', color: 'white', padding: '10px', background: 'red', borderRadius: '3px'}} to={`/posts/${id}/edit`}>Edit</Link>
        </div> : window.navigator.onLine ? 'Loading...' : 'You have no internet connection!'
    )
}


export {SinglePage}