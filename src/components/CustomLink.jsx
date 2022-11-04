import { Link, useMatch } from 'react-router-dom'



const CustomLink = ({children, to, ...props}) =>{
    const match = useMatch(to);
    console.log(match)
    console.log(children)
    console.log(props)

    return(
    <Link to={to} {...props} style={{color: match ? 'grey' : 'black'}}>
    {
        children
    }
    </Link>
    )
}

export {CustomLink}