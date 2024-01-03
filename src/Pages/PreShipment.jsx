import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import {
  Microscope,
  Microscope2,
  Technician,
} from "../Components/SvgComponent";
import { Link } from "react-router-dom";

import qa_img from "../assets/Services/iispl_inspection_9.jpg";
import ndt_img from "../assets/Services/iispl_inspection_6.jpg";
import preshipmentRightImg from "../assets/Services/pre-shipment-inspection2.jpg";

const PreShipment = () => {
  document.title = "Pre-shipment Inspection - IISPL Bangladesh";
  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="common_bg_banner h-[250px] relative">
          <div className="xl:container flex flex-col  xl:flex-row justify-center xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] md:px-0 xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto sm:text-center text-f48 font-bold">
              PRE-SHIPMENT INSPECTION
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
                Pre-shipment Inspection
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="xl:container py-14">
        <h2 className="text_light_roboto_lowercase text-f40 xl:max-w-[680px] xl:mx-auto text-center mb-8 px-[15px] xl:px-0">
          <strong className="text_bold_roboto">IISPL &nbsp;</strong>
          Pre-shipment Inspection
        </h2>
        <p className="xl:max-w-[680px] xl:mx-auto text-center text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px] px-[15px] xl:px-0">
          International Inspection Services Pvt. Ltd. (IISPL) is ISO 9001
          certified organization, who has global network accredited ISO 17020.
          Since the decade IISPL has global foot print over the 46 countries
          including China, Germany, Korea, Singapore, India, France, UK etc. PSI
          is carried out with the affiliation of Govt. to meet up the buyer’s
          specifications, and quantity and value controls of imports/exports. It
          is done in compliance with WTO (World Trade Organization)
          requirements.
        </p>
        <p className="xl:max-w-[680px] xl:mx-auto text-center text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px] px-[15px] xl:px-0">
          Pre-shipment inspection is carried-out of goods on behalf of Customs
          authorities and IISPL can help international trade operators to comply
          fully with current legislation that improves their business efficiency
          and eliminates risk wherever possible.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-2 lg:gap-8 xl:gap-8 mt-14">
          <div className="  lg:h-[312px] xl:h-[321px] bg-[#dff2fe] rounded-[10px] sm:order-2 mx-[15px] xl:mx-0 ">
            <div className="xl:ps-14 xl:pt-10 sm:py-6 sm:px-6 md:py-6 md:px-6 lg:py-6 lg:px-6">
              <h2 className="text_light_roboto_lowercase font-bold text-f22 xl:mx-auto mb-6">
                Benefits of Pre-shipment Inspection
              </h2>
              <ul className="list-disc ps-8  text-[#5e7f96] font-work-sans text-f15">
                <li>
                  Govt. has benefited through the earning of customs duties and
                  taxes.
                </li>
                <li>Transparent trading activities can be ensured</li>
                <li>
                  Meet-up goods confirmation as per contract specifications.
                </li>
                <li>
                  Get the authorities of overseeing and controlling foreign
                  trade properly.
                </li>
                <li>
                  Proper documentation for the number of goods exported/
                  imported
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:h-[321px] lg:h-[312px] xl:h-[321px] bg-[#ffffff] sm:order-1 px-[15px] xl:px-0 sm:mb-6">
            <img
              src={preshipmentRightImg}
              alt="preshipmentRightImg"
              className="w-full h-full object-cover rounded-[10px]"
            />
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
                    src={ndt_img}
                    alt="ndt_img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/ndt-nde"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      NDT/NDE Services
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="h-[320px] bg-[#ffffff] sm:mb-[20px]">
                <div className="h-[236px]">
                  <img
                    src={qa_img}
                    alt="qa_img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/qa-qc"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      QA & QC Services
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

export default PreShipment;
