import { NavLink, Outlet } from "react-router-dom"
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink className={({ isActive }) => isActive ? `${styles.activeLink}` : `${styles.link}`} to="posts">Poosts</NavLink>
                <NavLink className={({ isActive }) => isActive ? `${styles.activeLink}` : `${styles.link}`} to="todos">Todos</NavLink>
                <NavLink className={({ isActive }) => isActive ? `${styles.activeLink}` : `${styles.link}`} to="users">Users</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation