import { AiFillHome } from "react-icons/ai";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Components/Footer/Footer";
import calibration1 from "../assets/homepage/calibration-services/calibration-1.jpg";
import calibration2 from "../assets/homepage/calibration-services/calibration-2.jpg";
import calibration3 from "../assets/homepage/calibration-services/calibration-3.jpg";
import calibration4 from "../assets/homepage/calibration-services/calibration-4.jpg";
import calibration5 from "../assets/homepage/calibration-services/calibration-5.jpg";
import calibration6 from "../assets/homepage/calibration-services/calibration-6.jpg";
import { Compass, Graph, Technician } from "../Components/SvgComponent";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../Utils/GlobalVariables";
import { ToastSuccess } from "../Components/ToastAlert";
import { useState } from "react";

const Calibration = () => {
  document.title = "Best Calibration Lab in Bangladesh - IISPL Calibration Lab";
  const [name, type, message] = [useRef(), useRef(), useRef()];
  const [errors, setError] = useState([]);

  // form submit to backend
  const submitContactForm = (e) => {
    const formdata = new FormData();
    formdata.append("name", name.current.value);
    formdata.append("calibration_type", type.current.value);
    formdata.append("message", message.current.value);

    axios
      .post(`${BACKEND_BASE_URL}frontend/calibration-message`, formdata)
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
    <div className="calibration">
      <Header />
      <section className="bg-dark-blue-text text-white-#fff h-[250px] xl:-top-7 relative ">
        <div className="xl:container flex flex-col  lg:flex-row xl:flex-row justify-center  lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
          <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold text-center">
            CALIBRATION SERVICES
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
              Calibration Services
            </span>
          </p>
        </div>
      </section>
      <section className="xl:container calibration_service pt-14 xl:pt-16 xl:pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-[15px] xl:px-0 sm:mb-5 md:mb-14 lg:mb-14 xl:mb-14">
          <div className="xl:h-100 bg-light-blue-300 sm:mb-8">
            <img
              src={calibration3}
              alt="calibration-3"
              className="w-full h-52 object-cover"
            />
            <div className="py-8 px-[30px]">
              <small className="text-blue-400 text-f12 font-work-sans uppercase">
                CALIBRATION SERVICES
              </small>
              <Link to={"/services/chemical-calibration"}>
                <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                  CHEMICAL CALIBRATION
                </h5>
              </Link>
              <p className="text-f15 font-work-sans text-black">
                Our chemical calibration services assure that your chemical
                equipment produces precise, accurate, and repeatable results.
              </p>
            </div>
          </div>

          <div className="xl:h-100 bg-light-blue-300 sm:mb-8">
            <img
              src={calibration2}
              alt="calibration-2"
              className="w-full h-52 object-cover"
            />
            <div className="py-8 px-[30px]">
              <small className="text-blue-400 text-f12 font-work-sans uppercase">
                calibration services
              </small>
              <Link to={"/services/dimensional-calibration"}>
                <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                  DIMENSIONAL CALIBRATION
                </h5>
              </Link>
              <p className="text-f15 font-work-sans text-black">
                Our dimensional calibration services assure that your
                dimensional equipment produces precise, accurate, and repeatable
                results.
              </p>
            </div>
          </div>

          <div className="xl:h-100 bg-light-blue-300 sm:mb-8">
            <img
              src={calibration1}
              alt="calibration-1"
              className="w-full h-52 object-cover"
            />
            <div className="py-8 px-[30px]">
              <small className="text-blue-400 text-f12 font-work-sans uppercase">
                calibration services
              </small>
              <Link to={"/services/electrical-calibration"}>
                <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                  ELECTRICAL CALIBRATION
                </h5>
              </Link>
              <p className="text-f15 font-work-sans text-black">
                Our electronic calibration services assure that your electronic
                equipment produces precise, accurate, and repeatable results.
              </p>
            </div>
          </div>

          <div className="xl:h-100 bg-light-blue-300 sm:mb-8">
            <img
              src={calibration6}
              alt="calibration-6"
              className="w-full h-52 object-cover"
            />
            <div className="py-8 px-[30px]">
              <small className="text-blue-400 text-f12 font-work-sans uppercase">
                calibration services
              </small>
              <Link to={"/services/mass-volume-calibration"}>
                <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                  MASS & VOLUME CALIBRATION
                </h5>
              </Link>
              <p className="text-f15 font-work-sans text-black">
                The Mass & Volumetric Laboratory maintains reference weights and
                precision balances to provide calibration services for a variety
              </p>
            </div>
          </div>
          <div className="xl:h-100 bg-light-blue-300 sm:mb-8">
            <img
              src={calibration5}
              alt="calibration-5"
              className="w-full h-52 object-cover"
            />
            <div className="py-8 px-[30px]">
              <small className="text-blue-400 text-f12 font-work-sans uppercase">
                calibration services
              </small>
              <Link to={"/services/mechanical-calibration"}>
                <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                  MECHANICAL CALIBRATION
                </h5>
              </Link>
              <p className="text-f15 font-work-sans text-black">
                Our mechanical calibration services assure that your mechanical
                equipment produces precise, accurate, and repeatable results.
              </p>
            </div>
          </div>
          <div className="xl:h-100 bg-light-blue-300 sm:mb-8">
            <img
              src={calibration4}
              alt="calibration-4"
              className="w-full h-52 object-cover"
            />
            <div className="py-8 px-[30px]">
              <small className="text-blue-400 text-f12 font-work-sans uppercase">
                calibration services
              </small>
              <Link to={"/services/thermodynamic-calibration"}>
                <h5 className="text-dark-blue-text text-f20 font-roboto font-medium uppercase mb-3">
                  THERMODYNAMIC CALIBRATION
                </h5>
              </Link>
              <p className="text-f15 font-work-sans text-black">
                Our thermodynamic calibration services assure that your
                thermodynamic equipment produces precise, accurate, and
                repeatable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center xl:mb-10">
        <Link to={"/services"}>
          <button
            title="More Services"
            className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff"
          >
            More Services
          </button>
          {/* <button className="uppercase font-work-sans text-grey-#666666 rounded px-[20px] py-[14px] bg-grey-#ebebeb text-f14 leading-tight hover:bg-[#dcdcdc] hover:text-[#5e5e5e] transition-all duration-300 ease-in-out">
            More Services
          </button> */}
        </Link>
      </div>
      <section className="conatct_form py-12">
        <h2 className="xl:container text_light_roboto text-f40 mb-10 px-[15px] md:max-w-[545px] lg:max-w-[545px]">
          NEED A CALIBRATION SERVICE? <br />
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
                <Graph fill={"#031b4e"} height={45} />
              </div>
              <Link to={"/services/testing"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  TESTING SERVICES
                </h4>
              </Link>
            </div>
            <div className="flex items-center mb-8 md:mb-10 lg:mb-10 xl:mb-10flex">
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

export default Calibration;
