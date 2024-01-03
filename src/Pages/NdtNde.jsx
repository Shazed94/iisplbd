import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import {
  Microscope,
  Microscope2,
  Technician,
  Golla,
  Magnet,
  Pencil,
  Shaker,
} from "../Components/SvgComponent";
import { Link } from "react-router-dom";

import Post_landing_Inspection from "../assets/Services/Post-Landing-Inspection.jpg";
import Pre_shipment_Inspection from "../assets/Services/iispl_inspection_1.jpg";

const NdtNde = () => {
  document.title = "NDT/NDE Services - IISPL Bangladesh";

  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="common_bg_banner h-[250px] relative">
          <div className="xl:container flex flex-col  xl:flex-row justify-center xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] md:px-0 xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto sm:text-center text-f48 font-bold">
              NDT/NDE SERVICES
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
                NDT/NDE Services
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="xl:container py-16">
        <h2 className="text_light_roboto_lowercase text-f40  mb-8 px-[15px] xl:px-0">
          <strong className="text_bold_roboto">IISPL &nbsp;</strong>
          NDT/NDE Services
        </h2>
        <p className="text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px] px-[15px] xl:px-0">
          Non-destructive testing (NDT) is a testing and analysis technique used
          by industry to evaluate the properties of a material, component,
          structure or system for characteristic differences or welding defects
          and discontinuities without causing damage to the original part. NDT
          also known as non-destructive examination (NDE), non-destructive
          inspection (NDI) and non-destructive evaluation (NDE).
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-10">
          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] md:mx-[15px] lg:mx-[15px] xl:mx-0 text-center">
            <div className="mb-6 ">
              <Microscope2
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <p className="uppercase text-f18 font-bold font-roboto ">
              ULTRASONIC TESTING (UT)
            </p>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] md:mx-[15px] lg:mx-[15px] xl:mx-0 text-center">
            <div className="mb-6">
              <Golla
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <p className="uppercase text-f18 font-bold font-roboto ">
              RADIOGRAPHIC TESTING (RT)
            </p>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] md:mx-[15px] lg:mx-[15px] xl:mx-0 text-center">
            <div className="mb-6">
              <Magnet
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <p className="uppercase text-f18 font-bold font-roboto ">
              MAGNETIC PARTICLE TESTING (MPT)
            </p>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] md:mx-[15px] lg:mx-[15px] xl:mx-0 text-center">
            <div className="mb-6 ">
              <Pencil
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <p className="uppercase text-f18 font-bold font-roboto ">
              DYE PENETRANT TESTING (DPT)
            </p>
          </div>

          <div className=" group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] md:mx-[15px] lg:mx-[15px] xl:mx-0 text-center">
            <div className="mb-6">
              <Shaker
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <p className="uppercase text-f18 font-bold font-roboto ">
              PHASED ARRAY ULTRASONIC TESTING (PAUT)
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-400 text-white-#fff py-[55px] sm:px-[15px] md:px-[15px] lg:px-[15px]">
        <div className="xl:container flex justify-between items-center sm:flex-col ">
          <div className="xl:pe-6 xl:w-[100%]">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-6 lg:gap-6 xl:gap-6">
              <div className="h-[320px] bg-[#ffffff] sm:mb-[20px]">
                <div className="h-[236px]">
                  <img
                    src={Pre_shipment_Inspection}
                    alt="Pre_shipment_Inspection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/pre-shipment"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      Pre-shipment Inspection
                    </h2>
                  </Link>
                </div>
              </div>

              <div className="h-[320px] bg-[#ffffff] sm:mb-[20px]">
                <div className="h-[236px]">
                  <img
                    src={Post_landing_Inspection}
                    alt="Post_landing_Inspection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/post-landing"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      Post-landing Inspection
                    </h2>
                  </Link>
                </div>
              </div>

              <div className="md:h-[320px] lg:h-[320px] xl:h-[320px] flex items-end">
                <div>
                  <h2 className="text_light_roboto_lowercase text-f40 text-[#ffffff]  xl:mx-auto ">
                    VISIT ALL OTHER
                  </h2>
                  <strong className="text_bold_roboto text-f40 text-[#ffffff]  xl:mx-auto mb-7">
                    INSPECTION SERVICES
                  </strong>
                  <p className="xl:max-w-[680px] xl:mx-auto text-f18 text-[rgba(255,255,255,.8)] font-work-sans font_work_sans_bold leading-[24px]">
                    We appreciate your trust and hope that you find our services
                    helpful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:container px-[15px] xl:px-0 py-24 flex flex-col md:flex-row lg:flex-row xl:flex-row ">
        <div className="md:w-[50%] lg:w-[50%] xl:w-[35%] ">
          <h2 className="text_light_roboto text-f40 xl:max-w-[680px] xl:mx-auto mb-6">
            ALL OTHER SERVICES
            <strong className="text_bold_roboto"> OFFERED BY IISPL</strong>
          </h2>
          <p className="text-f18 font-work-sans text-dark-blue-text font-medium mb-12">
            We committed to delivering our services on time with customer
            satisfaction & competitive price.
          </p>
          <Link to={"/services"}>
            <button className="bg-blue-400 text-white-#fff font-roboto font-semibold text-f14 uppercase px-10 py-[12px] transition hover:bg-light-blue-400 hover:text-white-#fff tracking-widest mb-9 md:mb-0 lg:mb-0 xl:mb-0">
              View All Services
            </button>
          </Link>
        </div>
        <div className="md:w-[50%] lg:w-[50%] xl:w-[65%] md:ms-10 lg:ms-14 xl:ms-6 ">
          <div className="xl:grid xl:grid-cols-2">
            <div className="flex items-center mb-8 md:mb-10 lg:mb-10 xl:mb-10">
              <div className="mr-6">
                <Microscope2 fill={"#031b4e"} height={45} />
              </div>
              <Link to={"/services/calibration"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  CALIBRATION SERVICES
                </h4>
              </Link>
            </div>
            <div className="flex items-center mb-8 md:mb-10 lg:mb-10 xl:mb-10">
              <div className="mr-6">
                <Microscope fill={"#031b4e"} height={45} />
              </div>
              <Link to={"/services/testing"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  TESTING SERVICES
                </h4>
              </Link>
            </div>
            <div className="flex items-center mb-8 md:mb-10 lg:mb-10 xl:mb-10">
              <div className="mr-6">
                <Technician fill={"#031b4e"} height={45} />
              </div>
              <Link to={"/services/training-program"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  TRAINING PROGRAM
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NdtNde;
