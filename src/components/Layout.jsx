import { NavLink, Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

function Layout() {

    const checkActivity = ({isActive})=>{
        return isActive ? 'active-link' : ''
    }

    return (
        <>
            <div className="App__link-controller">
                <CustomLink className={checkActivity} to="/">Main</CustomLink>
                <CustomLink className={checkActivity} to="/posts">Posts</CustomLink>
                <CustomLink className={checkActivity} to="/about">About us</CustomLink>
            </div>
            <Outlet></Outlet>
            <footer>© {new Date().getFullYear()} All Rights Reserved</footer>
        </>
    )
}

export { Layout }