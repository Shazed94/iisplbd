import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const ServiceCategory = () => {
  return (
    <div className="service_category_header">
      <Header />
      <section className="bg-dark-blue-text text-white-#fff -top-7 relative ">
        <div className="bg_banner xl:h-[250px] relative ">
          <div className="xl:container flex justify-between items-center z-10 h-full">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold">
              CHEMICAL CALIBRATION
            </h2>
            <p className="flex items-center text-white-#fff">
              <Link to={"/"}>
                <AiFillHome className="me-2 text-white-#ffffffb8 hover:text-[#ffffff]" />
              </Link>{" "}
              <BsArrowRight className="me-2" />
              <Link to={"/service-category/calibration"}>
                <span className="font-roboto-normal font-medium text-f14 text-white-#ffffffb8 hover:text-[#ffffff]">
                  Calibration Services
                </span>{" "}
              </Link>
              <BsArrowRight className="mx-2" />{" "}
              <span className="font-roboto-normal font-medium text-f14 text-white-#fff">
                Chemical Calibration
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container text-white-#fff pt-16 flex  ">
        <div className="xl:w-[30%] bg-light-blue-300">
          <div className=" border-gray-200 dark:border-gray-700">
            <div className="menu-bar">
              <div className="">
                <div className="service_category">
                  <ul className=" pt-7 ">
                    <NavLink to="mass-volume-calibration" className="nav-link">
                      <li className="flex items-center justify-between cursor-pointer">
                        MASS & VOLUME CALIBRATION
                        <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                    <NavLink
                      to="thermodynamic-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        THERMODYNAMIC CALIBRATION <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                    <NavLink to="mechanical-calibration" className="nav-link">
                      <li className="flex items-center justify-between cursor-pointer">
                        MECHANICAL CALIBRATION <MdKeyboardArrowRight />
                      </li>{" "}
                    </NavLink>
                    <NavLink to="electrical-calibration" className="nav-link">
                      <li className="flex items-center justify-between cursor-pointer">
                        ELECTRICAL CALIBRATION <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                    <NavLink to="dimensional-calibration" className="nav-link">
                      <li className="flex items-center justify-between cursor-pointer">
                        DIMENSIONAL CALIBRATION <MdKeyboardArrowRight />
                      </li>
                    </NavLink>

                    <NavLink to="chemical-calibration" className="nav-link">
                      <li className="flex items-center justify-between cursor-pointer">
                        CHEMICAL CALIBRATION <MdKeyboardArrowRight />
                      </li>{" "}
                    </NavLink>
                    <NavLink to="others-calibration" className="nav-link">
                      <li className="flex items-center justify-between cursor-pointer">
                        ALL OTHERS CALIBRATION
                        <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                  </ul>
                </div>

                <div className="bg-[#ffffff] mx-8 my-12 overflow-hidden contact-box">
                  <div className="pt-8 ps-7">
                    <h2 className="text-[#3e3e3e] font-roboto font-bold  text-f22 pb-6">
                      CONTACT US FOR HELP?
                    </h2>
                    <p className="text-f15 text-dark font-work-sans pb-6">
                      Contact with us through our representative or submit a
                      business inquiry online.
                    </p>
                    <div className="">
                      <Link to={"/contacts"}>
                        <h2 className="text-[#000066] font-work-sans font-bold  text-f15 flex align-middle ">
                          CONTACT US&nbsp;
                          <MdKeyboardDoubleArrowRight
                            size={"17"}
                            className=""
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <FaRegEnvelope
                            size={"100"}
                            className="text-[#D9D9D9] contact-us-right-envelope"
                          />
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-[70%] ms-10">
          {/* <Outlet path={uurl}/> */}
          {/* <Outlet /> */}
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceCategory;
