import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Sizef's Blog</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "White",
                    backgroundColor: "#2a9ed3",
                    borderRadius: "8px",
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;