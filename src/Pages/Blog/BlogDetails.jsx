import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL, fileUrl } from "../../Utils/GlobalVariables";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useRef } from "react";
import { ToastSuccess } from "../../Components/ToastAlert";
import Parse from "html-react-parser";
import avatar from "../../assets/avatar.png";
import { CircularDotLoader } from "../../Components/Custom Loader/CustomLoader";

import { BiTrash } from "react-icons/bi";
import getCookie from "../../Components/Cookie/GetCookie";
import Swal from "sweetalert2";
import ReactImageGallery from "react-image-gallery";

const BlogDetails = () => {
  const { slug } = useParams();
  const [name, email, comment] = [useRef(), useRef(), useRef()];
  const [singleBlog, setSingleBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [comments, setComments] = useState([]);

  if (singleBlog?.title) {
    document.title = `${singleBlog?.title} - IISPL BD`;
  } else {
    document.title = `Blog - IISPL BD`;
  }

  const fetchAllBlogs = () => {
    axios
      .get(`${BACKEND_BASE_URL}frontend/blogs/show-single/${slug}`)
      .then((res) => {
        setSingleBlog(res.data?.data);
        setRecentBlogs(res.data?.recent_data);
        setComments(res.data?.comment);
      });
  };

  const submitComment = (e) => {
    const formdata = new FormData();
    formdata.append("name", name.current.value);
    formdata.append("email", email.current.value);
    formdata.append("comment", comment.current.value);
    formdata.append("blog_Id", singleBlog?.id);

    axios
      .post(`${BACKEND_BASE_URL}frontend/blogs/review-post`, formdata)
      .then((response) => {
        if (response.data?.status == 200) {
          ToastSuccess.fire({
            icon: "success",
            title: "Your comment has been sent!",
          });
          e.target.reset();
          fetchAllBlogs();
        }
      });
    e.preventDefault();
  };
  // console.log(singleBlog)

  const galleryData = singleBlog?.gallery?.map((image) => {
    return {
      original: fileUrl + image?.gallery_image,
      thumbnail: fileUrl + image?.gallery_image,
    };
  });

  // Delete Data
  const handleDelete = async (id) => {
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
        .delete(`${BACKEND_BASE_URL}admin/blog/review-delete/${id}`, {
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
            fetchAllBlogs();
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
    fetchAllBlogs();
  }, [slug]);

  return (
    <>
      <Header />
      <div className="xl:container blog_details">
        {singleBlog?.title ? (
          <div className="flex flex-col lg:flex-row xl:flex-row xl:gap-6">
            <div className="sm:w-full md:w-full lg:w-[70%] xl:w-[70%] sm:px-[15px] md:px-[15px] lg:px-[15px]">
              <h1 className="text-start font-work-sans text-f40 pt-14 pb-2">
                {singleBlog?.title}
              </h1>
              <p className="font-work-sans text-black mb-6">
                {moment(singleBlog?.created_at).format("DD-MMM-Y")}
              </p>
              <div className="">
                <ReactImageGallery items={galleryData} loading="lazy" />

                <p className="font-work-sans text-f16 py-7 mb-14">
                  {Parse(`${singleBlog?.details}`)}
                </p>

                <form onSubmit={submitComment} className="">
                  <h3 className="font-roboto text-f26 font-bold text-light-blue-400 uppercase mb-3">
                    LEAVE A COMMENT
                  </h3>
                  <textarea
                    required
                    ref={comment}
                    rows="5"
                    placeholder="Your Comment"
                    className="border text-black focus:outline-none w-full p-3 mb-10"
                  />
                  {/* <small>{errors?.message && errors?.message}</small> */}
                  <input
                    required
                    ref={name}
                    type="text"
                    placeholder="Your name"
                    className="border text-black focus:outline-none w-full p-3 mb-10"
                  />
                  {/* <small>{errors?.name && errors?.name}</small> */}
                  <input
                    required
                    ref={email}
                    type="email"
                    placeholder="Email"
                    className="border text-black focus:outline-none w-full p-3 mb-10"
                  />
                  {/* <small>{errors?.type && errors?.type}</small> */}

                  <button className="uppercase bg-blue-400 text-white-#fff hover:bg-dark-blue-text hover:text-white-#fff transition-all duration-300 ease-in-out w-full py-3 mb-6 xl:mb-24 lg:mb-20   ">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
            <div className="sm:w-full md:w-full lg:w-[30%] xl:w-[30%] pt-[74px] pb-6 sm:px-[15px] md:px-[15px] lg:px-[15px]">
              <div className="flex sm:flex-col lg:flex-col xl:flex-col gap-6 mb-7">
                <div className="sm:w-full md:w-1/2 lg:w-full xl:w-full">
                  <h2 className="font-work-sans font-medium text-f22 mb-8 lg:mb-14 xl:mb-14">
                    MORE POSTS
                  </h2>
                  {recentBlogs?.map((moreBlog) => (
                    <Link to={`/blog/${moreBlog?.slug}`} key={moreBlog?.id}>
                      <div className="flex border rounded-sm mb-3 p-3 h-32">
                        <div className="w-3/4">
                          <h2 className="font-roboto-normal text-f14 mb-1 me-2">
                            {moreBlog?.title}
                          </h2>
                          <p className="font-work-sans text-f14 text-black">
                            {moment(moreBlog?.created_at).format("DD-MMM-Y")}
                          </p>
                        </div>
                        <div className="w-1/4 h-[75px]">
                          <img
                            src={`${fileUrl}${moreBlog?.image}`}
                            alt="Image 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="sm:w-full md:w-1/2 lg:w-full xl:w-full ">
                  {comments?.length > 0 && (
                    <>
                      <h2 className="font-work-sans font-medium text-f22 md:mb-8 mb-6 lg:mt-4 xl:mt-4">
                        RECENT COMMENTS
                      </h2>
                      <div className="sm:h-auto h-[550px] overflow-y-auto">
                        {comments?.map((comment) => (
                          <>
                            <div
                              key={comment?.id}
                              className="flex items-center  border rounded-sm mb-3 p-3 h-32"
                            >
                              <div className="h-[60px] w-[60px]">
                                <img
                                  className="inline-block w-full h-full object-cover"
                                  src={avatar}
                                />
                              </div>
                              <div className="w-3/4">
                                <h2 className="font-work-sans font-medium text-f20 ms-3 mb-1">
                                  {comment?.name}
                                </h2>
                                <h2 className="font-work-sans text-f14 ms-3">
                                  {comment?.comment}
                                </h2>
                              </div>
                              {getCookie("admin_access_token") && (
                                <div
                                  className="cursor-pointer"
                                  onClick={() => handleDelete(comment?.id)}
                                >
                                  <BiTrash color="red" size="1.5rem" />
                                </div>
                              )}
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CircularDotLoader className="flex justify-center items-center h-[732px]" />
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
