import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex flex-row">
          <img src="/assets/logo.png" className="w8 h-8" alt="Logo" />
          <NavLink
            to="/"
            className="text-2xl font-bold hover:text-gray-300 transition duration-300 pl-2"
          >
            Event Registration
          </NavLink>
        </div>

        <div className="flex space-x-6">
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-green-400 font-semibold"
                  : "text-white hover:text-gray-300"
              } transition duration-300`
            }
          >
            User
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-green-400 font-semibold"
                  : "text-white hover:text-gray-300"
              } transition duration-300`
            }
          >
            Admin
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
