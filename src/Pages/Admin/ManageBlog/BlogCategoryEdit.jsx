import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
// import "../Category/Keywords.css";
import { ToastSuccess } from "../../../Components/ToastAlert";
import getCookie from "../../../Components/Cookie/GetCookie";

const BlogCategoryEdit = () => {
  const { blogCatId } = useParams();
  const name = useRef();

  // Initial table data
  const [updateInfo, setUpdateInfo] = useState([]);
  // Get Single Info
  const renderUpdateInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/blog/category/show-single/${blogCatId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setUpdateInfo(res.data?.data);
      });
  };

  // Updated data to backend
  const updatedData = (e) => {
    const formdata = new FormData();
    // formdata.append("_method", "PUT");
    formdata.append("_method", "PATCH");
    formdata.append("name", name.current.value);

    axios
      .post(
        `${BACKEND_BASE_URL}admin/blog/category/update/${blogCatId}`,
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
            title: "Blog Category update successfull...!",
          });
          e.target.reset();
          
          renderUpdateInfo();
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, 1000);
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
                  <div className="card-header">Update Blog Category Info</div>
                  <Link to="/admin/blog-category">
                    <Button variant="" size="sm"  style={{backgroundColor: "#031b4e", color: "white-#fff"}}>
                      View All 
                    </Button>
                  </Link>
                </div>

                <Form onSubmit={updatedData}>
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
                              defaultValue={updateInfo?.name}
                            />
                          </Form.Group>
                          <Button
                            type="submit"
                            className="btn-submit mt-5 rounded-3 border-0"  style={{backgroundColor: "#031b4e", color: "white-#fff"}}
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
export default BlogCategoryEdit;
