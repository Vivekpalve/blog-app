import React, { useEffect, useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { doLogout, getCurrentUserDetails, isLoggedIn } from "../auth";
import "./CustomNavbar.css";
import userContext from "../context/UserContext";
import { useContext } from "react";
const CustomNavbar = () => {
  const userContextData = useContext(userContext);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetails());
  }, [login]);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: true,
      });
      navigate("/");
    });
  };
  return (
    <div className="navd-bar">
      <Navbar color="dark" expand="md" dark className="px-6">
        <NavbarBrand tag={ReactLink} to="/">
          MyBlog
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="me-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto navbar-static-top" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contactus">
                Contact us
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem />
                <DropdownItem
                  tag={ReactLink}
                  to="/https://vivekpalve.github.io/My_Portfolio/"
                >
                  Portfolio
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/services">
                  Instagram
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/services">
                  Linkdin
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <form className="d-flex" type="submit" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-secondary" type="submit">
              Search
            </button> */}
          </form>
          <Nav navbar>
            {login && (
              <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {user.name}
                  </DropdownToggle>
                  <DropdownMenu end>
                    {/* <DropdownItem /> */}
                    {/* <DropdownItem></DropdownItem> */}
                    <DropdownItem
                      className="logout"
                      tag={ReactLink}
                      to="/user/profile"
                    >
                      profile
                    </DropdownItem>
                    <DropdownItem
                      className="logout"
                      tag={ReactLink}
                      to="/user/dashboard"
                    >
                      dashboard
                    </DropdownItem>
                    <DropdownItem className="logout" onClick={logout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* <NavItem>
                  <NavLink
                    className="logout"
                    tag={ReactLink}
                    to="/user/profile"
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="logout" onClick={logout}>
                    {user.name}
                  </NavLink>
                </NavItem> */}
              </>
            )}
            {!login && (
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                  Sign in
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
