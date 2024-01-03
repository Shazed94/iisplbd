import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Scopes = () => {
  document.title = "Scopes - IISPL Bangladesh";
  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="common_bg_banner h-[250px] relative">
          <div className="xl:container flex flex-col  xl:flex-row justify-center xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] md:px-0 xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto sm:text-center text-f48 font-bold">
              SCOPES
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
                Scopes
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container py-14 flex sm:px-[15px] md:px-[15px] lg:px-[15px] ">
        <div className=" ">
          <h2 className="text_light_roboto_lowercase text-f40  xl:mx-auto mb-7">
            {/* <strong className="text_bold_roboto">IISPL &nbsp;</strong> */}
            Scopes
          </h2>

          <p className="font-work-sans mb-2 text-[#2A2A2A] text-f14 ">
            General Scopes of lifting equipment inspection are as follows_
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-1 mb-10">
            <ul className="ps-8 text-[#2A2A2A] font-work-sans text-f14 list-disc">
              <li className="mb-2">
                Inspection regarding visual apparent condition.
              </li>
              <li className="mb-2">
                Reviewing previous maintenance & previous test records
              </li>
              <li className="mb-2">
                Review of manufacturer’s document to identify the technical
                information & manufacturer’s recommendation.
              </li>
              <li className="mb-2">
                Functional & operational Test of Equipment including, carrying
                out test of brakes & other safety devices & interlocks (Safety
                Tests).
              </li>
              <li className="mb-2">
                Verification of manufacturer specified SWL Load.
              </li>
              <li className="mb-2">
                Performing of Load Test / Proof Load Test in the laboratory for
                the selective items.
              </li>
              <li className="mb-2">
                Carrying out DPT test for the selective items.
              </li>
              <li className="mb-2">
                Visual and functional test of the selective items.
              </li>
              <li className="mb-2">
                Issuing of report with findings / Inspection Report.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scopes;
