import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
import "./AdminLogin.css";
import logo_long from "../../../assets/IISPL_logo.png";

import Cookie from "cookie-universal";
import { ToastSuccess } from "../../../Components/ToastAlert";

const AdminLogin = () => {
  const AdminEmail = useRef();
  const AdminPassword = useRef();

  const cookies = Cookie();

  const [show, setShow] = useState(false);
  // const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append("email", AdminEmail.current.value);
    formdata.append("password", AdminPassword.current.value);

    axios
      .post(`${BACKEND_BASE_URL}admin/login`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response?.data?.status == 200) {
          cookies.set(
            "admin_access_token",
            response?.data?.admin_access_token
          );
          navigate(from, { replace: true });
          ToastSuccess.fire({
            icon: "success",
            title: "Successfully logged in...!",
          });
          e.target.reset();
        } else if (response?.data?.status == 401) {
          ToastSuccess.fire({
            icon: "warning",
            title: response?.data?.message,
          });
          e.target.reset();
        }
      });
    //   .catch((error) => {
    //     setMessage(error.response?.data?.message);
    //     setShow(true);
    //   });

    e.preventDefault();
  };

  const [passType, setPassType] = useState("password");
  const handlePasswordType = () => {
    if (passType == "password") {
      setPassType("text");
    }
    if (passType == "text") {
      setPassType("password");
    }
  };
  const admin_access_token = localStorage.getItem("admin_access_token");
  useEffect(() => {
    if (admin_access_token) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="form_wrapper" style={{ backgroundColor: "#f9fafb" }}>
      <Container className="container">
        <ToastContainer position="top-center" className="p-3 toast_msg">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            bg="danger"
            autohide
          >
            <Toast.Body>
              {/* <strong className="ms-3">{message ? message : ""}</strong> */}
            </Toast.Body>
          </Toast>
        </ToastContainer>

        <Form id="form" className="form" onSubmit={handleSubmit}>
          <img className="img-fluid" src={logo_long} alt="mySvgImage" />
          <br />
          <br />

          {/* ================== Email =================== */}
          <Form.Group className="form_group">
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={AdminEmail}
            />
          </Form.Group>

          {/* ============== Password ===================== */}
          <Form.Group className="form_group position-relative">
            <Form.Label>
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type={passType}
              id="password"
              placeholder="Enter password"
              name="password"
              ref={AdminPassword}
            />
            <div className="eye_icon" onClick={handlePasswordType}>
              <AiFillEye size="1.2em" />
            </div>
          </Form.Group>

          <Button type="submit" className="w-full login_btn text-white-#fff py-2">
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AdminLogin;
