import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Posts = () => {

    const [posts, setPost] = useState()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])
    

    return (
  
        <div>
           {posts ? 
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                    </Link>
                ))
            : window.navigator.onLine ? 'Loading...' : 'You have no internet connection!'}
        </div>        
        
    )
}


export default Posts