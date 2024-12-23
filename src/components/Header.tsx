import { Button } from "@nextui-org/react";
import Code from "../assets/icons/Code_DarkBlue.svg";
import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/icons/LikedIn_Light_Icon.svg";
import Instagram from "../assets/icons/Instagram_Light_Icon.svg";
import Github from "../assets/icons/Github_Light_Icon.svg";
import Mail from "../assets/icons/Mail_Light_Icon.svg";
import Facebook from "../assets/icons/facebook.svg";
// import Youtube from "../assets/icons/Youtube.svg";

const Header = () => {
  return (
    <>
      <div
        id="main-about"
        className="relative h-[1020px] bg-red sm:h-[860px] lg:h-[1150px] overflow-hidden text-center pt-32 lg:pt-44"
      >
        {/* Bg Gradient */}
        <div className="Responsive-Navbar z-20 gradient-background blur-[100px] opacity-40 mt-[-200px] absolute mx-[16%] w-[68%] flex justify-center px-auto">
          <div className="Blue-Gradient animate-spin-clockwise"></div>
          <div className="Red-Gradient animate-spin-counterclockwise"></div>
          <div className="Yellow-Gradient animate-spin-clockwise"></div>
        </div>

        {/* BG Image */}
        <div className="absolute w-full h-[300px] z-10 bg-opacity-15 top-0 bg-gradient-to-b from-white to-transparent">
          <div className="background-image-container">
            <img
              src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66436f06a1016be8fae136f3_Hero-Module.svg"
              loading="eager"
              alt=""
              className="mx-auto opacity-40"
            />
          </div>
        </div>

        {/* Dot Grid Background */}
        <div className="absolute hidden w-full h-[1120px] lg:h-[1300px] inset-0 z-10 bg-dots"></div>

        {/* Foreground Content */}
        <div className="relative z-50">
          <p className="bg-slate-50 shadow-[0_3px_10px_-12px_rgba(0,0,0,0.3)] Geist-bold text-[8px] sm:text-[9px] lg:text-[13px] w-[160px] sm:w-[180px] lg:w-[260px] uppercase text-blue-950 mx-auto p-1 pb-0.5 sm:pb-1 lg:pb-1 lg:p-1.5 rounded-full">
            Tune Up Yourself with TuneUp
          </p>
          <h1 className="poppins-bold text-[#021734] text-[22px] sm:text-[30px] lg:text-[60px] mx-auto w-[320px] sm:w-[400px] lg:w-[850px] lg:leading-[83px] mt-2.5 sm:mt-3 lg:mt-5">
            We make{" "}
            <span className="bg-[#021734] px-4 lg:px-6 py-[1.5px] lg:py-0 text-blue-50 rounded-full">
              Impossible
            </span>
            <br />
            <span className="ml-5 py-[1.5px] lg:py-0 bg-[#021734] text-white px-4 lg:px-6 rounded-full">
              to I'm Possible.
            </span>
          </h1>
          <p className="nunito-medium mt-5 w-[90vw] sm:w-[80vw] lg:w-[680px] mx-auto text-[#021734] text-[12px] lg:text-[16px] lg:leading-[26px]">
            TuneUp Technologies is a dynamic SaaS product development company
            providing innovative digital solutions designed to empower startups
            and enterprises.
          </p>
          {/* Updated button with anchor link for smooth scroll */}
          <a href="#about" className="block lg:hidden">
            <Button
              color="primary"
              className="rounded-full w-[150px] lg:w-[210px] h-[40px] lg:h-[56px] mt-10 text-blue-950 text-[14px] lg:text-[20px] bg-blue-50 bg-opacity-10 border-[1.5px] border-blue-500 border-opacity-20 backdrop-blur-[10px] nunito-medium cursor-pointer"
            >
              Let's Tune
              <img
                className="w-5 lg:w-9 -ml-2.5 lg:-ml-3 animate-left-right"
                src={Code}
                alt=""
              />
            </Button>
          </a>

          {/* <div className="rounded-full w-[150px] lg:w-[68vw] mx-auto h-[40px] lg:h-[48px] mt-16 text-blue-950 text-[14px] lg:text-[20px] bg-blue-50 bg-opacity-10 border-[1.5px] border-blue-500 border-opacity-20 backdrop-blur-[10px] nunito-medium cursor-pointer"></div> */}
        </div>
      </div>

      {/* Second Container */}
      <div
        id="about"
        className="absolute z-40 w-full h-auto lg:h-[750px] bg-gradient-to-t from-[#021734] via-[#294770] to-transparent -mt-[670px] sm:-mt-[528px] lg:-mt-[750px] pt-28 pb-5 lg:pb-0 lg:pt-12 flex justify-center items-end"
      >
        <div className="w-[90vw] lg:w-[94vw] xl:w-[86vw] shadow-lg shadow-[#294770] text-white flex lg:flex-row flex-col justify-start items-center lg:justify-between lg:items-start h-auto lg:h-[600px] bg-[#021734] bg-opacity-40 rounded-3xl pt-2 pb-8 lg:pb-10 px-5 lg:px-9 gap-x-5">
          <div className="w-full lg:min-w-[700px] h-auto lg:min-h-full flex flex-col justify-start items-center lg:justify-between lg:items-start text-center lg:text-left gap-y-5 lg:gap-y-0">
            <h1 className="text-[43px] lg:text-[140px] poppins-medium uppercase mx-auto">
              ABOUT US
            </h1>
            <div className="flex-col justify-end hidden lg:flex items-start">
              <p className="poppins-medium">The solution we provide:</p>
              <span className="flex justify-start flex-wrap gap-x-3 gap-y-1.5 mt-2 lg:mt-4 w-[277px] lg:w-[350px] text-[11px] lg:text-[12px]">
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Web Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Mobile Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  IoT Projects
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Digital Marketing
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Content Creation
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  IT Support
                </p>
              </span>
            </div>
          </div>
          <div className="relative w-full h-full flex flex-col justify-end items-center sm:items-start lg:items-end top-5 lg:top-0">
            <p className="lg:absolute min-w-full lg:-left-[380px] xl:-left-[330px] lg:top-56 xl:top-60 Geist-normal text-slate-300 text-[12px] lg:text-[15.5px]">
              <h1 className="bg-white border-[#021734] border-opacity-60 border-[1.5px] text-[#021734] w-[216px] text-[15px] Geist-medium rounded-full mb-2 flex justify-center items-center py-1">
                Impossible to I'm Possible
              </h1>
              At TuneUp Technologies, we are a leading software development
              company dedicated to delivering innovative, scalable, and
              user-focused solutions that empower businesses to thrive in the
              digital era. Specializing in custom software development, SaaS
              products, and web and mobile applications, we blend creativity and
              technical expertise to craft software that meets the unique needs
              of startups and enterprises alike. With a commitment to quality,
              security, and continuous innovation, our team partners with
              clients to transform ideas into impactful, future-ready digital
              solutions. At TuneUp Technologies, we don’t just build software;
              we build success.
            </p>

            <div className="flex flex-col justify-end items-start lg:hidden mt-10 lg:mt-0">
              <p className="poppins-medium">The solution we provide:</p>
              <span className="flex lg:justify-center flex-wrap gap-x-3 gap-y-1.5 mt-2 lg:mt-4 w-full sm:w-[480px] lg:w-[350px] text-[11px] lg:text-[12px]">
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Web Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Mobile Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  IoT Projects
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Digital Marketing
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Content Creation
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  IT Support
                </p>
              </span>
            </div>

            <span className="sm:w-full flex justify-end items-end text-white mt-7">
              <div className="mx-auto sm:mx-0 lg:mx-0 flex space-x-4 bg-[#021734] bg-opacity-80 backdrop-blur-[5px] rounded-3xl py-2 px-3.5">
                <Link
                  to={"https://www.linkedin.com/company/tuneup-technologies"}
                  target="_blank"
                >
                  <img src={LinkedIn} alt="" className="w-5 hover:opacity-90" />
                </Link>
                <Link
                  to={"https://www.instagram.com/tuneup_technologies"}
                  target="_blank"
                >
                  <img
                    src={Instagram}
                    alt=""
                    className="w-5 hover:opacity-90"
                  />
                </Link>
                <Link
                  to={"https://www.instagram.com/tuneup_technologies"}
                  target="_blank"
                >
                  <img src={Facebook} alt="" className="w-5 hover:opacity-90" />
                </Link>
                <Link to={"https://github.com/TuneUp-Dev"} target="_blank">
                  <img src={Github} alt="" className="w-5 hover:opacity-90" />
                </Link>
                <Link to={"mailto:info@tuneuptech.in"} target="_blank">
                  <img src={Mail} alt="" className="w-5 hover:opacity-90" />
                </Link>
                {/* <Link to={"https://www.youtube.com/@TuneUpedu"} target="_blank">
                  <img src={Youtube} alt="" className="w-5 hover:opacity-90" />
                </Link> */}
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
