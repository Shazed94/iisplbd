import { AiFillHome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import leftBanner from "../assets/about-us/left-banner.jpg";
import rightBanner from "../assets/about-us/right-banner.jpg";
import CountUpComponent from "../Components/CountUp";
import { BiSolidQuoteRight } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  document.title =
    "Top Inspection, Calibration and Testing Services Provider in BD";
  return (
    <div className="about_us">
      <Header />
      <section className="bg-dark-blue-text text-white-#fff  xl:-top-7 relative mt-8 xl:mt-0">
        <div className="xl:container h-[250px] flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between items-center px-12 xl:px-0">
          <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold mb-4 md:mb-0">
            About Us
          </h2>
          <p className="flex items-center">
            <Link to={"/"}>
              <AiFillHome className="me-2 text-white-#ffffffb8 hover:text-[#ffffff]" />
            </Link>{" "}
            <BsArrowRight className="me-2" /> About Us
          </p>
        </div>
      </section>
      <section className="xl:container text-white-#fff pt-14 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="xl:pe-16 px-[15px] xl:px-0">
          <h2 className="text_light_roboto text-f40 mb-8">
            <strong className="text_bold_roboto text-f40">IISPL </strong>- IIS
            Testing BD Pvt. Ltd.
          </h2>
          <p className="text-f15 text-black font-work-sans mb-4 leading-[26px] text-justify">
            IISPL Bangladesh is globally authorized company with experienced and
            dedicated technocrats in the inspection, testing, training &
            calibration. From the beginning, our Motto is to offer trusted &
            reliable world-class Third-Party Inspection services for all
            industrial projects and manufacturing industries related to Oil &
            Gas Industries, Textile & Garments, Petrochemical plants,
            Refineries, Thermal power stations, and Renewable Energy sectors.
          </p>
          <p className="text-f15 text-black font-work-sans mb-4 leading-[26px] text-justify">
            The steady growth of our organization over the years along with our
            team of Professionals Engineers evolved us as a strong force in the
            field of Inspection, Calibration, Testing, and expediting.
          </p>
        </div>
        <div className="px-[15px] xl:px-0">
          <img
            src={rightBanner}
            alt=""
            className="w-full h-auto order-3 grid"
          />
          <div className="flex flex-col xl:flex-row xl:justify-between bg-blue-400 p-[40px]">
            <div className="">
              <h4 className="font-roboto text-f18 text-white-#fff font-bold uppercase mb-1">
                NEED A SERVICE WITH US?
              </h4>
              <p className="font-work-sans text-f15 text-white-#fff lg:mb-6 xl:mb-0 sm:mb-6 md:mb-6">
                We look forward to seeing you!
              </p>
            </div>
            <div>
              <Link to={"/contacts"}>
                <button className="px-[40px] py-[12px] text-f14 font-roboto text-black bg-white-#fff transition-all duration-300 ease-in-out hover:bg-light-blue-400 hover:text-white-#fff tracking-wider">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:pe-16 px-[15px] xl:px-0 ">
          <img
            src={leftBanner}
            alt=""
            className="mt-10 order-4 relative xl:-top-36"
          />
        </div>
        <div className="">
          <div className="px-[15px] md:px-6 xl:px-0 pt-10">
            <div className="">
              <h2 className="text_light_roboto_lowercase text-f40 sm:mb-2 xl:mb-[32px]">
                Vision and Mission of&nbsp;
                <strong className="text_bold_roboto text-f40">IISPL</strong>
              </h2>
              <p className="text-f15 text-black font-work-sans mb-4 leading-[26px] text-justify">
                Steps to Success through our trust earned globally in our
                created safe working environment with our honest teamwork. IISPL
                to be one of the preferred choices of inspection agencies
                globally for third party inspection, third party testing, third
                party training, and third party calibration services.
              </p>
              <p className="text-f15 text-black font-work-sans mb-4 leading-[26px] text-justify">
                We are the eyes of our clients to deliver the jobs in time with
                quality in a safe and secure environment for healthy ecological
                harmony.
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:justify-around lg:justify-around xl:justify-around">
              <div className="flex flex-col items-center mb-8 xl:mb-0">
                <CountUpComponent
                  start={0}
                  end={750}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={400}
                  duration={3}
                  className="text-blue-400 font-roboto font-bold text-f60"
                />
                <h3 className="text-dark-blue-text text-f18 font-roboto uppercase">
                  Clients
                </h3>
              </div>
              <div className="flex flex-col items-center mb-8 xl:mb-0">
                <CountUpComponent
                  start={0}
                  end={400}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={400}
                  duration={3}
                  className="text-blue-400 font-roboto font-bold text-f60"
                />
                <h3 className="text-dark-blue-text text-f18 font-roboto uppercase">
                  Project
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <CountUpComponent
                  start={0}
                  end={250}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={400}
                  duration={3}
                  className="text-blue-400 font-roboto font-bold text-f60"
                />
                <h3 className="text-dark-blue-text text-f18 font-roboto uppercase">
                  Site
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-light-blue-300 xl:py-24 xl:relative xl:-top-16 lg:mt-14 md:mt-12 sm:mt-10">
        <div className="xl:container grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-14">
          <div className="pt-12 xl:pt-0 px-[15px] xl:px-0">
            <h2 className="font-roboto text-f36 text-dark-blue-text font-light uppercase mb-10">
              What&nbsp;
              <strong className="font-roboto text-f36 text-dark-blue-text font-black uppercase">
                WE ACHIEVED
              </strong>
            </h2>
            <div className="mb-12">
              <div className="flex justify-between mb-1">
                <h6 className="xl:pl-1 font-roboto text-f14 text-[#0a0c0e] font-bold uppercase">
                  CALIBRATION
                </h6>
                <h6 className="font-roboto text-f14 text-[#0a0c0e] font-bold uppercase pe-1">
                  90%
                </h6>
              </div>
              <ProgressBar
                completed={90}
                bgColor="#000066"
                height="6px"
                borderRadius="0"
                isLabelVisible={false}
                baseBgColor="#E8F1FB"
                labelSize=""
                transitionDuration="2"
                animateOnRender
              />
            </div>
            <div className="mb-12">
              <div className="flex justify-between mb-1">
                <h6 className="xl:pl-1 font-roboto text-f14 text-[#0a0c0e] font-bold uppercase">
                  INSPECTION
                </h6>
                <h6 className="font-roboto text-f14 text-[#0a0c0e] font-bold uppercase pe-1">
                  80%
                </h6>
              </div>
              <ProgressBar
                completed={80}
                bgColor="#000066"
                height="6px"
                borderRadius="0"
                isLabelVisible={false}
                baseBgColor="#E8F1FB"
                labelSize=""
                transitionDuration="2"
                animateOnRender
              />
            </div>
            <div className="mb-12">
              <div className="flex justify-between mb-1">
                <h6 className="xl:pl-1 font-roboto text-f14 text-[#0a0c0e] font-bold uppercase">
                  TESTING
                </h6>
                <h6 className="font-roboto text-f14 text-[#0a0c0e] font-bold uppercase pe-1">
                  70%
                </h6>
              </div>
              <ProgressBar
                completed={70}
                bgColor="#000066"
                height="6px"
                borderRadius="0"
                isLabelVisible={false}
                baseBgColor="#E8F1FB"
                labelSize=""
                transitionDuration="2"
                animateOnRender
              />
            </div>
            <div className="xl:mb-[12px] lg:mb-12 sm:mb-12 md:mb-12">
              <div className="flex justify-between mb-1">
                <h6 className="xl:pl-1 font-roboto text-f14 text-[#0a0c0e] font-bold uppercase">
                  TRAINING
                </h6>
                <h6 className="font-roboto text-f14 text-[#0a0c0e] font-bold uppercase pe-1">
                  75%
                </h6>
              </div>
              <ProgressBar
                completed={75}
                bgColor="#000066"
                height="6px"
                borderRadius="0"
                isLabelVisible={false}
                baseBgColor="#E8F1FB"
                labelSize=""
                transitionDuration="2"
                animateOnRender
              />
            </div>
          </div>
          <div className="px-[15px] xl:px-0 mb-12 xl:mb-0">
            <h2 className="text_light_roboto text-f40 md:mt-12 lg:mt-12 xl:mt-0 mb-8 xl:mb-8">
              WHY YOU CHOOSE
              <strong className="text_bold_roboto text-f40"> Us</strong>
            </h2>
            <p className="text-f15 text-black font-work-sans xl:mb-4 leading-[26px] text-justify">
              IISPL provides services, solutions, and support that customers can
              rely on during the entire product development lifecycle. IISPL has
              committed to becoming a world leader in areas of Inspection,
              Calibration, Testing & Training services by the delivery on time
              with customer satisfaction and competitive price. IISPL further
              commit to helping the client to improve their performance by
              offering services and innovative solutions in order to ensure that
              their products, infrastructure, and process meet standard and
              regulations as per local & international business practices.
            </p>
          </div>
        </div>
      </section>
      <section className="xl:container py-10">
        <h2 className="text_light_roboto text-f40 text-center mb-10">
          WE ARE{" "}
          <strong className="text_bold_roboto">
            THE <br /> TRUSTED EXPERTS
          </strong>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-8 lg:gap-8 xl:gap-8 px-[15px] xl:px-0">
          <div className="">
            <h2 className="text_light_roboto text-f40 mb-8 sm:text-center md:text-left!important">
              MANAGEMENT COMMITMENT
            </h2>
            <p className="text-f15 text-black font-work-sans leading-[26px] text-justify mb-14 xl:mb-20">
              IISPL ensures all Inspection, Testing, Training & Calibration
              services shall be carried out impartially without any conflict and
              maintain confidentiality by our competent inspectors, Calibration
              Experts across the globe.
            </p>
            <h2 className="text_light_roboto text-f40 mb-8 sm:text-center">
              AT <strong className="text_bold_roboto">IISPL</strong>
            </h2>
            <p className="text-f15 text-black font-work-sans leading-[26px] text-justify mb-14 xl:mb-20">
              People are our prime movers; our engineers are qualified and well
              trained in all technical standards. Periodically we enrich our
              engineers with new technologies and methods by providing internal
              and external training.
            </p>
          </div>
          <div className="">
            <h2 className="text_light_roboto text-f40 mb-8">QUALITY POLICY</h2>
            <p className="text-f15 text-black font-work-sans leading-[26px] text-justify mb-4">
              IISPL is committed to providing Services for
            </p>

            <p className="relative text-f18 bg-grey-#f8f8f8 text-grey-#686868 font-work-sans italic uppercase px-12 md:px-12 lg:px-20 xl:px-20 py-8 tracking-[0.5px]	mb-10">
              <BiSolidQuoteRight className="quote_icon" />
              NSPECTION, CALIBRATION, TESTING & TRAINING SERVICES OF VARIOUS
              ENGINEERING PROJECTS, POWER SECTOR, PHARMACEUTICALS, GARMENTS &
              TEXTILE, FOOD INDUSTRY AND OTHER SECTORS…
            </p>

            <p className="text-f15 text-black font-work-sans leading-[26px] text-justify xl:mb-20">
              IN THE FIELDS OF MECHANICAL, ELECTRICAL, CIVIL & INSTRUMENTATION
              TO COMPLETE SATISFACTION OF CUSTOMERS through Identification of
              risks and opportunities for achieving continual improvement of
              process and services related to by involving of employees at all
              levels and complying with applicable statutory and regulatory
              requirements.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-400">
        <div className="xl:container grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 md:gap-7 lg:gap-7 xl:gap-7 px-[15px] xl:px-0 py-14 xl:py-24">
          <div className="">
            <h3 className="text-white text-f22 font-roboto font-bold pb-3 mb-6 border-b-[5px] border-b-white-#fff">
              Inspection Team
            </h3>
            <p className="text-f15 text-white-#ffffffcc font-work-sans text-justify mb-10 xl:mb-0">
              We offer a wide range of inspections to different stakeholders
              (e.g. suppliers, traders, manufacturers, and even government)
              materials and products in the local and overseas markets.
            </p>
          </div>
          <div className="">
            <h3 className="text-white text-f22 font-roboto font-bold pb-3 mb-6 border-b-[5px] border-b-white-#fff">
              Calibration Team
            </h3>
            <p className="text-f15 text-white-#ffffffcc font-work-sans text-justify mb-10 xl:mb-0">
              Our chemical, electrical, mechanical, dimensional, and
              thermodynamic calibration services assure that your dimensional
              equipment produces precise, accurate, and repeatable results.
            </p>
          </div>
          <div className="">
            <h3 className="text-white text-f22 font-roboto font-bold pb-3 mb-6 border-b-[5px] border-b-white-#fff">
              Testing Team
            </h3>
            <p className="text-f15 text-white-#ffffffcc font-work-sans text-justify mb-10 xl:mb-0">
              We have a highly experienced Third-party Environmental inspections
              team that is capable to perform both in CAPEX and OPEX stages, and
              that is complying with the environmental regulatory rules and
              guidelines more efficiently, hence improving the Environmental
              Health & Safety (EHS) compliance assurance for our clients.
            </p>
          </div>
          <div className="">
            <h3 className="text-white text-f22 font-roboto font-bold pb-3 mb-6 border-b-[5px] border-b-white-#fff">
              Training Team
            </h3>
            <p className="text-f15 text-white-#ffffffcc font-work-sans text-justify ">
              We help companies to equip their key personnel with the knowledge
              and confidence they need to elevate safety, productivity, culture,
              and compliance to achieve total quality assurance. We aid/ support
              our clients to evaluate, monitor, and improve their employees’
              skills and performance through our professional training services
              to improve business processes and products to fulfilling
              organizational goals.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
