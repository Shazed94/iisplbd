import { AiFillHome } from "react-icons/ai";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
// import bottle_img from "../../assets/service_category/PH-1-300x300.jpg";

const ChemicalCalibration = () => {
  document.title = "Chemical Calibration - IISPL Bangladesh";
  return (
    <div className="service_category_header">
      <Header />
      <section className="xl:-top-7 relative">
        <div className="bg_banner h-[250px] relative ">
          <div className="xl:container flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold text-center">
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

      <section className="xl:container text-white-#fff pt-16 flex flex-col lg:flex-row xl:flex-row">
        <div className="lg:w-[40%] xl:w-[30%] bg-light-blue-300">
          <div className="">
            <div className="menu-bar">
              <div className="">
                <div className="service_category">
                  <ul className=" pt-7 ">
                    <NavLink
                      to="/services/mass-volume-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        MASS & VOLUME CALIBRATION
                        <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                    <NavLink
                      to="/services/thermodynamic-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        THERMODYNAMIC CALIBRATION <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                    <NavLink
                      to="/services/mechanical-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        MECHANICAL CALIBRATION <MdKeyboardArrowRight />
                      </li>{" "}
                    </NavLink>
                    <NavLink
                      to="/services/electrical-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        ELECTRICAL CALIBRATION <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                    <NavLink
                      to="/services/dimensional-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        DIMENSIONAL CALIBRATION <MdKeyboardArrowRight />
                      </li>
                    </NavLink>

                    <NavLink
                      to="/services/chemical-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        CHEMICAL CALIBRATION <MdKeyboardArrowRight />
                      </li>{" "}
                    </NavLink>
                    <NavLink
                      to="/services/others-calibration"
                      className="nav-link"
                    >
                      <li className="flex items-center justify-between cursor-pointer">
                        ALL OTHERS CALIBRATION
                        <MdKeyboardArrowRight />
                      </li>
                    </NavLink>
                  </ul>
                </div>

                <div className="bg-[#ffffff] mx-[15px] md:mx-[15px] lg:mx-[30px] xl:mx-[30px] my-12 overflow-hidden contact-box">
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
                            className="text-[#D9D9D9] contact-us-right-envelope ms-auto"
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

        <div className="lg:w-[60%] xl:w-[70%] xl:ms-10">
          {/* <Outlet /> */}
          <div className="calibrations_serveces">
            <section className="xl:container text-white-#fff flex ">
              <div className="px-[15px]">
                <h2 className="text_light_roboto_normal text-f40 mb-6">
                  IISPL
                  <strong className="text_bold_roboto text-f40">
                    CHEMICAL CALIBRATION{" "}
                  </strong>
                </h2>
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 lg:gap-5 xl:gap-5">
                  <div className="md:w-[60%] lg:w-[60%] xl:w-[60%]">
                    <p className="text-f15 text-dark font-work-sans mb-6 leading-[24px] text-justify xl:pe-12">
                      Our chemical calibration services assure that your
                      equipment produces precise, accurate, and repeatable
                      results. Some of our unique calibration capabilities
                      include; pH meters, conductivity meters, and
                      refractometers.
                    </p>
                    <p className="text-f15 text-dark font-work-sans mb-16 leading-[24px] text-justify xl:pe-12">
                      If you would like a service quote we will be happy to
                      accommodate you. Listed below are our chemical calibration
                      services.
                    </p>
                  </div>
                  <div className="md:w-[40%] lg:w-[40%] xl:w-[40%] sm:mx-auto">
                    {/* <img
                      src={bottle_img}
                      alt="Image 5"
                      className="object-cover"
                    /> */}
                  </div>
                </div>

                <div className="border-[5px] border-light-blue-300 mt-10 mb-10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-8">
                    <div className="p-10 ">
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Conductivity Meters
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        pH Meters
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans">
                        TDH Meter
                      </p>
                    </div>
                    <div className="p-10">
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Refractometers*
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans">
                        Viscometer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChemicalCalibration;
