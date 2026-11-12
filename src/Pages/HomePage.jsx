import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import {
    Compass,
    Globe,
    Graph,
    HandSvg,
    Microscope,
    Microscope2,
    Technician,
} from "../Components/SvgComponent";

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import CountUpComponent from "../Components/CountUp";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BACKEND_BASE_URL, fileUrl } from "../Utils/GlobalVariables";

import { Link } from "react-router-dom";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { CircularDotLoader } from "../Components/Custom Loader/CustomLoader";

const HomePage = () => {
  document.title =
    "Inspection, Calibration, Testing Company || IISPL Bangladesh";

  // Hero Slider
  const [slider, setSlider] = useState([]);
  const renderHeroSlider = async () => {
    await axios.get(`${BACKEND_BASE_URL}frontend/slider-image`).then((res) => {
      setSlider(res.data?.data);
    });
  };

  // Organizations Certifications Slider
  const [certificates, setCertificates] = useState([]);
  const renderCertificates = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}frontend/organizations-certifications`)
      .then((res) => {
        setCertificates(res.data?.data);
      });
  };

  // Clients Slider
  const [clients, setClients] = useState([]);
  const renderClients = async () => {
    await axios.get(`${BACKEND_BASE_URL}frontend/clients`).then((res) => {
      setClients(res.data?.data);
    });
  };

  useEffect(() => {
    renderHeroSlider();
    renderCertificates();
    renderClients();
  }, []);
  return (
    <Fragment>
      <Header />
      <section className="hero homepage">
        <div className="  hero_carousel relative -top-7 md:-top-0 sm:-top-0  xl:min-h-[732px]">
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              autoplay: true,
              pagination: false,
              type: "fade",
              speed: 1500,
              interval: 6000,
              cover: true,
              width: "100%",
              height: "100%",
              fixedHeight: "732px",

              breakpoints: {
                1024: {
                  fixedHeight: "732px",
                },
                767: {
                  fixedHeight: "732px",
                },
                640: {
                  fixedHeight: "400px",
                  arrows: false,
                },
              },
            }}
          >
            <SplideTrack>
              {slider?.length > 0 ? (
                slider?.map((slider, i) => (
                  <SplideSlide key={i}>
                    <img src={`${fileUrl}${slider?.image}`} alt="slider" />
                    <div className="xl:container h-full flex flex-col justify-center">
                      <h5 className="slider_subtitle text-light-blue-400  text-f14  font-semibold font-oswald uppercase mb-4 tracking-[2px] relative inline-block sm:mx-[15px] md:mx-[15px] lg:mx-[15px] [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
                        Led By Passionate Experts
                      </h5>
                      <h2 className="slider_title text-white-#fff text-f60 sm:text-f26 font-semibold font-oswald capitalize leading-[60px] sm:leading-[30px] mb-5  sm:mx-[15px] md:mx-[15px] lg:mx-[15px] [text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000] ">
                        IISPL Provides Best <br /> Inspection Services in
                        Bangladesh
                      </h2>
                      <Link to={"/services/inspection"}>
                        <button className="slider_btn inline-block uppercase text-f14 font-bold font-roboto bg-white-#fff text-light-blue-400 hover:bg-light-blue-400 hover:text-white-#fff px-9 py-3  sm:mx-[15px] md:mx-[15px] lg:mx-[15px]">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </SplideSlide>
                ))
              ) : (
                <CircularDotLoader className="flex justify-center items-center w-screen h-[732px]" />
              )}
            </SplideTrack>
            <div className="splide__arrows_1"></div>
          </Splide>
        </div>
        <div className="hidden xl:block xl:container relative z-10 -top-[100px]">
          <div className="contact_us bg-blue-400 flex">
            <div className="">
              <img
                src={require("../assets/homepage/contact_us_banner.jpg")}
                alt=""
                className="w-[400px] h-[120px] object-cover"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white-#ffffffcc font-bold font-work-sans text-f15 ps-[40px] pe-[40px]">
                IISPL provides services, solutions and support that customers
                can rely on during the entire product development life cycle.
              </p>
              <Link to={"/contacts"}>
                <button
                  title="Contacts"
                  className=" w-52 bg-white-#fff text-dark-blue-text font-roboto text-f14 uppercase px-10 py-[12px] transition hover:bg-light-blue-400 hover:text-white-#fff me-5"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:container countup">
        <div className="map sm:mt-5 md:mt-0 lg:mt-4 font-roboto">
          <h2 className="uppercase text-dark-blue-text text-f40 font-light pt-8 md:pt-24 lg:pt-20 xl:pt-24 text-center mb-12">
            WE’LL ENSURE YOU ALWAYS GET <br />{" "}
            <strong className="font-bold">BEST RESULTS.</strong>
          </h2>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-around lg:justify-around xl:justify-around">
            <div className="flex flex-col items-center mb-3 md:mb-0">
              <HandSvg fill="#031b4e" height={60} />
              <CountUpComponent
                start={0}
                end={1000}
                scrollSpyOnce
                enableScrollSpy
                scrollSpyDelay={400}
                duration={3}
                className="text-blue-400 font-roboto font-bold text-f60"
              />

              <h4 className="text-dark-blue-text text-f18 font-bold font-roboto">
                Calibration
              </h4>
            </div>
            <div className="flex flex-col items-center mb-3 md:mb-0">
              <Technician fill="#031b4e" height={60} />
              <CountUpComponent
                start={0}
                end={302}
                scrollSpyOnce
                enableScrollSpy
                scrollSpyDelay={400}
                duration={3}
                className="text-blue-400 font-roboto font-bold text-f60"
              />
              <h4 className="text-dark-blue-text text-f18 font-bold font-roboto">
                Inspection
              </h4>
            </div>
            <div className="flex flex-col items-center mb-3 md:mb-0">
              <Microscope fill="#031b4e" height={60} />
              <CountUpComponent
                start={0}
                end={50}
                scrollSpyOnce
                enableScrollSpy
                scrollSpyDelay={400}
                duration={3}
                className="text-blue-400 font-roboto font-bold text-f60"
              />
              <h4 className="text-dark-blue-text text-f18 font-bold font-roboto">
                testing
              </h4>
            </div>
            <div className="flex flex-col items-center mb-3 md:mb-0">
              <Globe fill="#031b4e" height={60} />
              <CountUpComponent
                start={0}
                end={640}
                scrollSpyOnce
                enableScrollSpy
                scrollSpyDelay={400}
                duration={3}
                className="text-blue-400 font-roboto font-bold text-f60"
              />
              <h4 className="text-dark-blue-text text-f18 font-bold font-roboto">
                Training
              </h4>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-[2px] my-8 bg-white-#fff-#f1f1f1 border-0" />
      <section className="xl:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:gap-12 gap-8 md:pt-[58px] lg:pt-[58px] xl:pt-[58px] pb-[70px] others_calibration_accordian ">
        <div className="px-[15px] xl:px-0 sm:mt-[20px]">
          <h2 className="uppercase text-dark-blue-text text-f36 font-light font-roboto">
            OUR <strong className="font-extrabold">PHILOSOPHY</strong>
          </h2>
          <p className="uppercase text-f18 font-roboto text-dark-blue-text mb-7 md:mb-12 lg:mb-12 xl:mb-12 leading-[15px] lg:leading-[15px] xl:leading-[15px]">
            QUALITY IS OUR QUALITY
          </p>
          <Accordion preExpanded={["1"]} className="border-none">
            <AccordionItem uuid="1">
              <AccordionItemHeading className="uppercase">
                <AccordionItemButton>We are professional</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  People are our prime movers; our engineers are qualified and
                  well trained in all technical standards. Periodically we
                  enrich our engineers with new technologies and methods by
                  providing internal and external training.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="2">
              <AccordionItemHeading className="uppercase">
                <AccordionItemButton>Why you choose us</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  IISPL provides services, solutions, and support that customers
                  can rely on during the entire product development lifecycle.
                  IISPL has committed to becoming a world leader in areas of
                  Inspection, Calibration, Testing & Training services by the
                  delivery on time with customer satisfaction and competitive
                  price.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="3">
              <AccordionItemHeading className="uppercase">
                <AccordionItemButton>Management</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  IISPL ensures all Inspection, Testing, Training & Calibration
                  services shall be carried out impartially without any conflict
                  and maintain confidentiality by our competent inspectors,
                  Calibration Experts across the globe.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="px-[15px] xl:px-0">
          <h2 className="uppercase text-dark-blue-text text-f36 font-light font-roboto mb-6">
            <strong className="font-extrabold">IISPL</strong> - IIS Testing BD
            Pvt. Ltd.
          </h2>
          <h5 className="text-dark-blue-text font-medium text-f18 font-work-sans sm:mb-6 mb-12 md:mb-9 lg:mb-9 xl:mb-9">
            IISPL Bangladesh as 3rd Party Calibration, Inspection, Testing and
            Training Services providing Company. We have vast experience to
            offer these services in Bangladesh as well as all over the world
            (approx. 46 countries in the world).
          </h5>
          <p className="text-black text-f15 font-work-sans mb-8 pb-1 leading-6 ">
            These services are helpful to achieve Quality during the complete
            project construction phase and also during Plant operations. We can
            offer Inspection services worldwide for all procured equipment and
            as well as during the construction phase of the project.
          </p>
          <Link to={"/about-us"}>
            <button
              title="About Us"
              className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff"
            >
              More About us
            </button>
          </Link>
        </div>
      </section>

      <section className="xl:container mx-auto pt-8 pb-24 px-[15px] certifications">
        <p className="mb-[50px] text-center text-dark-blue-text font-work-sans text-f18 font-medium">
          Organizations Certifications
        </p>

        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            pagination: false,
            type: "loop",
            perPage: 6,
            speed: 1500,
            interval: 100000,
            gap: "5rem",
            width: "100%",
            rewind: true,
            breakpoints: {
              1024: {
                perPage: 6,
                arrows: false,
                gap: "5rem",
              },
              767: {
                perPage: 2,
                arrows: false,
                gap: "3rem",
              },
              640: {
                perPage: 1,
                arrows: false,
                focus: "center",
                gap: "1rem",
              },
            },
          }}
        >
          <SplideTrack>
            {certificates?.map((certificate) => (
              <SplideSlide key={certificate.id}>
                <OverlayTrigger
                  overlay={(props) => (
                    <Tooltip {...props}>{certificate?.title}</Tooltip>
                  )}
                  placement="top"
                >
                  <img
                    title={certificate?.title}
                    src={`${fileUrl}${certificate?.image}`}
                    alt={certificate?.title}
                    className="w-full h-auto max-w-[280px] xl:max-w-full m-auto"
                  />
                </OverlayTrigger>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows "></div>
        </Splide>
      </section>

      <section className="bg-light-blue-bg py-24 iispl_services">
        <div className="xl:container text-center">
          <h2 className="text_light_roboto text-f40 leading-[60px]">
            EVALUATION OF THE CURRENT SAFETY
          </h2>
          <h2 className="text_bold_roboto text-f40 mb-7 leading-10">
            <strong className="font-extrabold"> IISPL SERVICES</strong>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
            <div className="group flex flex-col items-center sm:mx-[15px] md:mx-[15px] lg:mx-[15px] px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff">
              <div className="mb-6 ">
                <Compass
                  height={60}
                  className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
                />
              </div>
              <Link to={"/services/inspection"}>
                <p className="uppercase text-f18 font-bold font-roboto hover:text-white-#fff ">
                  INSPECTION SERVICES
                </p>
              </Link>
            </div>
            <div className="group flex flex-col items-center sm:mx-[15px] md:mx-[15px] lg:mx-[15px] px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff">
              <div className="mb-6">
                <Microscope2
                  height={60}
                  className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
                />
              </div>
              <Link to={"/services/calibration"}>
                <p className="uppercase text-f18 font-bold font-roboto hover:text-white-#fff">
                  CALIBRATION SERVICES
                </p>
              </Link>
            </div>
            <div className=" group flex flex-col items-center sm:mx-[15px] md:mx-[15px] lg:mx-[15px] px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff ">
              <div className="mb-6">
                <Globe
                  height={60}
                  className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
                />
              </div>
              <Link to={"/services/environmental-testing"}>
                <p className="uppercase text-f18 font-bold font-roboto hover:text-white-#fff ">
                  ENVIRONMENTAL TESTING
                </p>
              </Link>
            </div>
            <div className="group flex flex-col items-center sm:mx-[15px] md:mx-[15px] lg:mx-[15px] px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400  hover:bg-blue-400 hover:text-white-#fff ">
              <div className="mb-6 ">
                <Graph
                  height={60}
                  className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
                />
              </div>
              <Link to={"/services/qa-qc"}>
                <p className="uppercase text-f18 font-bold font-roboto hover:text-white-#fff">
                  QA & QC SERVICES
                </p>
              </Link>
            </div>
            <div className=" group flex flex-col items-center sm:mx-[15px] md:mx-[15px] lg:mx-[15px] px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff ">
              <div className="mb-6">
                <HandSvg
                  height={60}
                  className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
                />
              </div>
              <Link to={"/services/equipment-safety"}>
                <p className="uppercase text-f18 font-bold font-roboto hover:text-white-#fff">
                  EQUIPMENT SAFETY SERVICES
                </p>
              </Link>
            </div>
            <div className="group flex flex-col items-center sm:mx-[15px] md:mx-[15px] lg:mx-[15px] px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff ">
              <div className="mb-6">
                <Technician
                  height={60}
                  className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
                />
              </div>
              <Link to={"/services/training-program"}>
                <p className="uppercase text-f18 font-bold font-roboto hover:text-white-#fff">
                  TRAINING PROGRAM
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-white-#fff flex flex-col lg:flex-row xl:flex-row xl:justify-between border-b-[3px] border-blue-400 overflow-hidden">
        <div className="px-[15px] xl:px-0 md:ms-0 lg:ms-0 xl:ms-[15px] max-w-xl">
          <h2 className="text_light_roboto text-f40 mb-[30px] max-w-[450px] leading-tight">
            WE EMPLOY THE LATEST{" "}
            <strong className="text_bold_roboto text-f40 ">
              TECHNOLOGY & COMPANY
            </strong>
          </h2>
          <p className="mb-[1px] font-work-sans text-f18 font-medium text-dark-blue-text">
            Our motto is to offer trusted & reliable world-class third-party
            inspection services for all industrial projects and manufacturing
            industries related to:
          </p>
          <div className="grid grid-cols-2 xl:p-10 xl:mb-10">
            <p className="mb-3">Oil & Gas Industries</p>
            <p className="mb-3">Refineries</p>
            <p className="mb-3">Textile & Garments</p>
            <p className="mb-3">Thermal power stations</p>
            <p className="mb-3">Petrochemical plants</p>
            <p className="mb-3">Renewable Energy sectors</p>
          </div>
          <Link to={"/services"}>
            <button className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 mt-8 xl:mt-0 mb-6 xl:mb-0 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff">
              View Our services
            </button>
          </Link>
        </div>

        <div className="">
          <img src={bannerRight} alt="" className="w-full overflow-x-hidden" />
        </div>
      </section> */}

      <section className="relative py-24 bg-white-#fff  border-b-[3px] border-blue-400 ">
        <div className="xl:container flex flex-col lg:flex-row xl:flex-row xl:justify-between">
          <div className="px-[15px] xl:px-0 md:ms-0 lg:ms-0 xl:ms-[15px] md:max-w-xl lg:max-w-xl xl:max-w-xl">
            <h2 className="text_light_roboto text-f40 mb-[30px] leading-tight">
              WE EMPLOY THE LATEST{" "}
              <strong className="text_bold_roboto text-f40 ">
                TECHNOLOGY & COMPANY
              </strong>
            </h2>
            <p className="mb-[30px] font-work-sans text-f18 font-medium text-dark-blue-text">
              Our motto is to offer trusted & reliable world-class third-party
              inspection services for all industrial projects and manufacturing
              industries related to:
            </p>
            <div className="grid sm:grid-cols-1 grid-cols-2 xl:p-10 xl:mb-0">
              <p className="mb-3">Oil & Gas Industries</p>
              <p className="mb-3">Refineries</p>
              <p className="mb-3">Textile & Garments</p>
              <p className="mb-3">Thermal power stations</p>
              <p className="mb-3">Petrochemical plants</p>
              <p className="mb-3">Renewable Energy sectors</p>
            </div>
            <Link to={"/services"}>
              <button className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 mt-8 xl:mt-0 sm:mb-10 md:mb-10 mb-6 xl:mb-0 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff">
                View Our services
              </button>
            </Link>
          </div>

          <div className="xl:absolute xl:right-0 absolute_banner">
            <img
              src={require("../assets/homepage/banner-right.jpg")}
              alt=""
              className="w-full overflow-x-hidden"
            />
          </div>
        </div>
      </section>

      <section className="xl:container px-[15px] py-24 calibration">
        <div className="xl:max-w-[660px] xl:mx-auto mb-16 px-[15px] xl:px-0">
          <h2 className="text_light_roboto text-f40 text-center mb-[30px]">
            EXPLORE OUR{" "}
            <strong className="text_bold_roboto">CALIBRATION SERVICES</strong>
          </h2>
          <p className="text-center text-f18 font-work-sans font-medium text-dark-blue-text">
            IISPL Bangladesh provides the best calibration services in the areas
            of chemical, electronic, mechanical, dimensional, and
            thermodynamics. Our services assure that your dimensional equipment
            produces precise, accurate, and repeatable results.
          </p>
        </div>
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            pagination: false,
            type: "loop",
            perPage: 3,
            speed: 1500,
            interval: 5000,
            gap: "2rem",
            width: "100%",
            rewind: true,
            breakpoints: {
              1024: {
                perPage: 3,
                arrows: false,
                gap: "1.5rem",
              },
              767: {
                perPage: 2,
                arrows: false,
                gap: "1rem",
              },
              640: {
                perPage: 1,
                arrows: false,
                focus: "center",
                gap: "1.2rem",
              },
            },
          }}
        >
          <SplideTrack>
            <SplideSlide className="max-w-[92%] xl:max-w-full">
              <img
                src={require("../assets/homepage/calibration-services/calibration-1.jpg")}
                alt="calibration-1"
                className="w-full h-52 object-cover  m-auto"
              />
              <div className="bg-light-blue-300 py-5 px-7 h-full">
                <small className="text-blue-400 text-f12 font-work-sans uppercase">
                  calibration services
                </small>
                <Link to={"/services/electrical-calibration"}>
                  <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                    Electrical Calibration
                  </h5>
                </Link>
                <p className="text-f15 font-work-sans text-black">
                  Our electronic calibration services assure that your
                  electronic equipment produces precise, accurate, and
                  repeatable results.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="max-w-[92%] xl:max-w-full">
              <img
                src={require("../assets/homepage/calibration-services/calibration-2.jpg")}
                alt="calibration-2"
                className="w-full h-52 object-cover"
              />
              <div className="bg-light-blue-300 py-5 px-7 h-full">
                <small className="text-blue-400 text-f12 font-work-sans uppercase">
                  calibration services
                </small>
                <Link to={"/services/dimensional-calibration"}>
                  <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                    Dimentional Calibration
                  </h5>
                </Link>
                <p className="text-f15 font-work-sans text-black">
                  Our dimensional calibration services assure that your
                  dimensional equipment produces precise, accurate, and
                  repeatable results.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="max-w-[92%] xl:max-w-full">
              <img
                src={require("../assets/homepage/calibration-services/calibration-3.jpg")}
                alt="calibration-3"
                className="w-full h-52 object-cover"
              />
              <div className="bg-light-blue-300 py-5 px-7 h-full">
                <small className="text-blue-400 text-f12 font-work-sans uppercase">
                  calibration services
                </small>
                <Link to={"/services/chemical-calibration"}>
                  <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                    Chemical Calibration
                  </h5>
                </Link>
                <p className="text-f15 font-work-sans text-black">
                  Our chemical calibration services assure that your chemical
                  equipment produces precise, accurate, and repeatable results.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="max-w-[92%] xl:max-w-full">
              <img
                src={require("../assets/homepage/calibration-services/calibration-4.jpg")}
                alt="calibration-4"
                className="w-full h-52 object-cover"
              />
              <div className="bg-light-blue-300 py-5 px-7 h-full">
                <small className="text-blue-400 text-f12 font-work-sans uppercase">
                  calibration services
                </small>
                <Link to={"/services/thermodynamic-calibration"}>
                  <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                    Thermodynamic Calibration
                  </h5>
                </Link>
                <p className="text-f15 font-work-sans text-black">
                  Our thermodynamic calibration services assure that your
                  thermodynamic equipment produces precise, accurate, and
                  repeatable results.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide className="max-w-[92%] xl:max-w-full">
              <img
                src={require("../assets/homepage/calibration-services/calibration-5.jpg")}
                alt="calibration-5"
                className="w-full h-52 object-cover"
              />
              <div className="bg-light-blue-300 py-5 px-7 h-full">
                <small className="text-blue-400 text-f12 font-work-sans uppercase">
                  calibration services
                </small>
                <Link to={"/services/mechanical-calibration"}>
                  <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                    Mechanical Calibration
                  </h5>
                </Link>
                <p className="text-f15 font-work-sans text-black">
                  Our mechanical calibration services assure that your
                  mechanical equipment produces precise, accurate, and
                  repeatable results.
                </p>
              </div>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows "></div>
        </Splide>
      </section>

      <section className="xl:container px-[15px] pb-24 organizations">
        <p className=" text-center font-work-sans text-f18 font-medium text-dark-blue-text mb-14">
          Our clients are over 100 of the world’s leading organizations:
        </p>
        <Splide
          hasTrack={false}
          options={{
            autoplay: true,
            pagination: false,
            type: "loop",
            perPage: 6,
            speed: 1500,
            interval: 5000,
            gap: "5rem",
            width: "100%",
            rewind: true,
            breakpoints: {
              1024: {
                perPage: 6,
                arrows: false,
                gap: "3rem",
              },
              767: {
                perPage: 3,
                arrows: false,
                gap: "1.2rem",
              },
              640: {
                perPage: 2,
                arrows: false,
                gap: "1.2rem",
              },
            },
          }}
        >
          <SplideTrack>
            {clients?.map((client) => (
              <SplideSlide key={client.id}>
                <OverlayTrigger
                  overlay={(props) => (
                    <Tooltip {...props}>{client?.title}</Tooltip>
                  )}
                  placement="top"
                >
                  <img
                    src={`${fileUrl}${client?.image}`}
                    alt={client.title}
                    className="max-w-[92%] xl:max-w-full xl:m-0"
                  />
                </OverlayTrigger>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows "></div>
        </Splide>
      </section>

      <Footer />
    </Fragment>
  );
};

export default HomePage;
