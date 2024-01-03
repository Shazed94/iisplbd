import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
import getCookie from "../../../Components/Cookie/GetCookie";

const PasswordChange = () => {
  const current_password = useRef();
  const new_password = useRef();
  const confirm_password = useRef();

  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState([]);

  // form submit to backend
  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("current_password", current_password.current.value);
    formdata.append("new_password", new_password.current.value);
    formdata.append("confirm_password", confirm_password.current.value);

    //admin pass change update api
    axios
      .post(`${BACKEND_BASE_URL}admin/change-password`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })

      .then((response) => {
        if (response.data?.status == 200) {
          Swal.fire({
            icon: "success",
            text: response.data?.message,
            confirmButtonColor: "#5eba86",
          });
          e.target.reset();
        } else {
          setErrors(response.data?.errors);
          setMessage(response.data?.message);
        }
      });
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <div className="main__container">
      <div className="body-wrapper ">
        <Container className="p-4">
          <div
            className="bg-white-#fff p-3 content-wrapper"
            style={{ borderRadius: "8px" }}
          >
            <Form onSubmit={storeData}>
              <h2 className="text-f26 my-4 text-center">Change Password</h2>
              <div className="">
                <Row className="mb-4 flex_center">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label className="mb-0">
                        Current Password: <span className="text-danger">*</span>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      ref={current_password}
                    />
                    <p className="text-danger">{errors?.current_password}</p>
                    <p className="text-danger">{message}</p>
                  </Col>
                </Row>

                <Row className="mb-4 flex_center">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label className="mb-0">
                        New Password: <span className="text-danger">*</span>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      placeholder="new password"
                      defaultValue=""
                      ref={new_password}
                    />
                    <p className="text-danger">{errors?.new_password}</p>
                  </Col>
                </Row>

                <Row className="mb-4 flex_center">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label className="mb-0">
                        Confirm Password: <span className="text-danger">*</span>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      placeholder="confirm password"
                      defaultValue=""
                      ref={confirm_password}
                    />
                    <p className="text-danger">{errors?.confirm_password}</p>
                  </Col>
                </Row>
              </div>

              <Button
                type="submit"
                className="btn-submit my-5 rounded-3 border-0 d-flex justify-content-center"
              >
                Save
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PasswordChange;
