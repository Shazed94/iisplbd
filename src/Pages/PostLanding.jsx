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

import Lift_and_Lifting_Inspection_Services from "../assets/Services/iispl_inspection_7.jpg";
import Pre_shipment_Inspection from "../assets/Services/iispl_inspection_1.jpg";
import preshipmentRightImg from "../assets/Services/Post-Shipment-Inspections-1.jpg";

const PostLanding = () => {
  document.title = "Post-landing Inspection - IISPL Bangladesh";
  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="common_bg_banner h-[250px] relative">
          <div className="xl:container flex flex-col  xl:flex-row justify-center xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] md:px-0 xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto sm:text-center text-f48 font-bold">
              POST-LANDING INSPECTION
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
                Post-landing Inspection
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="xl:container py-14">
        <h2 className="text_light_roboto_lowercase text-f40 xl:max-w-[680px] xl:mx-auto text-center mb-8 px-[15px] xl:px-0">
          <strong className="text_bold_roboto">IISPL &nbsp;</strong>
          Post-landing Inspection
        </h2>
        <p className="xl:max-w-[680px] xl:mx-auto text-center text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px] px-[15px] xl:px-0">
          Post-shipment Inspections are key factors for supply chain management
          and a reliable quality assurance tool for validating the quality of
          goods purchased from suppliers within the country or from various
          parts of the world.
        </p>
        <p className="xl:max-w-[680px] xl:mx-auto text-center text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px] px-[15px] xl:px-0">
          It ensures that the goods purchased comply with buyers’ specifications
          and/or the terms of their order or letter of credit. The Final Random
          Inspection (FRI), or Pre-Shipment Inspection (PSI), checks finished
          products when at least 80% of your order has been produced and
          export-packed. Samples are selected at random, according to
          International standards and Industry procedures.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-2 lg:gap-8 xl:gap-8 mt-14">
          <div className="sm:h-[321px]  lg:h-[312px] xl:h-[321px] sm:order-2 mx-[15px] xl:mx-0 ">
            <div className="">
              <p className="text-[#333333] font-work-sans text-f15 mb-6">
                Our Inspection services can cover, every aspect of supply-chain
                management, from sourcing of raw materials to final delivery to
                finished goods. Our detailed services for Post-shipment
                Inspection include:
              </p>
              <ul className="list-disc ps-8 text-[#333333] font-work-sans text-f15">
                <li>Inspection of raw-materials sourced;</li>
                <li>In-coming Inspection of production materials;</li>
                <li>During or In-Production Inspection;</li>
                <li>Finished goods Inspection;</li>
                <li>Loading Inspection;</li>
                <li>Discharge Inspection; and</li>
                <li>Ware-housing and Storage-hold Inspections.</li>
              </ul>
            </div>
          </div>

          <div className="sm:h-[321px] lg:h-[312px] xl:h-[321px] bg-[#ffffff] sm:order-1 px-[15px] xl:px-0 sm:mb-6">
            <img
              src={preshipmentRightImg}
              alt="preshipmentRightImg"
              className="w-full h-full object-cover"
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
                    src={Lift_and_Lifting_Inspection_Services}
                    alt="Lift_and_Lifting_Inspection_Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/lift-lifting"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      Lift and Lifting Inspection Services
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

export default PostLanding;
