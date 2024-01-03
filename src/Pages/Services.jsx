import { AiFillHome } from "react-icons/ai";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Components/Footer/Footer";

import inspection_service from "../assets/Services/Inspection-bird-image.jpg";
import calibration_service from "../assets/Services/instrument-calibration-services.jpg";
import training_service from "../assets/Services/iispl-training-program.jpg";
import QA_QC_Services from "../assets/Services/iispl_inspection_9.jpg";
import NDT_NDE_Services from "../assets/Services/iispl_inspection_6.jpg";
import Lift_and_Lifting_Inspection_Services from "../assets/Services/iispl_inspection_7.jpg";
import Pre_shipment_Inspection from "../assets/Services/iispl_inspection_1.jpg";
import Post_landing_Inspection from "../assets/Services/Post-Landing-Inspection.jpg";
import Equipment_Safety_Services from "../assets/Services/iispl_inspection_4.jpg";
import stack_testing from "../assets/Services/Stack-Air-Emission-Testing.jpg";
import Environmental_Testing from "../assets/Services/img-03.jpg";
import Oil_Testing from "../assets/Services/img-02.jpg";
import Water_Testing from "../assets/Services/img-01.jpg";

import { Link } from "react-router-dom";

const Services = () => {
  document.title =
    "3rd party Inspection, Calibration, and Testing Services Company";
  return (
    <div className="testing_service">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="bg_banner h-[250px] md:h-[250px] lg:h-[250px] xl:h-[250px] relative">
          <div className="absolute inset-0 opacity-75 bg-dark-blue-text"></div>
          <div className="xl:container flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center md:justify-between lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold text-center md:max-w-[150px]">
              IISPL SERVICES
            </h2>
            <p className="flex items-center text-white-#fff">
              <Link to={"/"}>
                <AiFillHome className="me-2 text-white-#ffffffb8 hover:text-[#ffffff]" />
              </Link>{" "}
              <BsArrowRight className="me-2" />
              <span className="font-roboto-normal font-medium text-f14 text-white-#ffffffb8">
                IISPL Service
              </span>{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container calibration_service pt-16 pb-8 sm:px-[15px] md:px-[15px] lg:px-[15px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-10 lg:gap-10 xl:gap-11  ">
          <div className="service sm:pb-[15px]">
            <Link to={"/services/inspection"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={inspection_service}
                  alt="inspection_service"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Inspection Services
              </h5>
              <Link to={"/services/inspection"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/calibration"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={calibration_service}
                  alt="calibration_service"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Calibration Services
              </h5>
              <Link to={"/services/calibration"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/training-program"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={training_service}
                  alt="training_service"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Training Program
              </h5>
              <Link to={"/services/training-program"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/qa-qc"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={QA_QC_Services}
                  alt="QA_QC_Services"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                QA & QC Services
              </h5>
              <Link to={"/services/qa-qc"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/ndt-nde"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={NDT_NDE_Services}
                  alt="NDT_NDE_Services"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                NDT/NDE Services
              </h5>
              <Link to={"/services/ndt-nde"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/lift-lifting"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Lift_and_Lifting_Inspection_Services}
                  alt="Lift_and_Lifting_Inspection_Services"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Lift and Lifting Inspection Services
              </h5>
              <Link to={"/services/lift-lifting"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/pre-shipment"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Pre_shipment_Inspection}
                  alt="Pre_shipment_Inspection"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Pre-shipment Inspection
              </h5>
              <Link to={"/services/pre-shipment"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/post-landing"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Post_landing_Inspection}
                  alt="Post_landing_Inspection"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Post-landing Inspection
              </h5>
              <Link to={"/services/post-landing"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/equipment-safety"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Equipment_Safety_Services}
                  alt="Equipment_Safety_Services"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Equipment Safety Services
              </h5>
              <Link to={"/services/equipment-safety"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/stack-air-testing"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={stack_testing}
                  alt="stack_testing"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Stack Air Emission Testing
              </h5>
              <Link to={"/services/stack-air-testing"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/environmental-testing"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Environmental_Testing}
                  alt="Environmental_Testing"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Environmental Testing
              </h5>
              <Link to={"/services/environmental-testing"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="service sm:pb-[15px]">
            <Link to={"/services/oil-testing"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Oil_Testing}
                  alt="Oil_Testing"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Oil Testing
              </h5>
              <Link to={"/services/oil-testing"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="service sm:pb-[15px]">
            <Link to={"/services/water-testing"}>
              <div className="img_wrapper overflow-hidden relative">
                <div className="bg_overlay transition-all duration-[450ms] ease-in-out"></div>

                <img
                  src={Water_Testing}
                  alt="Water_Testing"
                  className="w-full h-[360px] object-cover transition-all duration-[450ms] ease-in-out"
                />
              </div>
            </Link>

            <div className="bg-[#F9F9F9] py-10 px-7">
              <h5 className="text-dark-blue-text text-f18 font-roboto font-bold mb-3">
                Water Testing
              </h5>
              <Link to={"/services/water-testing"}>
                <button className="font-work-sans text-f14 py-[14px] px-[20px] text-white-#fff bg-dark-blue-text hover:xl:bg-light-blue-400 transition-all duration-300 ease-in-out leading-[1.1]">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
