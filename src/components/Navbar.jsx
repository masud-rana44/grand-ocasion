import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Logo } from "./Logo";
import { User } from "./User";
import { Button } from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((open) => !open);

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-[#d880b2] transition">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-[#d880b2] transition">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-[#d880b2] transition">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full h-[88px] flex items-center justify-between p-6 bg-[#101010] z-50">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div
        onClick={handleToggle}
        className="text-white cursor-pointer md:hidden"
      >
        {!isOpen ? (
          <BiMenu size={26} className="text-white" />
        ) : (
          <AiOutlineClose size={26} className="text-white" />
        )}
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col absolute -bottom-[176px] left-0 items-center bg-[#101010] space-y-5 pt-8 pb-14 w-full font-medium text-sky-100 z-50">
          {links}
        </ul>
      )}

      <ul className="list-none items-center space-x-12 text-sky-100  font-medium text-lg hidden md:flex">
        {links}
      </ul>
      {user ? (
        <div className="flex items-center gap-x-2">
          <User />
          <FiLogOut
            size={22}
            onClick={logOut}
            className="text-white font-medium cursor-pointer"
          />
        </div>
      ) : (
        <div>
          <Button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-[#66b8dd] via-[#8e7fe9] to-[#e17497]"
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};
