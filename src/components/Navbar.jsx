import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 "
      style={{ width: "280px", height: "100vh", backgroundColor: '#3D9970' }}
    >
      <span className="fs-4">Kunal Kumar</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "yellow",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "yellow" : "",
            })}
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "yellow",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "yellow" : "",
            })}
            activeClassName="active"
            exact
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "yellow",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "yellow" : "",
            })}
            activeClassName="active"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "red" : "yellow",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "yellow" : "",
            })}
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
