import './css/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="header">
                <h1>Todo App</h1>
            </div>
            <div className="socialLinks">
                <Link to="/aboutMe">About Me</Link>
            </div>
        </div> 
    );
}
 
export default Navbar;