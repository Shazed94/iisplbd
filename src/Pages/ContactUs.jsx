import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import google_map_img from "../assets/contact-us/g_map.jpg";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { FiHeadphones, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../Utils/GlobalVariables";
import { ToastSuccess } from "../Components/ToastAlert";
import { AiFillHome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const ContactUs = () => {
  document.title = "Contacts - IISPL Bangladesh";
  const [name, email, phone, subject, message] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  // form submit to backend
  const submitContactForm = (e) => {
    const formdata = new FormData();

    formdata.append("name", name.current.value);
    formdata.append("email", email.current.value);
    formdata.append("phone", phone.current.value);
    formdata.append("subject", subject.current.value);
    formdata.append("message", message.current.value);

    axios
      .post(`${BACKEND_BASE_URL}frontend/contact-message`, formdata)
      .then((response) => {
        if (response.data?.status == 200) {
          ToastSuccess.fire({
            icon: "success",
            title: "Your message has been sent!",
          });
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className="about_us">
      <Header />
      <section className="bg-dark-blue-text text-white-#fff  xl:-top-7 relative mt-8 xl:mt-0">
        <div className="xl:container h-[250px] flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between items-center px-12 xl:px-0">
          <h2 className="uppercase text-white-#fff font-roboto text-f48 font-bold mb-4 md:mb-0">
            Contact Us
          </h2>
          <p className="flex items-center">
            <Link to={"/"}>
              <AiFillHome className="me-2 text-white-#ffffffb8 hover:text-[#ffffff]" />
            </Link>{" "}
            <BsArrowRight className="me-2" /> Contact Us
          </p>
        </div>
      </section>

      <section className="xl:container text-white-#fff py-14 xl:grid xl:grid-cols-2 px-[15px] md:[15px] lg:[15px] xl:px-0 ">
        <div className="xl:pe-16 ">
          <h2 className="text_light_roboto text-f40 mb-8">
            <strong className="text_bold_roboto text-f22">GET IN TOUCH </strong>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="flex">
              <div className="mr-6">
                <TfiLocationPin size="44" color="#000066" />
              </div>

              <div>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold">
                  OUR ADDRESS
                </h4>
                <p className="text-black font-work-sans text-f15">
                  House: 169 (3rd Floor), <br className="hidden lg:block" />{" "}
                  Road: 03, Mohakhali <br className="hidden lg:block" /> DOHS,
                  Dhaka-1206
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-6">
                <FiHeadphones size={44} color="#000066" />
              </div>
              <div>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold">
                  PHONE NUMBER
                </h4>
                <p className="text-black font-work-sans text-f15">
                  +880 1787659307 <br /> +880 1810145903
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-6">
                <TfiEmail size="44" color="#000066" />
              </div>
              <div>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold">
                  EMAIL ADDRESS
                </h4>
                <p className="text-black font-work-sans text-f15">
                  iispl.dhaka@iispl.net
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="mr-6">
                <FiSettings size="44" color="#000066" />
              </div>
              <div>
                <h4 className="text-blue-400 font-roboto text-f18 font-bold">
                  WORKING HOURS
                </h4>
                <p className="text-black font-work-sans text-f15">
                  Sun to Thu: 9am to 5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text_light_roboto text-f40 mb-8">
            <strong className="text_bold_roboto text-f22">
              DROP US A LINE{" "}
            </strong>
          </h2>
          <form onSubmit={submitContactForm}>
            <div className="xl:grid xl:grid-cols-2 gap-4 ">
              <input
                ref={name}
                type="text"
                placeholder="Your name"
                className="placeholder:text-[#9999C2] border-[#e1eeff] border-[1px] focus:outline-[#000066] w-full p-2 mb-7 text-grey-999"
              />

              <input
                ref={email}
                type="email"
                placeholder="Your email"
                className="placeholder:text-[#9999C2] border-[#e1eeff] border-[1px] focus:outline-[#000066] w-full p-2 mb-7 text-grey-999"
              />
            </div>
            <div className="xl:grid xl:grid-cols-2 gap-4 ">
              <input
                ref={phone}
                type="number"
                min="0"
                placeholder="Your phone"
                className="placeholder:text-[#9999C2] border-[#e1eeff] border-[1px] focus:outline-[#000066] w-full p-2 mb-7 text-grey-999"
              />
              <input
                ref={subject}
                type="text"
                placeholder="Subject"
                className="placeholder:text-[#9999C2] border-[#e1eeff] border-[1px] focus:outline-[#000066] w-full p-2 mb-7 text-grey-999"
              />
            </div>
            <div className="xl:grid xl:grid-cols-1 ">
              <textarea
                ref={message}
                placeholder="Message"
                rows={4}
                className="placeholder:text-[#9999C2] border-[#e1eeff] border-[1px] focus:outline-[#000066] w-full p-2 mb-7 text-grey-999"
              ></textarea>
            </div>
            <div className="xl:grid xl:grid-cols-3 ">
              <button className="px-[40px] py-[12px] text-f15 font-roboto font-bold text-white bg-[#000066] transition-all duration-300 ease-in-out hover:bg-dark-blue hover:text-white-#fff">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="xl:py-6">
        <div className="xl:container px-[15px] md:[15px] lg:[15px] xl:px-0">
          <h2 className="font-roboto text-f40 text-center  text-[#031b4e] font-light">
            Overseas Branches in IISPL
          </h2>
        </div>

        <div className="xl:container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-12 md:gap-20 lg:gap-20 xl:gap-20 pt-9 px-[15px] md:[15px] lg:[15px] xl:px-0">
          <div>
            <p className="text-black font-work-sans text-f15">Singapore</p>
            <p className="text-black font-work-sans text-f15">
              RAJASEKHARA REDDY
            </p>
            <p className="text-black font-work-sans text-f15">
              General Manager
            </p>
            <p className="text-black font-work-sans text-f15">
              South East Asia Operations,
            </p>
            <p className="text-black font-work-sans text-f15">
              Singapore Branch Office,
            </p>
            <p className="text-black font-work-sans text-f15">
              BLK 473, CHOA Chukang,
            </p>
            <p className="text-black font-work-sans text-f15">
              Singapore – 680473
            </p>
            <p className="text-black font-work-sans text-f15">
              Email : reddy_gr@iispl.net
            </p>
            <p className="text-black font-work-sans text-f15">
              Mobile : +65 91723378
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">United Kingdom</p>
            <p className="text-black font-work-sans text-f15">
              IISPL (UK) PRIVATE LIMITED
            </p>
            <p className="text-black font-work-sans text-f15">SUBBA REDDY</p>
            <p className="text-black font-work-sans text-f15">
              General Manager
            </p>
            <p className="text-black font-work-sans text-f15">
              Address: 65 London wall ,
            </p>
            <p className="text-black font-work-sans text-f15">
              London United Kingdom (UK)
            </p>
            <p className="text-black font-work-sans text-f15">
              Email : subba.reddy@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Saudi Arabia</p>
            <p className="text-black font-work-sans text-f15">
              ORWAH AI SAKTAWI
            </p>
            <p className="text-black font-work-sans text-f15">
              General Manager
            </p>
            <p className="text-black font-work-sans text-f15">
              Address : Industrial Area, Jeddah 21433,
            </p>
            <p className="text-black font-work-sans text-f15">Saudi Arabia</p>
            <p className="text-black font-work-sans text-f15">
              Email : orwah@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Oman</p>
            <p className="text-black font-work-sans text-f15">
              ABDULBAQI AHMED AL KINDI
            </p>
            <p className="text-black font-work-sans text-f15">
              General Manager
            </p>
            <p className="text-black font-work-sans text-f15">
              Address: 3PO Box 619,
            </p>
            <p className="text-black font-work-sans text-f15">
              PC 113 / Al Nadha Tower II,
            </p>
            <p className="text-black font-work-sans text-f15">
              3rd Floor, Office No.2 / Ghala, Muscat,
            </p>
            <p className="text-black font-work-sans text-f15">
              Sultanate of Oman
            </p>
            <p className="text-black font-work-sans text-f15">
              Email : abdulbaqi.alkindi@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">
              India Head Office
            </p>
            <p className="text-black font-work-sans text-f15">
              INTERNATIONAL INSPECTION SERVICES PVT.LTD.
            </p>
            <p className="text-black font-work-sans text-f15">
              # 29, Sri Sai Nagar,
            </p>
            <p className="text-black font-work-sans text-f15">
              Hyderabad, India.
            </p>
            <p className="text-black font-work-sans text-f15">
              +91 040 23073403
            </p>
            <p className="text-black font-work-sans text-f15">+91 9866000019</p>
            <p className="text-black font-work-sans text-f15">
              iispl@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">
              IISPL Branches in India
            </p>
            <p className="text-black font-work-sans text-f15">Ahmedabad</p>
            <p className="text-black font-work-sans text-f15">KUNAL RAJ</p>
            <p className="text-black font-work-sans text-f15">
              H404 Aaradhya Homes, Opp to Earth School,
            </p>
            <p className="text-black font-work-sans text-f15">
              Bh Gathiya Rath, New Chandkheda
            </p>
            <p className="text-black font-work-sans text-f15">
              Ahmedabad – 382424, Gujarat
            </p>
            <p className="text-black font-work-sans text-f15">
              Contact: +91-8780615154
            </p>
            <p className="text-black font-work-sans text-f15">
              email:kunalraj@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Bangalore</p>
            <p className="text-black font-work-sans text-f15">TANVEER</p>
            <p className="text-black font-work-sans text-f15">
              Kalahasti Nagar, Prashanth Nagar,
            </p>
            <p className="text-black font-work-sans text-f15">
              Bengaluru, Karnataka – 560057
            </p>
            <p className="text-black font-work-sans text-f15">
              Contact : +91-8792076507
            </p>
            <p className="text-black font-work-sans text-f15">
              email: sayed.tanveer@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Bhilai</p>
            <p className="text-black font-work-sans text-f15">SANJAY SINGH</p>
            <p className="text-black font-work-sans text-f15">
              House No.- 47, Block No.-03,
            </p>
            <p className="text-black font-work-sans text-f15">
              DalipParisar Kailash Nagar,
            </p>
            <p className="text-black font-work-sans text-f15">
              Bhilai – 490 026. District – Durg, Chhattisgarh.
            </p>
            <p className="text-black font-work-sans text-f15">
              Mobile: +91 98263 23964
            </p>
            <p className="text-black font-work-sans text-f15">
              email: sanjaysingh@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Chennai</p>
            <p className="text-black font-work-sans text-f15">R.JAYA PRAKASH</p>
            <p className="text-black font-work-sans text-f15">
              58 Park Road, 1/B Park Royale,
            </p>
            <p className="text-black font-work-sans text-f15">
              Anna Nagar West Ext,
            </p>
            <p className="text-black font-work-sans text-f15">
              Chennai – 600101. Tamilnadu.
            </p>
            <p className="text-black font-work-sans text-f15">
              Contact : +91-9840042299
            </p>
            <p className="text-black font-work-sans text-f15">
              email: jayaprakesh@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Delhi</p>
            <p className="text-black font-work-sans text-f15">
              SANJIV KUMAR UPADYAY
            </p>
            <p className="text-black font-work-sans text-f15">
              159C Poket A Mayur Vihar Phase II,
            </p>
            <p className="text-black font-work-sans text-f15">
              New Delhi -110091,
            </p>
            <p className="text-black font-work-sans text-f15">
              Mobile: +91 9911627819,
            </p>
            <p className="text-black font-work-sans text-f15">
              email: sk.upadhyay@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Kolkata</p>
            <p className="text-black font-work-sans text-f15">
              SOUBIR KUMAR BANERJEE
            </p>
            <p className="text-black font-work-sans text-f15">
              Chief Inspection Officer
            </p>
            <p className="text-black font-work-sans text-f15">
              Tulip Apartment, Road No. 175,
            </p>
            <p className="text-black font-work-sans text-f15">
              Plot No. CE/131, CE Block,
            </p>
            <p className="text-black font-work-sans text-f15">
              Action Area 1, New Town,
            </p>
            <p className="text-black font-work-sans text-f15">
              Kolkata- 700 156,
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">West Bengal.</p>
            <p className="text-black font-work-sans text-f15">
              Contact : 09804176644/ 09835710884
            </p>
            <p className="text-black font-work-sans text-f15">
              email: soubir.banerjee@iispl.net
            </p>
            <p className="text-black font-work-sans text-f15">Mumbai-Nashik</p>
            <p className="text-black font-work-sans text-f15">
              NAYANKUMAR S NAWANDAR
            </p>
            <p className="text-black font-work-sans text-f15">
              Radhadwar, Godawari Hos. Soc. No-02,
            </p>
            <p className="text-black font-work-sans text-f15">
              Jail Road, Nasik Road,
            </p>
            <p className="text-black font-work-sans text-f15">
              Nasik – 422101, Maharashtra.
            </p>
            <p className="text-black font-work-sans text-f15">
              Contact: +91-9422283991, 7741020767
            </p>
            <p className="text-black font-work-sans text-f15">
              email: nayankumar.nawandar@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Patna</p>
            <p className="text-black font-work-sans text-f15">
              SOUBIR KUMAR BANERJEE
            </p>
            <p className="text-black font-work-sans text-f15">
              Chief Inspection Officer
            </p>
            <p className="text-black font-work-sans text-f15">
              Flat no.504, 5th floor,
            </p>
            <p className="text-black font-work-sans text-f15">
              Bhawani Shanthi homes,
            </p>
            <p className="text-black font-work-sans text-f15">
              RPS more, Kaliket Nagar,
            </p>
            <p className="text-black font-work-sans text-f15">
              Mainpura, Patna- 801503
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Bihar</p>
            <p className="text-black font-work-sans text-f15">
              Contact : 09804176644/ 09835710884
            </p>
            <p className="text-black font-work-sans text-f15">
              email: soubir.banerjee@iispl.net
            </p>
          </div>

          <div>
            <p className="text-black font-work-sans text-f15">Pune</p>
            <p className="text-black font-work-sans text-f15">DEVENDRA SURJE</p>
            <p className="text-black font-work-sans text-f15">
              1104 / D – Wing, Nakshatra Phase – 2,
            </p>
            <p className="text-black font-work-sans text-f15">
              Purna Nagar, CDC, PCNTDA,
            </p>
            <p className="text-black font-work-sans text-f15">
              Chinchwad, Pune – 411 019. Maharashtra.
            </p>
            <p className="text-black font-work-sans text-f15">
              Mobile: +91 91686 07644
            </p>
            <p className="text-black font-work-sans text-f15">
              email: devendra.surje@iispl.net
            </p>
          </div>
        </div>

        <div className="xl:container grid xl:grid-cols-1 sm:py-14 py-28 justify-items-center px-[15px]">
          <a
            href="https://www.iispl.net/international.html"
            target="_blank"
            rel="noreferrer"
          >
            <button
              title="Learn More About Global Coverage"
              className="border-solid border-2 border-blue-400 uppercase py-[11px] px-10 text-f14 tracking-[2px] text-blue-400 font-extrabold font-roboto transition hover:bg-blue-400 hover:text-white-#fff"
            >
              Learn More About Global Coverage
            </button>
            {/* <button className="px-[40px] py-[12px] text-f15 font-work-sans  bg-[#ebebeb] transition-all duration-300 ease-in-out hover:bg-[#dcdcdc] hover:text-[#5e5e5e] w-4/2 text-[#666] rounded">
              Learn More About Global Coverage
            </button> */}
          </a>
        </div>

        <div className="xl:container grid xl:grid-cols-1 sm:pb-14 pb-28 justify-items-center px-[15px]">
          <Link
            to={
              "https://www.google.com.bd/maps/place/IISPL+BD/@23.7840984,90.3978906,21z/data=!4m6!3m5!1s0x3755c7413aec3c63:0x85ac674fd4996761!8m2!3d23.7840475!4d90.397972!16s%2Fg%2F11n88njml8?entry=ttu"
            }
            target="_blank"
          >
            <img
              src={google_map_img}
              alt=""
              className="w-full h-auto order-3 grid shadow-md"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
