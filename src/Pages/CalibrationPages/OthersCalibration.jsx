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
// import right_side_img1 from "../../assets/service_category/img-03-360x260.jpg";
// import right_side_img2 from "../../assets/service_category/img-02-360x260.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const OthersCalibration = () => {
  document.title = "All Others Calibration - IISPL Bangladesh";
  return (
    <div className="service_category_header">
      <Header />
      <section className="xl:-top-7 relative">
        <div className="bg_banner h-[250px] relative ">
          <div className="xl:container flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold text-center">
              ALL OTHERS CALIBRATION
            </h2>
            <p className="flex items-center text-white-#fff">
              <Link to={"/"}>
                <AiFillHome className="me-2 text-white-#ffffffb8 hover:text-[#ffffff]" />
              </Link>{" "}
              <BsArrowRight className="me-2" />
              <span className="font-roboto-normal font-medium text-f14 text-white-#fff">
                All Others Calibration
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container text-white-#fff pt-16 flex flex-col lg:flex-row xl:flex-row">
        <div className="lg:w-[40%] xl:w-[30%] bg-light-blue-300">
          <div className=" ">
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

                <div className="bg-[#ffffff] mx-[15px] md:mx-[15px] lg:mx-[30px] xl:mx-[30px]  my-12 overflow-hidden contact-box">
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
            <section className="xl:container text-white-#fff flex">
              <div className="px-[15px]">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 xl:pb-10 sm:pt-4 md:pt-4">
                  {/* <img
                    src={right_side_img1}
                    alt="Image 1"
                    className="w-full object-cover"
                  />
                  <img
                    src={right_side_img2}
                    alt="Image 2"
                    className="w-full object-cover"
                  /> */}
                </div>
                <div className="flex">
                  <div className="xl:w-[100%]">
                    <h2 className="text_light_roboto_normal text-f18 mt-7 mb-3">
                      <strong className="text_bold_roboto_lowercase text-f18">
                        When it comes to financial matters, customer engagement
                        matters more than ever.
                      </strong>
                    </h2>
                    <p className="text-f15 text-dark font-work-sans mb-2 leading-[24px] text-justify md:pe-12 lg:pe-12 xl:pe-12">
                      Must explain to you how all this mistaken idea of
                      denouncing works pleasure and praising uts pain was born
                      and I will gives you a itself completed account of the
                      system, and sed expounds the ut actual teachings of that
                      greater sed explores truth.
                    </p>
                    <p className="text-f15 text-dark font-work-sans mb-6 leading-[24px] text-justify md:pe-12 lg:pe-12 xl:pe-12">
                      Denouncing works pleasures and praising pains was us born
                      and I will gives you a completed ut workers accounts of
                      the system.
                    </p>
                  </div>
                </div>

                <div className="border-[5px] border-light-blue-300 mt-10 mb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
                    <div className="p-10">
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Rat/Mouse PINP EIA
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        IDS-iSYS PTH (1-34)
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        IDS-iSYS PTH (1-34)
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Corticosterone HS
                      </p>

                      <p className="text-dark text-f15 text-dark font-work-sans">
                        Corticosterone HS
                      </p>
                    </div>
                    <div className="p-10">
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Rat/Mouse PINP EIA
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        IDS-iSYS PTH (1-34)
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Corticosterone EIA
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans mb-3">
                        Corticosterone HS
                      </p>
                      <p className="text-dark text-f15 text-dark font-work-sans">
                        Urine CartiLaps EIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="xl:w-[100%]">
                    <h2 className="text_light_roboto_normal text-f18 mb-3">
                      <strong className="text_bold_roboto_lowercase text-f14">
                        OUR RESEARCH
                      </strong>
                    </h2>
                    <p className="text-f15 text-dark font-work-sans mb-2 leading-[24px] text-justify pe-12">
                      Must explain to you how all this mistaken idea of
                      denouncing works pleasure and praising uts pain was born
                      and I will gives you a itself completed account of the
                      system, and sed expounds the ut actual teachings of that
                      greater sed explores truth.
                    </p>
                    <p className="text-f15 text-dark font-work-sans mb-6 leading-[24px] text-justify pe-12">
                      Denouncing works pleasures and praising pains was us born
                      and I will gives you a completed ut workers accounts of
                      the system.
                    </p>
                  </div>
                </div>
                <div className="xl:w-[100%] others_calibration_accordian mb-6">
                  <Accordion preExpanded={["1"]} className="border-none">
                    <AccordionItem uuid="1">
                      <AccordionItemHeading className="uppercase">
                        <AccordionItemButton>
                          Bibliographic and IP research
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="text-f15 text-dark font-work-sans mb-6 leading-[24px] text-justify pe-12">
                          The master-builders off human happiness no one
                          rejects, ours avoids pleasure itself, because seds is
                          pleasure, but because those who do not know to
                          rationally.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="2">
                      <AccordionItemHeading className="uppercase">
                        <AccordionItemButton>
                          Route scouting design of new routes
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="text-f15 text-dark font-work-sans mb-6 leading-[24px] text-justify pe-12">
                          The master-builders off human happiness no one
                          rejects, ours avoids pleasure itself, because seds is
                          pleasure, but because those who do not know to
                          rationally.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="3">
                      <AccordionItemHeading className="uppercase">
                        <AccordionItemButton>
                          Chemical development
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="text-f15 text-dark font-work-sans mb-6 leading-[24px] text-justify pe-12">
                          The master-builders off human happiness no one
                          rejects, ours avoids pleasure itself, because seds is
                          pleasure, but because those who do not know to
                          rationally.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
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

export default OthersCalibration;
