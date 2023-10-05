import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/lists">Articles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;