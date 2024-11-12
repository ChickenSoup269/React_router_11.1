import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function HeaderNavbar() {
  return (
    <header className="header-navbar">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/news" className="nav-link">
          News
        </Link>
        <Link to="/todo" className="nav-link">
          Todo
        </Link>
        {/* <NavLink to="/" exact className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/news" className="nav-link" activeClassName="active">
          News
        </NavLink>
        <NavLink to="/todo" className="nav-link" activeClassName="active">
          Todo
        </NavLink> */}
      </nav>
    </header>
  )
}
