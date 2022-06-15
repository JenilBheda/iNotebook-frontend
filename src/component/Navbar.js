import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login")
  }

  const handleHome = () => {
    navigate("/")
  }

  const handleShowNotes = () => {
    localStorage.getItem('token')
    navigate("/ShowNotes")
  }
  // the location is used for the navbar button like (Home or About) so the user can know he is on which page.
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  return (
    <>
      <nav className="navbar">
        {/* <div className="navButtons">
          <ul>
            <li>
              <Link className={` navBtnText ${location.pathname === "/" ? "active" : ""}`} to="/">
                Home
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="navbar-brand">
          <Link className="navbar-logo" to={"/"}>iNotebook</Link>
        </div>
      </nav>

      <div className="navBody">
        <div className="navSection">
          <div className="navContainer">
            <div className="navBtn">
              {!localStorage.getItem('token') ? <form className="loginForm">
                <Link className={` loginBtn ${location.pathname === "/login" ? "active" : ""}`} to={"/login"} role="button">Login</Link>
                <Link className="signUpBtn" to={"/signup"} role="button">Sign Up</Link>

                {/* If I need more buttons when user is logged in the add buttons inside the div */}
              </form> : <div className="navLoginBtns">  <button onClick={handleShowNotes} className="showNotesBtn">Notes</button> 
                <button onClick={handleHome} className="HomeBtn">Home</button> <button onClick={handleLogout} className="logoutBtn">Logout</button></div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
