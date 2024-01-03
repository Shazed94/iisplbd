import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import {
  Compass,
  HandBurn,
  HexMolecule,
  Microscope,
  Microscope2,
  Molecular,
  Scientific,
  Suit,
  Technician,
} from "../Components/SvgComponent";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../Utils/GlobalVariables";
import { ToastSuccess } from "../Components/ToastAlert";

const Inspection = () => {
  const [name, type, message] = [useRef(), useRef(), useRef()];
  const [errors, setError] = useState([]);

  // form submit to backend
  const submitContactForm = (e) => {
    const formdata = new FormData();
    formdata.append("name", name.current.value);
    formdata.append("inspection_type", type.current.value);
    formdata.append("message", message.current.value);

    document.title = "Inspection Services of IISPL BD";
    axios
      .post(`${BACKEND_BASE_URL}frontend/inspection-message`, formdata)
      .then((response) => {
        if (response.data?.status == 200) {
          ToastSuccess.fire({
            icon: "success",
            title: "Your message has been sent!",
          });
          e.target.reset();
        } else {
          setError(response.data?.errors);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="bg_banner h-[250px] relative">
          <div className="absolute inset-0 opacity-75 bg-dark-blue-text"></div>
          <div className="xl:container flex flex-col  lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold  text-center">
              INSPECTION SERVICES
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
                Inspection Services
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="xl:container py-14">
        <h2 className="text_light_roboto text-f40 xl:max-w-[680px] xl:mx-auto text-center mb-12 px-6 md:px-0 lg:px-0 xl:px-0">
          EVALUATION OF THE CURRENT SAFETY{" "}
          <strong className="text_bold_roboto">
            IISPL INSPECTION SERVICES
          </strong>
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-10">
          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] xl:mx-0">
            <div className="mb-6 ">
              <Molecular
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <Link to={"/services/qa-qc"}>
              <p className="uppercase text-f18 font-bold font-roboto text-center hover:text-white-#fff ">
                QA & QC SERVICES
              </p>
            </Link>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] xl:mx-0">
            <div className="mb-6">
              <HexMolecule
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <Link to={"/services/ndt-nde"}>
              <p className="uppercase text-f18 font-bold font-roboto text-center hover:text-white-#fff ">
                NDT/NDE SERVICES
              </p>
            </Link>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff text-center mx-[15px] xl:mx-0">
            <div className="mb-6">
              <HandBurn
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <Link to={"/services/equipment-safety"}>
              <p className="uppercase text-f18 font-bold font-roboto text-center hover:text-white-#fff ">
                EQUIPMENT INTEGRITY SERVICES
              </p>
            </Link>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400  hover:bg-blue-400 hover:text-white-#fff text-center mx-[15px] xl:mx-0">
            <div className="mb-6 ">
              <Compass
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <Link to={"/services/lift-lifting"}>
              <p className="uppercase text-f18 font-bold font-roboto text-center hover:text-white-#fff ">
                LIFT AND LIFTING INSPECTION SERVICES
              </p>
            </Link>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff text-center mx-[15px] xl:mx-0">
            <div className="mb-6">
              <Suit
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <Link to={"/services/pre-shipment"}>
              <p className="uppercase text-f18 font-bold font-roboto text-center hover:text-white-#fff ">
                PRE-SHIPMENT INSPECTION
              </p>
            </Link>
          </div>

          <div className="group flex flex-col items-center px-14 py-14 transition-all duration-500 ease-in-out service_box text-blue-400 hover:bg-blue-400 hover:text-white-#fff mx-[15px] xl:mx-0">
            <div className="mb-6">
              <Scientific
                height={60}
                className="transition-all duration-500 ease-in-out fill-dark-blue-text group-hover:fill-white-#fff"
              />
            </div>
            <Link to={"/services/post-landing"}>
              <p className="uppercase text-f18 font-bold font-roboto text-center hover:text-white-#fff ">
                POST LANDING INSPECTION
              </p>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Link to={"/services"}>
            <button
              title="More Services"
              className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff"
            >
              More Services
            </button>
          </Link>
        </div>
      </section>

      <section className="conatct_form py-12 ">
        <h2 className="xl:container text_light_roboto text-f40 mb-10 px-[15px] md:max-w-[545px] lg:max-w-[545px]">
          NEED AN INSPECTION SERVICE? <br />
          <strong className="text_bold_roboto text-f40">
            MAKE AN APPOINTMENT TODAY
          </strong>
        </h2>
        <div className="contact_form_bg relative">
          <form
            onSubmit={submitContactForm}
            className="contact_form bg-blue-400 px-4 py-8 xl:max-w-[450px] absolute md:right-0 md:left-[50%] lg:left-[55%] lg:right-0 xl:right-[22%] sm:top-[11%] md:-top-16 lg:-top-28 xl:-top-28"
          >
            <h3 className="font-roboto text-f26 font-bold text-white-#fff uppercase mb-3">
              PLEASE FILL THE FORM
            </h3>
            <input
              ref={name}
              type="text"
              placeholder="Your name"
              className="bg-[#333385] placeholder:text-[#9999C2] text-white-#fff focus:outline-none w-full p-3 mb-10"
            />
            <small>{errors?.name && errors?.name}</small>
            <input
              ref={type}
              type="text"
              placeholder="Type of inspection"
              className="bg-[#333385] placeholder:text-[#9999C2] text-white-#fff focus:outline-none w-full p-3 mb-10"
            />
            <small>{errors?.type && errors?.type}</small>
            <input
              ref={message}
              type="text"
              placeholder="Your message"
              className="bg-[#333385] placeholder:text-[#9999C2] text-white-#fff focus:outline-none w-full p-3 mb-10"
            />
            <small>{errors?.message && errors?.message}</small>
            <button className="uppercase bg-white-#fff text-blue-400 hover:bg-light-blue-400 hover:text-white-#fff transition-all duration-300 ease-in-out w-full py-3 mb-12">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="xl:container px-[15px] xl:px-0 pt-12 pb-24 flex flex-col md:flex-row lg:flex-row xl:flex-row ">
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

export default Inspection;
