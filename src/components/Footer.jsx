import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#101010] shadow ">
      <div className="w-full container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src="../logo.svg" className="h-8 mr-3" alt="Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 GrandOccasions. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
