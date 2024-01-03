import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/homepage/IISPL_logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoYoutube, BiLogoLinkedin } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <Fragment>
        <footer className=" bg-light-blue-300">
          <div className="xl:container md:flex lg:flex xl:flex px-[15px] lg:px-[35px] xl:px-0 py-20 border-b border-grey-light ">
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-20 md:mr-[18px] lg:mr-24 xl:mb-0 ">
              <img
                src={logo}
                alt=""
                className="w-full h-[55px] max-w-[150px] mb-7"
              />
              <p className="font-work-sans text-f15 font-medium leading-[24px]">
                {" "}
                ISO 9001:2015
                <br />
                ISO 14001:2015
                <br /> ISO 45001:2018 <br /> ISO 17020:2012 (NABL) <br />
                ISO 17025:2017 (BAB) Certified Company <br /> Third Party
                Inspection & Expediting Services World Wide
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-20 xl:mb-0 md:mt-3  md:ms-[15px] lg:mt-3 xl:mt-3">
              <h4 className="text-dark-blue-text font-roboto text-f20 font-bold mb-5">
                IISPL BANGLADESH
              </h4>
              <Link
                to="/blog"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                Blog
              </Link>
              <Link
                to="/about-us"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                About Us
              </Link>
              <Link
                to="/contacts"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                Contacts
              </Link>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 md:mt-3 lg:mt-3 xl:mt-3">
              <h4 className="text-dark-blue-text font-roboto text-f20 font-bold mb-5">
                OUR SERVICES
              </h4>
              <Link
                to="/services/inspection"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                Inspection Services
              </Link>
              <Link
                to="/services/calibration"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                Calibration Services
              </Link>
              <Link
                to="/services/testing"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                Testing Services
              </Link>
              <Link
                to="/services/training-program"
                className="sm:mb-4 block text-f15 font-work-sans"
              >
                Training Program
              </Link>
            </div>
          </div>
          <div className="xl:container text-center md:flex lg:flex xl:flex justify-between items-center px-[15px] lg:px-[35px] xl:px-0 py-[50px]">
            <p className="text-grey-text sm:mb-5 lg:mb-0 xl:mb-0 ">
              Copyright © 2023 IISPL. All rights reserved.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/IISPLBD.Com1"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoFacebook color="blue-400" size="18" className="mr-9" />
              </a>
              <a
                href="https://twitter.com/InspectionPvt"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter color="blue-400" size="18" className="mr-9" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCnjoEsynx05Z-GlGn-wSj2Q"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoYoutube color="blue-400" size="18" className="mr-9" />
              </a>
              <a
                href="https://bd.linkedin.com/company/iisplbd-com"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin color="blue-400" size="18" className="" />
              </a>
            </div>
          </div>
        </footer>
      </Fragment>
    </div>
  );
};

export default Footer;
