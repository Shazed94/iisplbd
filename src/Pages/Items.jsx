import { AiFillHome } from "react-icons/ai";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import crane from "../assets/Services/cranes.jpg";
import accessories from "../assets/Services/lifting-accessories.jpg";
import shackle from "../assets/Services/shackles-1.jpg";

const Items = () => {
  document.title = "Items - IISPL Bangladesh";
  return (
    <div className="inspection">
      <Header />
      <section className="hero xl:-top-7 relative">
        <div className="common_bg_banner h-[250px] relative">
          <div className="xl:container flex flex-col  xl:flex-row justify-center xl:justify-between items-center z-10 relative h-full mt-8 md:mt-0 lg:mt-0 xl:mt-0 px-[15px] md:px-0 xl:px-0">
            <h2 className="uppercase text-white-#fff font-roboto sm:text-center text-f48 font-bold">
              Items
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
                Items
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="xl:container py-14 flex sm:px-[15px] md:px-[15px] lg:px-[15px] ">
        <div className=" ">
          <h2 className="text_light_roboto_lowercase text-f40  xl:mx-auto mb-7">
            Items:
          </h2>

          <div className="grid grid-cols-2 md:gap-x-48 lg:gap-96 xl:gap-96 mb-10">
            <div>
              <p className="font-work-sans mb-2 text-[#2A2A2A] text-f14 ">
                Lifting Equipment_
              </p>
              <ul className="ps-8 text-[#2A2A2A] font-work-sans text-f14 list-disc">
                <li className="mb-2">Overhead crane</li>
                <li className="mb-2">Mobile Crane</li>
                <li className="mb-2">Crawler Crane</li>
                <li className="mb-2">Jib crane</li>
                <li className="mb-2">Gantry crane</li>
                <li className="mb-2">Forklift</li>
                <li className="mb-2">Scissor Lift</li>
                <li className="mb-2">Passenger Lift</li>
                <li className="mb-2">Cargo lift</li>
                <li className="mb-2">Escalator</li>
                <li className="mb-2">Electrical Hoist etc.</li>
                <li className="mb-2">Pay loader</li>
              </ul>
            </div>

            <div>
              <p className="font-work-sans mb-2 text-[#2A2A2A] text-f14 ">
                Lifting Accessories_
              </p>
              <ul className="ps-8 text-[#2A2A2A] font-work-sans text-f14 list-disc">
                <li className="mb-2">Chain hoists</li>
                <li className="mb-2">Lever hoists</li>
                <li className="mb-2">Plate Clamps</li>
                <li className="mb-2">Electric and manual winches</li>
                <li className="mb-2">Chain slings</li>
                <li className="mb-2">Wire rope pullers</li>
                <li className="mb-2">Electric and pneumatic hoists</li>
                <li className="mb-2">Wire rope slings</li>
                <li className="mb-2">Chain and lever hoists</li>
                <li className="mb-2">Winches</li>
                <li className="mb-2">Shackles</li>
                <li className="mb-2">Flat and round slings</li>
                <li className="mb-2">Lifting belts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white-#fff xl:py-[55px] sm:px-[15px] md:px-[15px]  lg:px-[15px]">
        <div className="xl:container flex justify-between items-center ">
          <div className="xl:pe-6 xl:w-[100%]">
            <div className="grid grid-cols-3 sm:grid-cols-1  gap-6">
              <div className="h-[320px] bg-[#ffffff]">
                <div className=" sm:h-[255px] md:h-[236px] lg:h-[236px] xl:h-[236px]">
                  <img
                    src={crane}
                    alt="crane"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-start items-center h-[84px]">
                  <h2 className="text_bold_roboto_lowercase text-f24   text-[#031b4e]">
                    Cranes
                  </h2>
                </div>
              </div>

              <div className="h-[320px] bg-[#ffffff]">
                <div className="h-[236px]">
                  <img
                    src={accessories}
                    alt="accessories"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-start items-center h-[84px]">
                  <h2 className="text_bold_roboto_lowercase text-f24   text-[#031b4e]">
                    Accessories
                  </h2>
                </div>
              </div>
              <div className="h-[320px] bg-[#ffffff]">
                <div className="h-[236px]">
                  <img
                    src={shackle}
                    alt="shackle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-start items-center h-[84px]">
                  <h2 className="text_bold_roboto_lowercase text-f24   text-[#031b4e]">
                    Shackles
                  </h2>
                </div>
              </div>

              {/* <div className="h-[320px] flex items-end">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Items;
