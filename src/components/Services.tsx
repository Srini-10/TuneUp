import { ReactComponent as Logo } from "../assets/icons/TuneUp_Favicon.svg";
import Screenshot1 from "../assets/screenshot1.png";
import React from "react";

interface ServicesChildProps {
  pathRef: React.RefObject<SVGPathElement>;
  iconPosition: { x: number; y: number };
  tailOffset: number;
  tailLength: number;
}

const Services: React.FC<ServicesChildProps> = ({
  pathRef,
  iconPosition,
  tailOffset,
  tailLength,
}) => {
  return (
    <>
      <div className="w-full h-[320px] bg-[#021734] text-white flex flex-col justify-center items-center">
        <h1 className="inter-medium text-[48px]">OUR SERVICES</h1>
        <p className="w-[500px] text-center text-white mt-4 text-opacity-70">
          At TuneUp Technologies, we offer a comprehensive range of services to
          help businesses thrive in the digital landscape
        </p>
      </div>
      <div className="timeline-container -mt-10 relative max-h-[2500px] bg-[#021734] px-28 flex gap-x-10 justify-between items-start">
        <div className="w-full h-full">
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-20 backdrop-blur-md group w-[30px] hover:w-[69px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-xl flex items-center justify-start space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[48px] mt-3">
              Custom <br />
              <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                Software Development
              </span>
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Tailored software solutions designed to meet your unique business
              requirements.
            </p>
          </div>
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-20 backdrop-blur-md group w-[30px] hover:w-[69px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-xl flex items-center justify-start space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[48px] mt-3">
              <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                Web Application
              </span>
              Development
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Responsive and feature-rich web applications that enhance your
              online presence.
            </p>
          </div>
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-20 backdrop-blur-md group w-[30px] hover:w-[69px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-xl flex items-center justify-start space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[48px] mt-3">
              <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                Mobile Application
              </span>
              Development
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Intuitive and dynamic mobile apps for Android and iOS platforms.
            </p>
          </div>
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-20 backdrop-blur-md group w-[30px] hover:w-[69px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-xl flex items-center justify-start space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[48px] mt-3">
              <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                Digital Marketing
              </span>
              Services
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Comprehensive strategies for social media management, SEO and
              online branding.
            </p>
          </div>
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-20 backdrop-blur-md group w-[30px] hover:w-[69px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-xl flex items-center justify-start space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[48px] mt-3">
              <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                Digital
              </span>
              Support
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Intuitive and dynamic mobile apps for Android and iOS platforms.
            </p>
          </div>
        </div>
        <div className="overflow-hidden select-none h-[2700px] min-w-[260px] max-w-[260px] -mt-[260px] flex justify-center">
          <svg
            className="timeline-svg"
            viewBox="0 0 200 2000"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="tailGradient" x1="1" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#2d68af" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <mask id="fadeMask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <rect x="0" y="0" width="100%" height="150" fill="black" />
              </mask>
            </defs>

            <path
              ref={pathRef}
              d="M106.5 210 
              Q 125 300, 100 400 
              Q 75 500, 100 600 
              Q 125 700, 100 800 
              Q 75 900, 100 1000 
              Q 125 1100, 100 1200 
              Q 75 1300, 100 1400 
              Q 125 1500, 100 1600 
              Q 75 1700, 78 1700"
              style={{
                fill: "none",
                stroke: "#2d68af",
                strokeWidth: 1.7,
                opacity: 0.2,
              }}
            />

            <path
              d="M105 200 
              Q 125 300, 100 400 
              Q 75 500, 100 600 
              Q 125 700, 100 800 
              Q 75 900, 100 1000 
              Q 125 1100, 100 1200 
              Q 75 1300, 100 1400 
              Q 125 1500, 100 1600 
              Q 75 1700, 78 1700"
              stroke="url(#tailGradient)"
              strokeWidth={1.7}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${tailLength} ${
                pathRef.current?.getTotalLength() || 0
              }`}
              strokeDashoffset={-tailOffset}
              mask="url(#fadeMask)"
            />

            <g
              className="timeline-logo"
              style={{
                transform: `translate(${iconPosition.x - 21}px, ${
                  iconPosition.y - 21
                }px)`,
                transformOrigin: "center center",
              }}
            >
              <Logo width={42} height={42} />
            </g>
          </svg>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
            <img src={Screenshot1} alt="" className="noselect" />
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <img src={Screenshot1} alt="" className="noselect" />
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <img src={Screenshot1} alt="" className="noselect" />
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <img src={Screenshot1} alt="" className="noselect" />
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <img src={Screenshot1} alt="" className="noselect" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
