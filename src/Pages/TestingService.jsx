import { AiFillHome } from "react-icons/ai";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Components/Footer/Footer";

import testing1 from "../assets/testing-services/testing-1.jpg";
import testing2 from "../assets/testing-services/testing-2.jpg";
import testing3 from "../assets/testing-services/testing-3.jpg";
import testing4 from "../assets/testing-services/testing-4.jpg";
import { Link } from "react-router-dom";

const TestingService = () => {
  document.title = "Testing Services - IISPL Bangladesh";
  return (
    <div className="testing_service">
      <Header />
      <section className="bg-dark-blue-text text-white-#fff xl:-top-7 relative">
        <div className="bg_banner h-[250px]">
          <div className="xl:container flex flex-col lg:flex-row xl:flex-row justify-center  lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold text-center ">
              TESTING SERVICES
            </h2>
            <p className="flex items-center text-white-#fff">
              <Link to={"/"}>
                <AiFillHome className="me-2 text-white-#ffffffb8 hover:text-[#ffffff]" />
              </Link>{" "}
              <BsArrowRight className="me-2" />
              <Link to={"/services"}>
                <span className="font-roboto-normal font-medium text-f14 text-white-#ffffffb8 hover:text-[#ffffff]">
                  IISPL Service
                </span>{" "}
              </Link>
              <BsArrowRight className="mx-2" />{" "}
              <span className="font-roboto-normal font-medium text-f14 text-white-#fff">
                Testing Services
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="xl:container calibration_service pt-16 sm:pb-12 md:pb-12 lg:pb-12 pb-24 sm:px-[15px] md:px-[15px] lg:px-[15px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 lg:gap-10 xl:gap-11  ">
          <div className="service service sm:pb-[15px]">
            <div className="img_wrapper overflow-hidden relative">
              <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>
              <img
                src={require("../assets/testing-services/testing-1.jpg")}
                alt="1"
                className="w-full h-[250px] object-cover transition-all duration-[450ms] ease-in-out"
              />
            </div>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Environmental Testing
              </h5>
              <Link to="/services/environmental-testing">
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service service sm:pb-[15px]">
            <div className="img_wrapper overflow-hidden relative">
              <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>
              <img
                src={require("../assets/testing-services/testing-2.jpg")}
                alt="1"
                className="w-full h-[250px] object-cover transition-all duration-[450ms] ease-in-out"
              />
            </div>
            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Water Testing
              </h5>
              <Link to="/services/water-testing">
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service service sm:pb-[15px]">
            <div className="img_wrapper overflow-hidden relative">
              <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>
              <img
                src={require("../assets/testing-services/testing-3.jpg")}
                alt="3"
                className="w-full h-[250px] object-cover transition-all duration-[450ms] ease-in-out"
              />
            </div>
            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Oil Testing
              </h5>
              <Link to="/services/oil-testing">
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service service sm:pb-[15px]">
            <div className="img_wrapper overflow-hidden relative">
              <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>
              <img
                src={require("../assets/testing-services/testing-4.jpg")}
                alt="4"
                className="w-full h-[250px] object-cover transition-all duration-[450ms] ease-in-out"
              />
            </div>
            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Stack Air Emission Testing
              </h5>
              <Link to="/services/stack-air-testing">
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center sm:mb-16 md:mb-12 lg:mb-12 xl:mb-24">
        <Link to={"/services"}>
          <button
            title=" More Services"
            className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff"
          >
            More Services
          </button>
          {/* <button className="uppercase font-work-sans text-grey-#666666 rounded px-[20px] py-[14px] bg-grey-#ebebeb text-f14 leading-tight hover:bg-[#dcdcdc] hover:text-[#5e5e5e] transition-all duration-300 ease-in-out">
            More Services
          </button> */}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default TestingService;
