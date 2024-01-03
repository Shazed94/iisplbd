import axios from "axios";
import  { useEffect, useRef, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../../Utils/GlobalVariables";
import { FiSave } from "react-icons/fi";
import { ToastSuccess } from "../../../Components/ToastAlert";
import getCookie from "../../../Components/Cookie/GetCookie";
import RichTextEditor from "../../../Components/RichTextEditor";


const BlogAdd = () => {
  const title = useRef();
  const blog_catId = useRef();
  const image = useRef();
  const details = useRef();
  // const blog_tags = useRef();
  // const meta_keywords = useRef();
  const gallery_image = useRef();

  //long description
  const [details_value, set_details_value] = useState("");
  const get_details_value = (value) => {
    set_details_value(value);
  };

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

  //product tag multi
  // const [product_tags, setproduct_tags] = useState([]);
  // const ProductTagInput = ({ limit, product_tags, setproduct_tags }) => {
  //   const [newProductTag, setNewProductTag] = React.useState("");
  //   const handleChange = (e) => {
  //     if (e.target.value !== ",") {
  //       setNewProductTag(e.target.value);
  //     }
  //   };

  //   const handleKeyDown = (e) => {
  //     if (e.keyCode == 13) {
  //       setproduct_tags([...product_tags, newProductTag]);
  //       setNewProductTag("");
  //     }
  //   };
  //   const handleDelete = (e) => {
  //     let indexToDelete = parseInt(e.target.id);
  //     setproduct_tags([
  //       ...product_tags.slice(0, indexToDelete),
  //       ...product_tags.slice(indexToDelete + 1),
  //     ]);
  //   };

  //   return (
  //     <div className="ProductTagInput">
  //       <div className="product_tags">
  //         {product_tags.map((tag, index) => (
  //           <div className="product_tag" key={index}>
  //             <span>{tag}</span>
  //             <button className="Delete" onClick={handleDelete} id={index}>
  //               ✕
  //             </button>
  //           </div>
  //         ))}
  //         <input
  //           onChange={handleChange}
  //           onKeyDown={handleKeyDown}
  //           value={newProductTag}
  //           disabled={product_tags.length == limit ? true : false}
  //           placeholder="Tags"
  //           ref={blog_tags}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  //meta keyword multi
  // const [tags, setTags] = useState([]);
  // const TagInput = ({ limit, tags, setTags }) => {
  //   const [newTag, setNewTag] = React.useState("");
  //   const handleChange = (e) => {
  //     if (e.target.value !== ",") {
  //       setNewTag(e.target.value);
  //     }
  //   };

  //   const handleKeyDown = (e) => {
  //     if (e.keyCode == 13) {
  //       setTags([...tags, newTag]);
  //       setNewTag("");
  //     }
  //   };
  //   const handleDelete = (e) => {
  //     let indexToDelete = parseInt(e.target.id);
  //     setTags([
  //       ...tags.slice(0, indexToDelete),
  //       ...tags.slice(indexToDelete + 1),
  //     ]);
  //   };
  //   return (
  //     <div className="TagInput">
  //       <div className="Tags">
  //         {tags.map((tag, index) => (
  //           <div className="Tag" key={index}>
  //             <span>{tag}</span>
  //             <button className="Delete" onClick={handleDelete} id={index}>
  //               ✕
  //             </button>
  //           </div>
  //         ))}
  //         <input
  //           onChange={handleChange}
  //           onKeyDown={handleKeyDown}
  //           value={newTag}
  //           disabled={tags.length == limit ? true : false}
  //           placeholder="Enter meta keywords"
  //           ref={meta_keywords}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  // Gallery Image Preview
  const [files2, setFile2] = useState([]);
  const handleGalleryImgPreview = (e) => {
    let allfiles2 = [];

    for (let i = 0; i < e.target.files.length; i++) {
      allfiles2.push(e.target.files[i]);
    }
    if (allfiles2.length > 0) {
      setFile2(allfiles2);
    }
  };

  // Initial add info
  const [addInfo, setAddInfo] = useState([]);
  // Get add Info
  const renderAddInfo = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}admin/blog/store-info`, {
        headers: {
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })
      .then((res) => {
        setAddInfo(res.data?.data);
      });
  };

  // form submit to backend
  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("title", title.current.value);
    formdata.append("blog_catId", blog_catId.current.value);
    if (image.current.files[0]) {
      formdata.append("image", image.current.files[0]);
    }
    formdata.append("details", details.current.value);
    files2.forEach((item) => {
      formdata.append("gallery_image[]", item);
    });
    // formdata.append("blog_tags[]", product_tags);
    // formdata.append("meta_description", meta_description.current.value);
    // formdata.append("meta_keywords[]", tags);

    axios
      .post(`${BACKEND_BASE_URL}admin/blog/store`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("admin_access_token")}`,
        },
      })

      .then((response) => {
        if (response.data?.status == "ok") {
          ToastSuccess.fire({
            icon: "success",
            title: "Blog added...!",
          });

          setFile([]);
          // set_details_value("", "html");
          // setproduct_tags([]);
          // setTags([]);
          setFile2([]);
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  useEffect(() => {
    renderAddInfo();
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
                  <div className="card-header">Create Blog</div>
                  <Link to="/admin/blogs">
                    <button
                      className="flex items-center bg-dark-blue-text text-white-#fff xl:px-5 xl:py-2
                    mb-1"
                    >
                      View All
                    </button>
                  </Link>
                </div>

                <Form onSubmit={storeData}>
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
                            />
                          </Form.Group>

                          {/* Blog cat  */}
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Blog Category&nbsp;{""}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              ref={blog_catId}
                            >
                              <option value="" selected>
                                Select Category
                              </option>
                              {addInfo?.map((data) => (
                                <option value={data?.id} key={data?.id}>
                                  {data.name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>

                          {/* image */}
                          <Form.Group
                            as={Col}
                            md="12"
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
                                <div key={key} className="Row py-1">
                                  <span className="Filename">
                                    <img
                                      className="rounded-1"
                                      width={80}
                                      height={50}
                                      src={URL.createObjectURL(file)}
                                      alt={file.name}
                                    />
                                  </span>
                                </div>
                              );
                            })}
                            <Form.Control.Feedback type="invalid">
                              Please choose an image
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/* image gallery */}
                          <Form.Group
                            as={Col}
                            md="12"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Gallery Images
                            </Form.Label>
                            <Form.Control
                              // required
                              multiple
                              type="file"
                              ref={gallery_image}
                              onChange={handleGalleryImgPreview}
                            />

                            <div className="row">
                              {files2.map((file, key) => {
                                return (
                                  <div key={key} className="col-md-2 py-1">
                                    <span className="Filename">
                                      <img
                                        className="rounded-1"
                                        width={80}
                                        height={50}
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                      />
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <Form.Control.Feedback type="invalid">
                              Please choose an image
                            </Form.Control.Feedback>
                          </Form.Group>

                          {/*Details */}
                          <Form.Group
                            as={Col}
                            md="12"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Details&nbsp;{""}
                              <span className="text-danger">*</span>
                            </Form.Label>

                            {/* <Form.Control
                              as="textarea"
                              type="text"
                              rows={3}
                              ref={details}
                            /> */}

                            <RichTextEditor
                              joditRef={details}
                              getValue={get_details_value}
                              value={details_value}
                            />
                          </Form.Group>

                          {/* blog tags */}
                          {/* <div className="col-12 mb-3">
                            <p className="label fw-bold">
                              Blog Tags&nbsp;{""}
                              <span className="text-danger">*</span>
                            </p>
                            <ProductTagInput
                              limit={20}
                              product_tags={product_tags}
                              setproduct_tags={setproduct_tags}
                            />
                          </div> */}

                          {/* Meta Kewords  */}
                          {/* <div className="col-12 mb-3">
                            <p className="label fw-bold">
                              Meta Kewords&nbsp;{""}
                              <span className="text-danger">*</span>
                            </p>
                            <TagInput
                              limit={20}
                              tags={tags}
                              setTags={setTags}
                            />
                          </div> */}

                          {/*Meta  Description */}
                          {/* <Form.Group
                            as={Col}
                            md="12"
                            controlId="validationCustom01"
                            className="mb-3"
                          >
                            <Form.Label className="label fw-bold">
                              Meta Description&nbsp;{""}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              ref={meta_description}
                            />
                          </Form.Group> */}

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
export default BlogAdd;
