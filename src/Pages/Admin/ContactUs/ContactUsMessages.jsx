import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
import { MdDeleteForever } from "react-icons/md";
import { ToastSuccess } from "../../../Components/ToastAlert";
import getCookie from "../../../Components/Cookie/GetCookie";

const ContactUsMessages = () => {
  // Initial table data
  const [tableData, setTableData] = useState([]);
  // Get All Info
  const renderAllInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/contact-messages`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setTableData(res.data?.data);
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
        .delete(`${BACKEND_BASE_URL}admin/contact-messages/delete/${id}`, {
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
        <div className="col-md-12 p-4">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Contact Messages</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 p-4">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">
                <span className="top-border"></span>

                <div className="table-responsive py-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                        <th scope="col" className="text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData?.map((data, i) => (
                        <tr key={data.id}>
                          <td> {i + 1}</td>
                          <td>{data?.name}</td>
                          <td>{data?.email}</td>
                          <td>{data?.phone}</td>
                          <td>{data?.subject}</td>
                          <td>{data?.message}</td>

                          <td className="text-center">
                            {/* edit button */}
                            {/* <Link to={`/admin/blog-category/edit/${data?.id}`}>
                              <button className="py-1 px-2 bg-warning border-0 rounded-3 me-1 mb-1">
                                <BiEdit
                                  style={{
                                    color: "white-#fff",
                                  }}
                                  title="Edit"
                                  size="1em"
                                />
                              </button>
                            </Link> */}

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

export default ContactUsMessages;
