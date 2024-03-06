import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { IoMenu, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <IoMenu size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/project">Project</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <a className="btn btn-ghost text-xl">Vcontreras.</a>
          </Link>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <IoSunnyOutline size={20} />
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <IoMoonOutline size={20} />
          </label>
        </div>
      </div>
    </>
  );
};
