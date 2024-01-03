import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import { Compass, Microscope2, Technician } from "../Components/SvgComponent";
import { Link } from "react-router-dom";

const StackAirTesting = () => {
  document.title =
    "Stack Air Emission Testing Services in Bangladesh - IISPL BD";
  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="common_bg_banner h-[250px] relative">
          <div className="xl:container flex flex-col  xl:flex-row justify-center xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] md:px-0 xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto sm:text-center text-f48 font-bold">
              STACK AIR EMISSION TESTING
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
                Stack Air Emission Testing
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container text-white-#fff py-16 flex flex-col lg:flex-row xl:flex-row">
        <div className="lg:w-[60%] xl:w-[60%] sm:order-2 md:order-2 lg:order-1 xl:order-1 sm:px-[15px] md:px-[15px] lg:px-[15px]">
          <h2 className="text_light_roboto_lowercase text-f40  xl:mx-auto mb-7">
            <strong className="text_bold_roboto">IISPL &nbsp;</strong>
            Stack Air Emission Testing
          </h2>
          <p className="xl:max-w-[680px] xl:me-auto text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px]">
            Post-shipment Inspections are key factors for supply chain
            management and a reliable quality assurance tool for validating the
            quality of goods purchased from suppliers within the country or from
            various parts of the world.
          </p>
          <p className="xl:max-w-[680px] xl:me-auto text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px]">
            Our Stack Air Emission Testing Services are below-
          </p>
          <ul className="list-disc ps-8 text-[#333333] font-work-sans text-f15">
            <li>SOx</li>
            <li>NOx</li>
            <li>SPM (Suspended Particulate Material)</li>
            <li>PM 2.5, PM 10</li>
            <li>CO</li>
            <li>CO2</li>
          </ul>
        </div>
        <div className="lg:w-[40%] xl:w-[40%] sm:order-1 md:order-1 lg:order-2 xl:order-2 md:w-10/12 h-full mx-auto sm:mb-8 md:mb-8 px-[15px]">
          {/* <div className="sm:h-[371px] md:h-[371px] lg:h-[371px] xl:h-[371px] bg-[#ffffff]"> */}
          <img
            src={require("../assets/Services/Stack-Air-Emission-Testing.jpg")}
            alt="Air-Emission-Testing"
            className="w-full h-full object-cover"
          />
          {/* </div> */}
        </div>
      </section>

      <section className="bg-blue-400 text-white-#fff py-[55px] sm:px-[15px] md:px-[15px] lg:px-[15px]">
        <div className="xl:container flex justify-between items-center sm:flex-col ">
          <div className="xl:pe-6 xl:w-[100%]">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-6 lg:gap-6 xl:gap-6">
              <div className="h-[320px] bg-[#ffffff] sm:mb-[20px]">
                <div className="h-[236px]">
                  <img
                    src={require("../assets/Services/img-03.jpg")}
                    alt="img-03"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/environmental-testing"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      Environmental Testing
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="h-[320px] bg-[#ffffff] sm:mb-[20px]">
                <div className="h-[236px]">
                  <img
                    src={require("../assets/Services/img-01.jpg")}
                    alt="img-01"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/water-testing"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      Water Testing
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="md:h-[320px] lg:h-[320px] xl:h-[320px] flex items-end  sm:mb-[20px]">
                <div>
                  <h2 className="text_light_roboto_lowercase text-f40 text-[#ffffff]  xl:mx-auto ">
                    VISIT ALL OTHER
                  </h2>
                  <strong className="text_bold_roboto text-f40 text-[#ffffff]  xl:mx-auto mb-7">
                    TESTING SERVICES &nbsp;
                  </strong>
                  <p className="xl:max-w-[680px] xl:mx-auto text-f18 text-[rgba(255,255,255,.8)] font-work-sans font_work_sans_bold leading-[24px]">
                    We appreciate your trust and hope that you find our services
                    helpful.
                  </p>
                </div>
              </div>

              {/* <div className="h-[320px] bg-[#ffffff]">
                <div className="h-[236px]">
                  <img
                    src={Oil_Testing}
                    alt="Image 5"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-[84px]">
                  <Link to={"/services/oil-testing"}>
                    <h2 className="text_bold_roboto_lowercase text-f24  xl:mx-auto text-center text-[#00008B]">
                      Oil Testing
                    </h2>
                  </Link>
                </div>
              </div> */}
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
                <Compass fill={"#031b4e"} height={45} />
              </div>
              <Link to={"/services/inspection"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  INSPECTION SERVICES
                </h4>
              </Link>
            </div>

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

export default StackAirTesting;
