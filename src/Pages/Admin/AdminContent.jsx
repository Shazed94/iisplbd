import { useState } from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";

import AdminFooter from "./AdminFooter";
import "./AdminContent.css";
import axios from "axios";
import AdminDashboardNavbar from "../Admin/Dashboard/AdminDashboardNavbar";
import { MdDashboard, MdOutlineViewCarousel } from "react-icons/md";
import { TbBrandBlogger, TbCategory2, TbMessage } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { AiOutlineClear, AiOutlineMenu } from "react-icons/ai";
import getCookie from "../../Components/Cookie/GetCookie";
import { BACKEND_BASE_URL } from "../../Utils/GlobalVariables";
import { ToastSuccess } from "../../Components/ToastAlert";
import { FiChevronDown, FiUsers } from "react-icons/fi";
import { PiCertificate } from "react-icons/pi";
import Cookie from "cookie-universal";
import { Collapse } from "react-bootstrap";
import admin_logo from "../../assets/admin_logo.png";

const AdminContent = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const cookies = Cookie();

  const navigate = useNavigate();
  const cusToggole = (id) => {
    var colDiv = document.getElementById(id + "Collapse");
    if (colDiv.getAttribute("class", "show") == "collapse show ") {
      document.getElementById(id + "Collapse").classList.remove("show");
    } else {
      colDiv.setAttribute("class", "collapse show ");
    }
  };

  const cacheclear = () => {
    axios
      .get(`${BACKEND_BASE_URL}admin/clear-cache`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((response) => {
        if (response.data?.status == 200) {
          ToastSuccess.fire({
            icon: "success",
            title: response.data?.message,
          });
        }
      });
  };

  const logoutAdmin = () => {
    axios
      .get(`${BACKEND_BASE_URL}admin/logout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((response) => {
        if (response?.data?.status == 200) {
          cookies.removeAll();
          ToastSuccess.fire({
            icon: "success",
            title: response?.data?.message,
          });
        }
        navigate("/admin/login");
      });
  };

  return (
    <div className="flex admin__dashboard">
      <nav className={`admin_sidebar ${toggleNav ? "close" : ""}`}>
        <header className="mt-4 mb-5">
          <Link to="/" target="_blank" >
            <div className="logo hidden md:block lg:block xl:block image-text w-40 mx-auto">
              <img src={admin_logo} alt="" className="w-full"/>
            </div>
          </Link>
          <AiOutlineMenu
            className="bx bx-chevron-right toggle d-none d-md-block"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links ps-0">
              <li
                title="Dashboard"
                className="flex items-center cursor-pointer"
              >
                <NavLink to="/admin/" className="nav-link">
                  <div className="flex justify-between items-center">
                    <MdDashboard className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Dashboard
                    </div>
                  </div>
                </NavLink>
              </li>

              <li title="Slider" className="flex items-center cursor-pointer">
                <NavLink to="slider" className="nav-link">
                  <div className="flex justify-between items-center">
                    <MdOutlineViewCarousel className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Slider
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                title="Organizations Certifications"
                className="flex items-center cursor-pointer"
              >
                <NavLink to="organizations-certifications" className="nav-link">
                  <div className="flex justify-between items-center">
                    <PiCertificate className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Organizations Certifications
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                title="Our Clients"
                className="flex items-center cursor-pointer"
              >
                <NavLink to="clients" className="nav-link">
                  <div className="flex justify-between items-center">
                    <FiUsers className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Our Clients
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                title="Inspection Messages"
                className="flex items-center cursor-pointer"
              >
                <NavLink to="inspection-messages" className="nav-link">
                  <div className="flex justify-between items-center">
                    <TbMessage className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Inspection Messages
                    </div>
                  </div>
                </NavLink>
              </li>
              <li
                title="Calibration Messages"
                className="flex items-center cursor-pointer"
              >
                <NavLink to="calibration-messages" className="nav-link">
                  <div className="flex justify-between items-center">
                    <TbMessage className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Calibration Messages
                    </div>
                  </div>
                </NavLink>
              </li>
              <li
                title="Contact Messages"
                className="flex items-center cursor-pointer"
              >
                <NavLink to="contact-messages" className="nav-link">
                  <div className="flex justify-between items-center">
                    <TbMessage className="icon" />
                    <div className="text nav-text dropdown_menu py-1">
                      Contact Messages
                    </div>
                  </div>
                </NavLink>
              </li>

              {/* Manage Blogs start  */}
              <li
                title="Blog Management"
                className="nav-link d-flex align-items-center cursor"
                id="blog"
                onClick={() => cusToggole("blog")}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <ImBlog className="icon" />
                  <div className="text nav-text dropdown_menu py-1">
                    Manage Blogs
                    <span>
                      <FiChevronDown className={`ms-4`} />
                    </span>
                  </div>
                </div>
              </li>
              <div className="dropdown_menu_item w-100">
                <Collapse id="blogCollapse" in={false}>
                  <div id="example-collapse-text">
                    <NavLink to="blog-category">
                      <p className="text nav-text mb-0 py-2 bg-dark-blue-text">
                        <TbCategory2 className="icon" />
                        Categories
                      </p>
                    </NavLink>

                    <NavLink to="blogs">
                      <p className="text nav-text mb-0 py-2  bg-dark-blue-text">
                        <TbBrandBlogger className="icon" />
                        Blogs
                      </p>
                    </NavLink>
                  </div>
                </Collapse>
              </div>
              {/* Manage Blogs end  */}

              <li className="nav-link">
                <Link to="" onClick={cacheclear}>
                  <AiOutlineClear className="icon" />
                  <span className="text nav-text ">Cache Clear</span>
                </Link>
              </li>

              <li className="nav-link ">
                <Link to="" className="user_logout" onClick={logoutAdmin}>
                  <BiLogOut className="icon" />
                  <span className="text nav-text text-uppercase">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="rightbar">
        {/* <div className="topbar" /> */}
        <section style={{ marginBottom: "100px" }}>
          <AdminDashboardNavbar />
          <Outlet />
        </section>
      </section>
      <AdminFooter />
    </div>
  );
};

export default AdminContent;
