import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className="App__link-controller">
                <NavLink to="/">Main</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About us</NavLink>
            </div>
            <Outlet></Outlet>
            <footer>© 2022 All Rights Reserved</footer>
        </>
    )
}

export { Layout }