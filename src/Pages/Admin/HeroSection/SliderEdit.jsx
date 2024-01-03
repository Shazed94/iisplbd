import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BACKEND_BASE_URL, fileUrl } from "../../../Utils/GlobalVariables";
import { FiSave } from "react-icons/fi";
import { ToastSuccess } from "../../../Components/ToastAlert";
import getCookie from "../../../Components/Cookie/GetCookie";

const SliderEdit = () => {
  const { sliderId } = useParams();
  const title = useRef();
  const image = useRef();

  //Image Preview
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

  // Initial table data
  const [updateInfo, setUpdateInfo] = useState([]);

  // Get Single Info
  const renderUpdateInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/slider-image/${sliderId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setUpdateInfo(res.data?.data);
      });
  };

  // form submit to backend
  const updatedData = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PATCH");

    formdata.append("title", title.current.value);
    if (image.current.files[0]) {
      formdata.append("image", image.current.files[0]);
    }

    axios
      .post(
        `${BACKEND_BASE_URL}admin/slider-image/update/${sliderId}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getCookie("admin_access_token")}`,
          },
        }
      )

      .then((response) => {
        if (response.data?.status == 200) {
          ToastSuccess.fire({
            icon: "success",
            title: "Update successful...!",
          });
          renderUpdateInfo();
        }
      });
    e.preventDefault();
  };
  useEffect(() => {
    renderUpdateInfo();
  }, []);
  return (
    <div className="main__container">
      <div className="body-wrapper">
        <div className="col-md-12 p-4">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="card-header">Update Slider Image</div>
                  <Link to="/admin/slider">
                    <Button
                      variant=""
                      size="sm"
                      style={{ backgroundColor: "#031b4e", color: "white" }}
                    >
                      View All
                    </Button>
                  </Link>
                </div>

                <Form onSubmit={updatedData}>
                  <div className="content-wrapper">
                    <div className="card">
                      <div className="card-body">
                        <div className="row py-3">
                          {/* add title */}
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Title&nbsp;{""}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="title"
                              ref={title}
                              defaultValue={updateInfo?.title}
                            />
                          </Form.Group>

                          {/* image */}
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Image&nbsp;{""}
                              <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                              type="file"
                              ref={image}
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
                            {files.length == 0 &&
                              (updateInfo?.image != null ? (
                                <img
                                  className="img-thumbnail mt-1"
                                  width={80}
                                  height={50}
                                  src={`${fileUrl}${updateInfo?.image}`}
                                  alt=""
                                  name="img"
                                />
                              ) : (
                                ""
                              ))}
                            <Form.Control.Feedback type="invalid">
                              Please choose an image
                            </Form.Control.Feedback>
                          </Form.Group>
                          <div className="flex items-center justify-center">
                            <button
                              type="submit"
                              className="btn-submit mt-5 rounded-3 border-0"
                              style={{
                                backgroundColor: "#031b4e",
                                color: "white",
                              }}
                            >
                              <FiSave className="inline"/> &nbsp; Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderEdit;
