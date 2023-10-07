import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6">
      <Logo />

      <ul className="list-none flex items-center space-x-12">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
