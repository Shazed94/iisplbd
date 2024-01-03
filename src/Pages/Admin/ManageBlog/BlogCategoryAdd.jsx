import axios from "axios";
import { useEffect, useRef } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
// import "../Category/Keywords.css";
import { ToastSuccess } from "../../../Components/ToastAlert";
import getCookie from "../../../Components/Cookie/GetCookie";

const BlogCategoryAdd = () => {
  const name = useRef();

  // form submit to backend
  const storeData = (e) => {
    const formdata = new FormData();

    formdata.append("name", name.current.value);

    axios
      .post(`${BACKEND_BASE_URL}admin/blog/category/store`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })

      .then((response) => {
        if (response.data?.status == 200) {
          ToastSuccess.fire({
            icon: "success",
            title: "Blog category added...!",
          });
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <div className="main__container">
      <div className="body-wrapper">
        <div className="col-md-12 p-4">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="card-header">Create New Blog Category</div>
                  <Link to="/admin/blog-category">
                    <Button
                      variant="success"
                      size="sm"
                      style={{ backgroundColor: "#031b4e", color: "#fff" }}
                    >
                      View All
                    </Button>
                  </Link>
                </div>

                <Form onSubmit={storeData}>
                  <div className="content-wrapper">
                    <div className="card">
                      <div className="card-body">
                        <div className="row py-3">
                          {/* add name */}
                          <Form.Group
                            as={Col}
                            md="12"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Name&nbsp;{""}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="name"
                              ref={name}
                            />
                          </Form.Group>

                          <Button
                            type="submit"
                            className="btn-submit mt-5 rounded-3 border-0 flex items-center justify-center"
                            style={{
                              backgroundColor: "#031b4e",
                              color: "white",
                            }}
                          >
                            <FiSave /> &nbsp; Save
                          </Button>
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
export default BlogCategoryAdd;
