import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/logo3.png";
import { NavbarLinks } from "../../data/navbar-links";
import ProfileDropdown from "../core/Auth/ProfileDropDown";

function Navbar() {
  const { token } = useSelector((state) => state.auth);

  const location = useLocation();

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={100} height={60} loading="lazy" />
          </div>
        </Link>
        {/* Logo */}
        <nav className="hidden md:block">
          {/* Navigation links */}
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p
                    className={` ${
                      matchRoute(link?.path)
                        ? "text-blue-100"
                        : "text-richblack-25"
                    } `}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-x-4 md:flex">
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
