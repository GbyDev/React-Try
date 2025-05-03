import { Link } from 'react-router-dom';


export default function Unlogged_In_Header(){

    return(
        <header>
            <div className="logo">
                <h1>Memory Trove</h1>
            </div>
            <nav>
                <Link to = "/">Welcome</Link>
                <Link to = "/pages/login">Login</Link>
                <Link to = "/pages/register">Register</Link>
                <Link to = "/pages/open_an_album">Open an Album</Link>
            </nav>
        </header>
    );
}