import React, { useContext } from 'react';
import UserContext from "./userContext";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  const { curUser, logout } = useContext(UserContext)

  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Dev Carbon
        </NavLink>

        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/carbonform">Carbon Form</NavLink>
          </NavItem>
          {curUser ? (<>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            {/* TODO logout is different link */}
            < NavItem >
              <NavLink to="/login" onClick={logout}>Logout</NavLink>
            </NavItem>
          </>)
            : null}
        </Nav>
      </Navbar>
    </div >
  );
}

export default NavBar;
