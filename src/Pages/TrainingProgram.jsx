import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";

import pdf_file from "../assets/training_program/List-of-Trainings-offered-by-IISPL.pdf";
import { Globe, Graph, HandSvg } from "../Components/SvgComponent";
import { Link } from "react-router-dom";

const TrainingProgram = () => {
  document.title = "Training Program - IISPL Bangladesh";
  return (
    <div className="training_program">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="bg_banner h-[250px] relative">
          <div className="absolute inset-0 opacity-75 bg-dark-blue-text"></div>
          <div className="xl:container flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold sm:text-center">
              TRAINING PROGRAM
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
                Training Program
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container text-white-#fff py-16 flex flex-col lg:flex-row xl:flex-row">
        <div className="lg:w-[60%] xl:w-[60%] sm:order-2 md:order-2 lg:order-1 xl:order-1 sm:px-[15px] md:px-[15px] lg:px-[15px]">
          <h2 className="text_light_roboto_normal text-f40 mb-6">
            <strong className="text_bold_roboto text-f40">IISPL </strong>
            Training Program
          </h2>
          <p className="text-f18 text-[#031b4e] font-work-sans font_work_sans_bold mb-6 leading-[24px]">
            IISPL Bangladesh helps companies to equip their key personnel with
            the knowledge and confidence they need to elevate safety,
            productivity, culture, compliance to achieve total quality
            assurance. We aid/ support our clients to evaluate, monitor, and
            improve your employees’ skills and performance through our
            professional training services to improve business processes and
            products to fulfilling organizational goal. Our qualified mentors
            have local and international regulatory knowledge & certificates,
            customers & legal compliance requirements who can deliver essential
            knowledge through the beneficial training session’s on-site,
            convenient IISPL locations and even through the online all around
            the country.
          </p>
          <p className="text-f18 text-[#031b4e] font-work-sans mb-16 font_work_sans_bold leading-[24px]">
            We are going to offer broad spectrum learning and training programs
            on compliance validation platform are used by leading manufacturing
            companies, power sectors, oil & gas sectors and construction
            projects.
          </p>

          <div className="xl:grid xl:grid-cols-2 xl:px-6">
            <div className="xl:pe-5">
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Welding & Materials Training
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Lifting/Heavy Equipment Operator training
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                HSE Training Program
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                First Aid
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Confined Space Entry
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Risk & Risk Assessment
              </p>
            </div>
            <div>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Working at Heights
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Lockout / Tag-out Standard & Procedure
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                General Safety Training on Cutting Process
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Safety Audit (SUSA Audit)
              </p>
              <p className="text-dark xl:mb-3 font-work-sans text-f14">
                Control of Substance Hazardous to Health
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] xl:w-[40%] sm:order-1 md:order-1 lg:order-2 xl:order-2 w-[250px] h-full mx-auto sm:mb-8 md:mb-8">
          <img
            src={require("../assets/training_program/img-03.png")}
            alt=""
            className="w-full"
          />
        </div>
      </section>

      <div className="text-center sm:mb-12 md:mb-12 xl:my-24 lg:mb-16">
        <Link to={"/services"}>
          <button
            title=" More Services"
            className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff"
          >
            More Services
          </button>
        </Link>
      </div>

      <section className="bg-blue-400 text-white-#fff sm:py-[40px] md:py-[42px] lg:py-[45px] xl:py-[62px]">
        <div className="xl:container flex flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between sm:items-start md:items-start lg:items-center xl:items-center sm:px-[15px] md:px-[15px] lg:px-[15px]">
          <div className="xl:w-9/12 xl:pe-6">
            <h2 className="uppercase text-white-#fff font-roboto text-f26 font-bold mb-2">
              CHECK ALL TRAINNING PROGRAM
            </h2>
            <h2 className="uppercase text-white-#fff font-roboto text-f18 mb-2">
              IIS TESTING BD PVT. LTD
            </h2>
            <p className="font-work-sans text-f15 sm:mb-8 md:mb-8">
              From accident investigation to behavior base safety, permit to
              work system to workplace violence, IISPL provide all sorts of
              training program related to its field. You can download the list
              of training offered by IISPL.
            </p>
          </div>
          <div className="xl:w-2/12">
            <a href={pdf_file} download>
              <button className="px-[40px] py-[12px] text-f15 font-roboto font-bold text-[#0000009f] bg-[#ffffff] transition-all duration-300 ease-in-out hover:bg-light-blue-400 hover:text-white-#fff w-[100%]">
                Download PDF
              </button>
            </a>
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
                <Globe fill={"#031b4e"} height={45} />
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
              <Link to={"/services/calibration"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  CALIBRATION SERVICES
                </h4>
              </Link>
            </div>
            <div className="flex items-center mb-8 md:mb-10 lg:mb-10 xl:mb-10">
              <div className="mr-6">
                <HandSvg fill={"#031b4e"} height={45} />
              </div>
              <Link to={"/services/testing"}>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold hover:text-[#000000]">
                  TESTING SERVICES
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

export default TrainingProgram;
