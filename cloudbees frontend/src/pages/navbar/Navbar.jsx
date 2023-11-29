// react icons
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

// logo image
import logo from "../../assest/logo/CBT_logo.png";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  function aside() {
    return setSideBar(!sidebar);
  }
  const CoursesAlert = () => {
    alert(
      "Thank you for choosing us for your carrier growth, you will redirected to our academy website"
    );
    window.location.href = "https://oceanacademy.co.in/";
  };

  return (
    <>
      {/* adding sidebar */}
      {sidebar && <Sidebar onclose={aside} alertmsg={CoursesAlert} />}

      {/* started navbar */}
      <nav className="sticky top-0 w-full bg-secondary py-2 z-40">
        <section className="max-w-screen-xl mx-auto flex justify-between items-center py-2 w-[95%]">
          <div>
            <img
              className="max-w-[90px]"
              src={logo}
              alt="not found"
              width="100%"
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex text-primary font-medium">
              <li className="p-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  Service
                </NavLink>
              </li>

              <li className="group relative p-3">
                <a
                  className="flex items-center gap-1 active:text-white"
                  onClick={CoursesAlert}
                >
                  Courses
                </a>
              </li>
              <li className="p-3">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  Career
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="p-3">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="text-primary font-semibold text-3xl max-md:block hidden"
            onClick={aside}
          >
            <AiOutlineMenu />
          </div>
        </section>
      </nav>
    </>
  );
};

export const Sidebar = (props) => {
  const { alertmsg } = props;
  return (
    <main
      className="bg-mediumgrey shadow-md z-50 h-screen max-md:block hidden fixed right-0 px-4 top-0 py-2 transition-colors"
      style={{ transitionDelay: "2s" }}
    >
      <AiFillCloseCircle
        className="text-3xl my-3 text-primary"
        onClick={props.onclose}
      />
      <div className="gap-5 mt-8 ">
        <ul className="flex flex-col w-48 pl-5 gap-4 text-primary text-xl">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li className="active:text-white flex flex-col gap-2">
            <a
              className="flex items-center active:text-white"
              onClick={alertmsg}
            >
              Courses{" "}
            </a>
          </li>

          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};
