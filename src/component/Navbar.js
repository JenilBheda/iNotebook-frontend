import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props) => {
  const [openHamburger, setOpenHamburger] = useState(false);

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

      {/* New Navbar */}


















      <nav className="navbar">
        <div className="navLogoSec">
          <div className="navLogo">
            <Link className="navbar-logo" to={"/"}>iNotebook</Link>
          </div>
        </div>
        <div className="phoneNav">
          <i onClick={() => setOpenHamburger(!openHamburger)} className="fa-solid fa-bars"></i>
        </div>
      </nav>
      {openHamburger &&
        <div className="navbar-brand">
          <div className="phone-nav-expand">

          {!localStorage.getItem('token') ? <form className="phoneLoginForm">

            <Link className={` loginBtn ${location.pathname === "/login" ? "active" : ""}`} to={"/login"} role="button">Login</Link>
            <Link className="signUpBtn" to={"/signup"} role="button">Sign Up</Link>

            {/* If I nee  d more buttons when user is logged in the add buttons inside the div */}
          </form> : <div className="phoneNavLoginBtns">  <button onClick={handleShowNotes} className="showNotesBtn">Notes</button>
            <button onClick={handleHome} className="HomeBtn">Home</button> <button onClick={handleLogout} className="logoutBtn">Logout</button></div>}
          </div>
        </div>}

      <div className="navBody">
        <div className="navSection">
          <div className="navContainer">
            <div className="navBtn">
              {!localStorage.getItem('token') ? <form className="loginForm">

                <Link className={` loginBtn ${location.pathname === "/login" ? "active" : ""}`} to={"/login"} role="button">Login</Link>
                <Link className="signUpBtn" to={"/signup"} role="button">Sign Up</Link>

                {/* If I nee  d more buttons when user is logged in the add buttons inside the div */}
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
