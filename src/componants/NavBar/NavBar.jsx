import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className="px-7 py-2" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="px-7 py-2" to="/listedBooks">
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink className="px-7 py-2" to="/pagesToRead">
                Pages To Read
              </NavLink>
            </li>
            <li>
              <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </li>
            <li>
              <a className="btn bg-[#23BE0A] text-white me-4">Sign In</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost text-3xl font-black">Book Vibe</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menuuu menu-horizontal ">
          <li>
            <NavLink className="px-10 py-2" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="px-10 py-2" to="/listedBooks">
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink className="px-10 py-2" to="/pagesToRead">
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="hidden md:inline">
          <a className="btn  py-3 inline  bg-[#23BE0A] text-white me-4">
            Sign In
          </a>
          <a className="btn  py-3 inline  bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
