import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL, fileUrl } from "../../Utils/GlobalVariables";
import axios from "axios";
import moment from "moment";
import { CircularDotLoader } from "../../Components/Custom Loader/CustomLoader";

const BlogHome = () => {
  document.title = "Blog - IISPL BD";
  const [allBlogs, setAllBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [currentPage, setCurrentPage] = useState([]);
  const [firstPage, setFirstPage] = useState([]);
  const [lastPage, setLastPage] = useState([]);

  const fetchAllBlogs = () => {
    axios.get(`${BACKEND_BASE_URL}frontend/blogs/all`).then((res) => {
      setAllBlogs(res.data?.data?.data);
      setRecentBlogs(res.data?.recent_data);
      setCurrentPage(res.data?.data?.current_page);
      setFirstPage(res.data?.data.from);
      setLastPage(res.data?.data.last_page);
    });
  };

  const fetchFeaturedBlogs = () => {
    axios.get(`${BACKEND_BASE_URL}frontend/blogs/featured`).then((res) => {
      setFeaturedBlogs(res.data?.data);
    });
  };

  useEffect(() => {
    fetchAllBlogs();
    fetchFeaturedBlogs();
  }, []);

  const PaginateData = (num) => {
    axios
      .get(`${BACKEND_BASE_URL}frontend/blogs/all?page=${num}`)
      .then((res) => {
        setAllBlogs(res.data?.data?.data);
        setCurrentPage(res.data?.data?.current_page);
      });
  };

  // ===========================Pagination ===================
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= lastPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => PaginateData(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Header />
      <div>
        {allBlogs.length > 0 ? (
          <>
            <div className="xl:container py-14 blogPage">
              <div className="featured_post">
                <h2 className="font-work-sans font-medium text-f22 mb-6 sm:px-[15px] md:px-[15px] lg:px-[15px]">
                  FEATURED POSTS
                </h2>
                <div className="flex sm:flex-col md:flex-col sm:px-[15px] md:px-[15px] lg:px-[15px] sm:gap-4 md:gap-4 lg:gap-6 xl:gap-6 mb-8">
                  <div className="carousel sm:w-full md:w-full lg:w-[69%] xl:w-[69%]">
                    <Splide
                      hasTrack={false}
                      options={{
                        rewind: true,
                        autoplay: true,
                        pagination: false,
                        type: "fade",
                        speed: 1500,
                        interval: 5000,
                        cover: true,
                        width: "100%",
                        height: "100%",
                        fixedHeight: "420px",
                      }}
                    >
                      <SplideTrack>
                        {allBlogs?.map((slider, i) => (
                          <SplideSlide key={i} className="relative">
                            <img
                              src={`${fileUrl}${slider?.image}`}
                              alt="Image 1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff12] to-[#484848cd]">
                              <div className="xl:container h-full flex flex-col justify-end">
                                <h4 className="font-work-sans font-medium text-f18 text-white-#fff ps-7 mb-2">
                                  {slider?.blog_cat?.name}
                                </h4>
                                <Link to={slider?.slug}>
                                  <h2 className="text-white-#fff text-f26 font-semibold font-work-sans capitalize mb-2 ps-7 text-truncate">
                                    {slider?.title}
                                  </h2>
                                </Link>

                                <p className="font-work-sans text-white-#fff ps-7 mb-10">
                                  {moment(slider?.created_at).format(
                                    "DD-MMM-Y"
                                  )}
                                </p>
                              </div>
                            </div>
                          </SplideSlide>
                        ))}
                      </SplideTrack>
                      <div className="splide__arrows_1"></div>
                    </Splide>
                  </div>

                  {featuredBlogs?.map((blog, index) => {
                    if (index == 0) {
                      return (
                        <div
                          key={index}
                          className="card md:hidden md:w-4/12 lg:w-4/12 xl:w-4/12 shadow-md border-0"
                        >
                          <div className="card_img mb-2 h-[200px]">
                            <Link to={blog?.slug}>
                              <img
                                src={`${fileUrl}${blog?.image}`}
                                alt="Image 1"
                                className="w-full h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div className="card_body p-6">
                            <div className="category mb-2">
                              {blog?.blog_cat?.name}
                            </div>
                            <Link to={blog?.slug}>
                              <h2 className="font-roboto-normal text-f22 mb-3">
                                {blog?.title}
                              </h2>
                            </Link>

                            <p className="font-work-sans text-black ">
                              {moment(blog?.created_at).format("DD-MMM-Y")}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="flex sm:flex-col sm:px-[15px] md:px-[15px] lg:px-[15px] sm:gap-4 gap-6 md:flex-row  md:gap-4">
                  {featuredBlogs?.map((blog, index) => {
                    if (index > 0 && index < 4) {
                      return (
                        <div
                          key={index}
                          className="card md:w-4/12 lg:w-4/12 xl:w-4/12 shadow-md border-0"
                        >
                          <div className="card_img mb-2 h-[200px]">
                            <Link to={blog?.slug}>
                              <img
                                src={`${fileUrl}${blog?.image}`}
                                alt="Image 1"
                                className="w-full h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div className="card_body p-6">
                            <div className="category mb-2">
                              {blog?.blog_cat?.name}
                            </div>
                            <Link to={blog?.slug}>
                              <h2 className="font-roboto-normal text-f18 text-truncate mb-3">
                                {blog?.title}
                              </h2>
                            </Link>

                            <p className="font-work-sans text-black ">
                              {moment(blog?.created_at).format("DD-MMM-Y")}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {/* Latest Blog */}
            <div className="latest_post bg-light-blue-300  border-b-[1px] border-blue-400">
              <div className="xl:container py-14">
                <div className="flex sm:flex-col md:flex-col gap-7 mb-6">
                  <div className="w-8/12">
                    <h2 className="font-work-sans font-medium text-f22 sm:px-[15px] md:px-[15px] lg:ps-[15px]">
                      LATEST POSTS
                    </h2>
                  </div>
                  <div className="w-4/12 sm:hidden md:hidden">
                    <h2 className="font-work-sans font-medium text-f22">
                      MORE POSTS
                    </h2>
                  </div>
                </div>
                <div className="flex sm:flex-col md:flex-col gap-6">
                  <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-4 sm:w-full md:w-full sm:px-[15px] md:px-[15px] lg:px-[15px] w-8/12">
                    {allBlogs?.map((blog) => (
                      <div key={blog?.id} className="card shadow-md border-0">
                        <div className="card_img mb-2 h-[200px]">
                          <Link to={blog?.slug}>
                            <img
                              src={`${fileUrl}${blog?.image}`}
                              alt="Image 1"
                              className="w-full h-full object-cover"
                            />
                          </Link>
                        </div>
                        <div className="card_body p-6">
                          <div className="category mb-2">
                            {" "}
                            {blog?.blog_cat?.name}
                          </div>
                          <Link to={blog?.slug}>
                            <h2 className="font-roboto-normal text-f18 text-truncate mb-3">
                              {blog?.title}
                            </h2>
                          </Link>

                          <p className="font-work-sans text-black ">
                            {moment(blog?.created_at).format("DD-MMM-Y")}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="custom_pagination d-flex justify-content-end flex-wrap">
                      {lastPage !== firstPage && firstPage !== null && (
                        <div className="mt-5 flex_center">
                          <Pagination>{items}</Pagination>
                        </div>
                      )}
                    </div>
                  </div>
                  <h2 className="font-work-sans font-medium text-f22 sm:px-[15px] md:px-[15px] lg:hidden xl:hidden">
                    MORE POSTS
                  </h2>
                  <div className="md:grid md:grid-cols-2 md:gap-4 lg:w-4/12 xl:w-4/12 sm:px-[15px] md:px-[15px]">
                    {recentBlogs?.map((moreBlog) => (
                      <Link key={moreBlog?.id} to={moreBlog?.slug}>
                        <div className="flex border rounded-sm sm:mb-4 lg:mb-4 xl:mb-4 p-3 h-32">
                          <div className="w-3/4">
                            <h2 className="font-roboto-normal text-f14 mb-3 me-2">
                              {moreBlog?.title}
                            </h2>
                          </div>
                          <div className="w-1/4 h-full">
                            <img
                              src={`${fileUrl}${moreBlog?.image}`}
                              alt="1"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <CircularDotLoader className="flex justify-center items-center h-[450px]" />
        )}
      </div>

      <Footer />
    </>
  );
};

export default BlogHome;
