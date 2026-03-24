import { Link } from "react-router-dom";

import styles from "./Header.module.scss"

function Header(){
    return(
        <header className={ styles.wrapper } >
            <Link to="/">
                <img src="assets/logo.jpg" alt="AMITIE OFFICE" />
            </Link>
            <nav style={{ display: "flex", gap: 12 }}>
                <Link to="/">Home</Link>
                <Link to="/locations">Locations</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
            </nav>
            <div>
                <button>Login</button>
                <button>Book a tour</button>
            </div>
        </header>
    )
}

export default Header;