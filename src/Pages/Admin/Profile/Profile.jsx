import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BACKEND_BASE_URL, fileUrl } from "../../../Utils/GlobalVariables";
import getCookie from "../../../Components/Cookie/GetCookie";
import avatar from "../../../assets/avatar.png";
import { CircularDotLoader } from "../../../Components/Custom Loader/CustomLoader";

const Profile = () => {
  const name = useRef();
  const phone = useRef();
  const address = useRef();
  const profile_photo = useRef();

  // Initial table data
  const [profileInfo, setProfileInfo] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState([]);

  // Image Preview
  const [files, setFile] = useState([]);

  const handleImgPreview = (e) => {
    let allfiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    }
    if (allfiles.length > 0) {
      setFile(allfiles);
    }
  };

  // Get All Info
  const renderAllInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/profile`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setProfileInfo(res.data?.data);
      });
  };
  // form submit to backend
  const storeData = (e) => {
    const formdata = new FormData();

    formdata.append("name", name.current.value);
    formdata.append("phone", phone.current.value);
    formdata.append("address", address.current.value);

    if (profile_photo.current.files[0]) {
      formdata.append("profile_photo", profile_photo.current.files[0]);
    }

    //admin profile update api
    axios
      .post(`${BACKEND_BASE_URL}admin/profile-update`, formdata, {
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
          renderAllInfo();
        } else {
          setErrors(response.data?.errors);
          setMessage(response.data?.message);
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    renderAllInfo();
  }, []);

  return (
    <div className="main__container">
      <div className="body-wrapper ">
        <div className="xl:container p-4 ">
          {profileInfo?.name ? (
            <div
              className="bg-white-#fff p-3 content-wrapper"
              style={{ borderRadius: "8px" }}
            >
              <Form onSubmit={storeData}>
                <h2 className="text-f26 my-4 text-center">Admin Profile</h2>

                <Row className="mb-4 flex_center">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label className="mb-0">
                        Name: <span className="text-danger">*</span>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      defaultValue={profileInfo?.name}
                      ref={name}
                    />
                  </Col>
                </Row>
                <Row className="mb-4 flex_center">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label className="mb-0">Email:</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      disabled
                      defaultValue={profileInfo?.email}
                    />
                  </Col>
                </Row>

                <div className="">
                  <Row className="mb-4 flex_center">
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label className="mb-0">Profile Photo</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col md={9}>
                      <Form.Control
                        type="file"
                        ref={profile_photo}
                        onChange={handleImgPreview}
                      />
                      {files.map((file, key) => {
                        return (
                          <div key={key} className="Row">
                            <span className="Filename">
                              <img
                                width={80}
                                height={50}
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                              />
                            </span>
                          </div>
                        );
                      })}
                      {files.length == 0 && profileInfo?.profile_photo ? (
                        <img
                          width={80}
                          src={`${fileUrl}${profileInfo?.profile_photo}`}
                          alt=""
                          name="img"
                          className="img-thumbnail my-2"
                        />
                      ) : (
                        <div className="w-[80px] h-[80px] my-2">
                          <img
                            src={avatar}
                            alt="Profile picture"
                            className="w-full h-full object-cover "
                          />
                        </div>
                      )}
                    </Col>
                  </Row>
                  <Row className="mb-4 flex_center">
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label className="mb-0">
                          Phone Number: <span className="text-danger">*</span>
                        </Form.Label>
                      </Form.Group>
                    </Col>
                    <Col md={9}>
                      <InputGroup className="">
                        <InputGroup.Text id="basic-addon1">
                          +880
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Phone"
                          aria-label="Phone"
                          defaultValue={profileInfo?.phone}
                          ref={phone}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </div>

                <Row className="mb-4">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label className="mb-0">
                        Address: <span className="text-danger">*</span>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      as="textarea"
                      type="textarea"
                      rows={3}
                      placeholder="Enter your address"
                      className="mb-2"
                      defaultValue={profileInfo?.address}
                      ref={address}
                    />
                  </Col>
                </Row>
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    className="btn-submit mt-4 mb-4 rounded-3 border-0 "
                    style={{
                      backgroundColor: "#031b4e",
                      color: "white",
                    }}
                  >
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
          <CircularDotLoader className="flex justify-center items-center w-full sm:w-4 sm:h-[75vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
