// react icons
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiStatusOnline } from "react-icons/hi";
import { MdOutlineOfflinePin } from "react-icons/md";

// logo image
import logo from "../../assest/logo/cloud bees.svg";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  function aside() {
    return setSideBar(!sidebar);
  }

  return (
    <>
      {/* adding sidebar */}
      {sidebar && <Sidebar onclose={aside} />}

      {/* started navbar */}
      <nav className="sticky top-0 w-full bg-mediumgrey z-40">
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
                <a className="active:text-white">
                  About
                </a>
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
                <a className="flex items-center gap-1 active:text-white">
                  Courses
                  <span>
                    <IoMdArrowDropdown className="text-xl" />
                  </span>
                </a>
                <Dropdown />
              </li>
              <li className="p-3">
                <a>Career</a>
              </li>
              <li className="p-3">
                <NavLink>Portfolio</NavLink>
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
  const [onshow, setOnshow] = useState(false);
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
            <a
              href="#about"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : ""
              }
            >
              About
            </a>
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
          <li
            className="active:text-white flex flex-col gap-2"
            onClick={() => {
              setOnshow(!onshow);
            }}
          >
            <a className="flex items-center active:text-white">
              Courses{" "}
              <span>
                <IoMdArrowDropdown className="text-3xl" />
              </span>{" "}
            </a>
          </li>
          {onshow && (
            <div>
              <ul className=" bg-mediumgrey text-white text-lg pl-2">
                <li className="mb-2">
                  <a
                    href="https://oceanacademy.co.in/onlinecourses"
                    target="_blank"
                    className="flex items-center gap-1"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <HiStatusOnline />
                    </span>{" "}
                    Online Courses
                  </a>
                </li>

                <li>
                  <a
                    href="https://oceanacademy.co.in/offlinecourses"
                    target="_blank"
                    className="flex items-center gap-1"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <MdOutlineOfflinePin />
                    </span>{" "}
                    Offline Courses
                  </a>
                </li>
              </ul>
            </div>
          )}
          <li>
            <NavLink>Career</NavLink>
          </li>
          <li>
            <NavLink>Portfolio</NavLink>
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

export const Dropdown = () => {
  return (
    <div className="group-hover:block absolute hidden shadow-2xl top-12">
      <ul className="w-[150px] bg-white text-primary shadow">
        <li className="py-2 text-center">
          <a
            href="https://oceanacademy.co.in/onlinecourses"
            target="_blank"
            className="border-b py-1 px-3"
            rel="noopener noreferrer"
          >
            Online Courses
          </a>
        </li>
        <li className="py-2 text-center">
          <a
            href="https://oceanacademy.co.in/offlinecourses"
            target="_blank"
            className="py-1 px-3"
            rel="noopener noreferrer"
          >
            Offline Courses
          </a>
        </li>
      </ul>
    </div>
  );
};
