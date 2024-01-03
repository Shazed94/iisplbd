import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {  Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BACKEND_BASE_URL, fileUrl } from "../../../Utils/GlobalVariables";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ToastSuccess } from "../../../Components/ToastAlert";
import getCookie from "../../../Components/Cookie/GetCookie";

const ManageBlog = () => {
  // Initial table data
  const [tableData, setTableData] = useState([]);
  // Get All Info
  const renderAllInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/blog`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setTableData(res.data?.data);
      });
  };

  //status update
  const statusUpdate = (id) => {
    axios
      .get(`${BACKEND_BASE_URL}admin/blog/status-update/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((response) => {
        ToastSuccess.fire({
          icon: "success",
          title: response.data?.message,
        });
        renderAllInfo();
      });
  };
  //is featured update
  const featuredUpdate = (id) => {
    axios
      .get(`${BACKEND_BASE_URL}admin/blog/featured-update/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((response) => {
        ToastSuccess.fire({
          icon: "success",
          title: response.data?.message,
        });
        renderAllInfo();
      });
  };
  // Delete Data
  const deleteData = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    if (isConfirm) {
      axios
        .delete(`${BACKEND_BASE_URL}admin/blog/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${getCookie("admin_access_token")}`,
          },
        })
        .then((response) => {
          if (response.data?.status == 200) {
            ToastSuccess.fire({
              icon: "success",
              title: response.data?.message,
            });
            renderAllInfo();
          } else {
            ToastSuccess.fire({
              icon: "warning",
              title: response.data?.message,
            });
          }
        });
    }
  };

  useEffect(() => {
    renderAllInfo();
  }, []);

  return (
    <div className="main__container">
      <div className="body-wrapper">
        {/* <AdminDashboardNavbar /> */}

        <div className="col-md-12 p-4">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Blog management</h5>
                  <Link to="/admin/blog-category">
                    <button className="flex items-center bg-dark-blue-text text-white-#fff xl:px-5 xl:py-2">
                      View All Blog&apos;s Category &nbsp;
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <div className="card-header">
                  <Link to="/admin/blogs/create">
                    <button className="flex items-center bg-dark-blue-text text-white-#fff xl:px-5 xl:py-2">
                      Add New Blog &nbsp;
                      <span>
                        <AiOutlinePlusCircle />
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="table-responsive py-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col" style={{ width: "" }}>
                          Image
                        </th>
                        <th scope="col" style={{ width: "300px" }}>
                          Title
                        </th>
                        <th scope="col" style={{ width: "200px" }}>
                          Category
                        </th>
                        <th scope="col" className="text-center">
                          Status
                        </th>
                        <th scope="col" className="text-center">
                          Featured
                        </th>
                        <th scope="col" className="text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData?.map((data, i) => (
                        <tr key={data.id}>
                          <td> {i + 1}</td>
                          <td>
                            <img
                              className="img-thumbnail"
                              style={{
                                width: "80px",
                                height: "50px",
                                objectFit: "cover",
                              }}
                              src={`${fileUrl}${data?.image}`}
                              alt=""
                            />
                          </td>
                          <td>{data?.title}</td>
                          <td>{data?.blog_cat?.name}</td>

                          {/* status update */}
                          <td>
                            <div className="d-flex justify-content-center">
                              <Form>
                                <Form.Select
                                  aria-label="Default select example"
                                  style={{
                                    width: "100%",
                                  }}
                                  onChange={() => statusUpdate(data.id)}
                                >
                                  <option
                                    value="0"
                                    selected={
                                      data?.status == 0 ? "selected" : ""
                                    }
                                  >
                                    Active
                                  </option>

                                  <option
                                    value="1"
                                    selected={
                                      data?.status == 1 ? "selected" : ""
                                    }
                                  >
                                    Inactive
                                  </option>
                                </Form.Select>
                              </Form>
                            </div>
                          </td>

                          {/* featured update */}
                          <td>
                            <div className="d-flex justify-content-center">
                              <Form>
                                <Form.Select
                                  aria-label="Default select example"
                                  style={{
                                    width: "100%",
                                  }}
                                  onChange={() => featuredUpdate(data.id)}
                                >
                                  <option
                                    value="0"
                                    selected={
                                      data?.is_featured == 0 ? "selected" : ""
                                    }
                                  >
                                    Yes
                                  </option>

                                  <option
                                    value="1"
                                    selected={
                                      data?.is_featured == 1 ? "selected" : ""
                                    }
                                  >
                                    No
                                  </option>
                                </Form.Select>
                              </Form>
                            </div>
                          </td>

                          <td className="text-center">
                            {/* View button */}
                            <Link to={`/blog/${data?.slug}`} target="_blank">
                              <button className="py-1 px-2 bg-info border-0 rounded-3 me-1 mb-1">
                                <FaEye
                                  style={{
                                    color: "#fff",
                                  }}
                                  title="Edit"
                                  size="1em"
                                />
                              </button>
                            </Link>

                            {/* edit button */}
                            <Link to={`/admin/blogs/edit/${data?.id}`}>
                              <button className="py-1 px-2 bg-warning border-0 rounded-3 me-1 mb-1">
                                <BiEdit
                                  style={{
                                    color: "#fff",
                                  }}
                                  title="Edit"
                                  size="1em"
                                />
                              </button>
                            </Link>

                            {/* delete button */}
                            <button
                              onClick={() => deleteData(data.id)}
                              className="py-1 px-2 bg-danger border-0 rounded-3 me-1 mb-1"
                            >
                              <MdDeleteForever
                                style={{
                                  color: "#fff",
                                }}
                                title="Delete"
                                size="1em"
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;
