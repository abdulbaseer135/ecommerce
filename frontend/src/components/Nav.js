import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img 
      className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TS6gWMm7vTIYA7qvIsISp4JB5aP-VXjSeYRMMa_2ddmNoRCg-dhj4k9UIb1weI0GhxE&usqp=CAU" />
      {auth ? (
        <ul className="Nav-url">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add">add Product</Link>
          </li>
          {/* <li>
            <Link to="/update">Update</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout}  to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="Nav-url Nav-right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
