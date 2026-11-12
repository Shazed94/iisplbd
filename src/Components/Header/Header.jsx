/* eslint-disable react/no-unescaped-entities */
import { Fragment, useEffect, useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/homepage/IISPL_logo.png";
import { DownloadIcon } from "../SvgComponent";

const Header = () => {
  // Burger menus
  const [active, setActive] = useState(false);
  const navMenuBtn = useRef();
  const navMenu = useRef();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Determine the scroll distance when the header should become sticky
      const scrollThreshold = 160; // Adjust this value as needed

      // Check if the scroll distance is greater than the threshold
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setActive((active) => !active);
  };

  return (
    <Fragment>
      <header className={`xl:container header mx-auto px-[15px] xl:px-0`}>
        <nav className="flex justify-between items-center mt-10 mb-1">
          <a className="text-lg font-semibold" href="/">
            <img
              className="w-full h-full max-w-[164px]"
              src={logo}
              alt=""
              width="auto"
            />
          </a>
          <div className="hidden xl:flex font-roboto">
            <div className="flex flex-wrap me-10">
              <div className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-light-blue-300 me-2">
                <FiPhoneCall size="25" color="#000066" />
              </div>
              <div>
                <h5 className="text-[19px] font-medium tracking-[1px] mb-1">
                  Telephone
                </h5>
                <h6 className="font text-grey text-[15px]">+88-02-48811446</h6>
              </div>
            </div>
            <div className="flex flex-wrap me-10">
              <div className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-light-blue-300 me-2">
                <TfiEmail size="25" color="#000066" />
              </div>
              <div>
                <h5 className="text-[19px] font-medium tracking-[1px] mb-1">
                  Email Address
                </h5>
                <h6 className=" text-grey text-[15px]">info@iisplbd.com</h6>
              </div>
            </div>
            <div className="flex flex-wrap me-10">
              <div className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-light-blue-300 me-2">
                <TfiLocationPin size="25" color="#000066" />
              </div>
              <div>
                <h5 className="text-[19px] font-medium tracking-[1px] mb-1">
                  Office Address
                </h5>
                <h6 className="text-grey text-[15px]">
                  House: 169, Road 03, Mohakhali DOHS, Dhaka
                </h6>
              </div>
            </div>
            <a
              href="/static/media/our_profile.3cdecc6e7e55a13a0768.pdf"
              download=""
              className="group relative flex items-center text-[19px] font-medium tracking-[1px] mb-1 border rounded-lg px-3 py-2 h-fit bg-blue-400 text-white-#fff transition duration-300"
            >
              <DownloadIcon height="30px" fill="#fff" className="me-2" />{" "}
              <span>Our Profile</span>
            </a>
          </div>

          <div className="flex xl:hidden justify-between items-center">
            <button
              onClick={handleClick}
              ref={navMenuBtn}
              className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded"
            >
              <svg
                className="block h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>

            <ul
              ref={navMenu}
              className={`${
                active ? "block custom_position_nav" : "hidden"
              } xl:flex xl:ml-auto xl:mr-12 xl:items-center xl:w-auto xl:space-x-12`}
            >
              <NavLink
                className="text-[14px] font-roboto uppercase font-bold text-dark-blue "
                to="/"
              >
                <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                  Home
                </li>
              </NavLink>

              <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue "
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>
              <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue "
                  to="/services/inspection"
                >
                  Inspection
                </NavLink>
              </li>
              <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue "
                  to="/services/calibration"
                >
                  Calibration
                </NavLink>
              </li>
              <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue "
                  to="/services/testing"
                >
                  Testing Services
                </NavLink>
              </li>
              <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue "
                  to="/services/training-program"
                >
                  Training Program
                </NavLink>
              </li>
              <li className="py-[15px] border-b-[1px] border-dark-blue-200">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue"
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              </li>
              <li className="py-[15px] ">
                <NavLink
                  className="text-[14px] font-roboto uppercase font-bold text-dark-blue"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="hidden lg:block"><a className="inline-block py-3 px-8 text-sm leading-normal font-medium bg-red-50 hover:bg-red-100 text-red-500 rounded transition duration-200" href="#">Contact Us</a></div> */}
        </nav>
        <p className="font-work-sans text-f15 mb-9 ">
          ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 17020:2012 (NABL),
          ISO 17025:2017 (BAB) Certified Company
        </p>
        <div
          className={`${
            isSticky ? "sticky" : ""
          } relative z-20 hidden xl:block bg-blue-400 `}
        >
          <div className="triangle"></div>
          <ul className="flex justify-around items-center font-roboto xl:p-1">
            <NavLink
              to="/"
              className="py-3 text-f14 px-6 uppercase font-bold text-white-#fff z-10"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className="py-3 text-f14 px-6 uppercase font-bold text-white-#fff "
            >
              About Us
            </NavLink>
            <NavLink
              to="/services/inspection"
              className="py-3 text-f14 px-6 uppercase font-bold text-white-#fff "
            >
              Inspection
            </NavLink>
            <NavLink
              to="/services/calibration"
              className="py-3 text-f14 px-6 uppercase font-bold text-white-#fff"
            >
              Calibration
            </NavLink>
            <NavLink
              to="/services/testing"
              className="py-3 text-f14 px-6 uppercase  font-bold text-white-#fff"
            >
              Testing Services
            </NavLink>
            <NavLink
              to="/services/training-program"
              className="py-3 text-f14 px-6 uppercase  font-bold text-white-#fff"
            >
              Training Program
            </NavLink>
            <NavLink
              to="/contacts"
              className="py-3 text-f14 px-6 uppercase  font-bold text-white-#fff"
            >
              Contacts
            </NavLink>
            <NavLink
              to="/blog"
              className="py-3 text-f14 px-6 uppercase  font-bold text-white-#fff"
            >
              Blog
            </NavLink>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
