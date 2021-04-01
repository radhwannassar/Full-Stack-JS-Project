import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="./photo/logo.png" alt="" width="120" height="64" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/ConnectedHome"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Categories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/FittingRoom"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Fittingroom
              </Link>
            </li>
          </ul>
          <Button buttonStyle="btn--outline">
            <Link to="/Login" onClick={closeMobileMenu} className="aaaa">
              Login
            </Link>
          </Button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
// import { Link } from "react-router-dom";

// const Navbar = ({ isConnected }) => {
//   //console.log({ isConnected });

//   var loginButton;
//   if (isConnected) {
//     loginButton = "Logout";
//   } else {
//     loginButton = "Login";
//   }

//   return (

//       <nav>
//         <Link to="/ConnectedHome">ConnectedHome</Link>
//          <Link to="/Categories">Category</Link>
//          <Link to="/">Home</Link>
//          <Link to="/Register">Register</Link>
//          <Link to="/Login"> {loginButton}</Link>
//          <Link to="/Fittingroom"> Fittingroom</Link>
//       </nav>

//   );
// };

// export default Navbar;

// <div>
//   {isConnected ? (
//     <nav>
//       <Link to="/ConnectedHome">Home</Link>
//       <Link to="/Categories">category</Link>
//     </nav>
//   ) : (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/Register">Register</Link>
//       <Link to="/Login"> {loginButton}</Link>
//     </nav>
//   )}
// </div>

// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TRVL
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/Login'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/Categories'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/Register'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
