import { NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./admindashboard.css";
import { BACKEND_BASE_URL, fileUrl } from "../../../Utils/GlobalVariables";
import getCookie from "../../../Components/Cookie/GetCookie";
import { ToastSuccess } from "../../../Components/ToastAlert";
import Cookie from "cookie-universal";
import avatar from "../../../assets/avatar.png";


const AdminDashboardNavbar = () => {
  const navigate = useNavigate();
  const cookies = Cookie();
  const [show, setShow] = useState(false);

  // Image Preview
  // const [files, setFile] = useState([]);
  // const handleImgPreview = (e) => {
  //   let allfiles = [];
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     allfiles.push(e.target.files[i]);
  //   }
  //   if (allfiles.length > 0) {
  //     setFile(allfiles);
  //   }
  // };

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

  const [profileInfo, setProfileInfo] = useState([]);
  // Get All Info
  const renderAllInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/profile`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setProfileInfo(res?.data?.data);
      });
  };
  useEffect(() => {
    renderAllInfo();
  }, []);

  return (
    <div className="topbar shadow-md">
      <div className="flex justify-end px-2 py-1">
        <NavDropdown
          onClick={() => setShow(!show)}
          className="admin_profile_dropdown position-relative"
          id="collasible-nav-dropdown"
          title={
            <div className={`admin_profile_logo`}>
              {profileInfo?.profile_photo ? (
                <img
                  width={50}
                  src={`${fileUrl}${profileInfo?.profile_photo}`}
                  alt="Profile picture"
                  name="img"
                  className="img-fluid"
                />
              ) : (
                <img
                src={avatar}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
              )}
            </div>
          }
        >
          <NavDropdown.Item
            as={Link}
            to="/admin/profile"
            className=" t-fs-18 cl-333"
          >
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item
            as={Link}
            to="/admin/password-change"
            className=" t-fs-18 cl-333"
          >
            Password Change
          </NavDropdown.Item>
          <hr className="m-0" />

          <NavDropdown.Item
            as={Link}
            onClick={logoutAdmin}
            to="/admin"
            className="t-fs-18 cl-333"
          >
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
};

export default AdminDashboardNavbar;
