import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;