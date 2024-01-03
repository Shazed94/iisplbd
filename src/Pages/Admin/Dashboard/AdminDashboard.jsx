import { MdOutlineViewCarousel } from "react-icons/md";

import "./admindashboard.css";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
import getCookie from "../../../Components/Cookie/GetCookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularDotLoader } from "../../../Components/Custom Loader/CustomLoader";
import { PiCertificate } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { TbCategory2 } from "react-icons/tb";
import { ImBlog } from "react-icons/im";
// import AdminDashboardNavbar from "../../../Components/AdminDashboardNavbar";

const AdminDashboard = () => {
  const [allCounts, setallCounts] = useState();

  const renderAllInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/informations-count`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setallCounts(res.data);
      });
  };

  useEffect(() => {
    renderAllInfo();
  }, []);
  return (
    <div className="">
      <div className="body-wrapper">
        {/* <AdminDashboardNavbar /> */}
        <div className="main_section">
          <div className="">
            {allCounts?.slider ? (
              <div className="dashboard_card grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-8  py-8">
                <div className="widget xl:hover:scale-105 bg-light-blue">
                  <div className="widget-icon">
                    <MdOutlineViewCarousel className="w-icon" />
                  </div>
                  <div className="widget-content text-center">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Slider</strong>
                    </h6>
                    <h1 className="inline text-dark font-weight-bold text-f48">
                      {allCounts?.slider}
                    </h1>
                  </div>
                  <p>
                    <Link to="/admin/slider" className="btn">
                      View All
                    </Link>
                  </p>
                </div>
                <div className="widget xl:hover:scale-105 bg-light-blue">
                  <div className="widget-icon">
                    <PiCertificate className="w-icon" />
                  </div>
                  <div className="widget-content text-center">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Certifications</strong>
                    </h6>
                    <h1 className="inline text-dark font-weight-bold text-f48">
                      {allCounts?.certificates}
                    </h1>
                  </div>
                  <p>
                    <Link
                      to="/admin/organizations-certifications"
                      className="btn"
                    >
                      View All
                    </Link>
                  </p>
                </div>
                <div className="widget xl:hover:scale-105 bg-light-blue">
                  <div className="widget-icon">
                    <FiUsers className="w-icon" />
                  </div>
                  <div className="widget-content text-center">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Clients</strong>
                    </h6>
                    <h1 className="inline text-dark font-weight-bold text-f48">
                      {allCounts?.clients}
                    </h1>
                  </div>
                  <p>
                    <Link to="/admin/clients" className="btn">
                      View All
                    </Link>
                  </p>
                </div>
                <div className="widget xl:hover:scale-105 bg-light-blue">
                  <div className="widget-icon">
                    <ImBlog className="w-icon" />
                  </div>
                  <div className="widget-content text-center">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Blog</strong>
                    </h6>
                    <h1 className="inline text-dark font-weight-bold text-f48">
                      {allCounts?.blog}
                    </h1>
                  </div>
                  <p>
                    <Link to="/admin/blogs" className="btn">
                      View All
                    </Link>
                  </p>
                </div>
                <div className="widget xl:hover:scale-105 bg-light-blue">
                  <div className="widget-icon">
                    <TbCategory2 className="w-icon" />
                  </div>
                  <div className="widget-content text-center">
                    <h6 className="text-uppercase text widget-title">
                      <strong>Blog Category</strong>
                    </h6>
                    <h1 className="inline text-dark font-weight-bold text-f48">
                      {allCounts?.blog_cat}
                    </h1>
                  </div>
                  <p>
                    <Link to="/admin/blog-category" className="btn">
                      View All
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <CircularDotLoader className="flex justify-center items-center w-full sm:w-4 sm:h-[75vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
