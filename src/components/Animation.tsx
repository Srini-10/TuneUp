import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/icons/TuneUp_Icon.svg";
import Icon1 from "../assets/icons/32.svg";
import Icon2 from "../assets/icons/33.svg";
import Icon3 from "../assets/icons/34.svg";
import Icon4 from "../assets/icons/35.svg";
import Icon5 from "../assets/icons/36.svg";
import Icon6 from "../assets/icons/37.svg";
import Icon7 from "../assets/icons/38.svg";
import Icon8 from "../assets/icons/39.svg";
import Icon9 from "../assets/icons/40.svg";
import Icon10 from "../assets/icons/41.svg";

// Additional icons for the transition
import Icon11 from "../assets/icons/42.svg";
import Icon12 from "../assets/icons/43.svg";
import Icon13 from "../assets/icons/44.svg";
import Icon14 from "../assets/icons/45.svg";
import Icon15 from "../assets/icons/46.svg";
import Icon16 from "../assets/icons/47.svg";
import Icon17 from "../assets/icons/48.svg";
import Icon18 from "../assets/icons/49.svg";
import Icon19 from "../assets/icons/50.svg";
import Icon20 from "../assets/icons/51.svg";

const pathData = [
  "M0,0 C400,504 1200,504 1590,0",
  "M0,100 C400,476 1200,476 1590,100",
  "M0,200 C400,448 1200,448 1590,200",
  "M0,300 C400,420 1200,420 1590,300",
  "M0,370 C400,402 1200,402 1590,370",
  "M0,430 C400,387 1200,387 1590,430",
  "M0,500 C400,369 1200,369 1590,500",
  "M0,600 C400,341 1200,341 1590,600",
  "M0,700 C400,313 1200,313 1590,700",
  "M0,800 C400,285 1200,285 1590,800",
];

const iconUrls = [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  Icon20,
];

const iconOrder = [0, 9, 2, 6, 1, 7, 3, 8, 4, 5];

const AnimatedPath: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathLengths, setPathLengths] = useState<number[]>([]);
  const [swappedIcons, setSwappedIcons] = useState<boolean[]>(
    new Array(iconUrls.length).fill(false)
  );

  useEffect(() => {
    const totalDelayReduction = 50;

    // Start the icon swapping immediately
    iconOrder.forEach((index, i) => {
      setTimeout(() => {
        setSwappedIcons((prev) => {
          const newSwappedIcons = [...prev];
          newSwappedIcons[index] = true; // Swap this specific icon
          return newSwappedIcons;
        });
      }, i * 3000 + 0 - totalDelayReduction); // Delay each icon swap by i * 3000 ms, plus 15 seconds

      // Revert the icon back after 30 seconds
      setTimeout(() => {
        setSwappedIcons((prev) => {
          const newSwappedIcons = [...prev];
          newSwappedIcons[index] = false; // Revert to the original icon
          return newSwappedIcons;
        });
      }, i * 3000 + 15000 - totalDelayReduction); // Revert after 30 seconds
    });

    // Repeat the process every 30 seconds (including the initial immediate swap)
    const intervalId = setInterval(() => {
      iconOrder.forEach((index, i) => {
        setTimeout(() => {
          setSwappedIcons((prev) => {
            const newSwappedIcons = [...prev];
            newSwappedIcons[index] = true; // Swap this specific icon
            return newSwappedIcons;
          });
        }, i * 3000 + 0 - totalDelayReduction); // Delay each icon swap by i * 3000 ms, plus 15 seconds

        // Revert the icon back after 30 seconds
        setTimeout(() => {
          setSwappedIcons((prev) => {
            const newSwappedIcons = [...prev];
            newSwappedIcons[index] = false; // Revert to the original icon
            return newSwappedIcons;
          });
        }, i * 3000 + 15000 - totalDelayReduction); // Revert after 30 seconds
      });
    }, 30000); // Repeat every 30 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      const lengths = pathData.map((_, index) => {
        const path = svgRef.current?.querySelector(
          `#path-${index}`
        ) as SVGPathElement;
        return path?.getTotalLength() || 0;
      });
      setPathLengths(lengths);
    }
  }, []);

  return (
    <div className="animation-container bg-[#021734] h-auto lg:min-h-[1000px] relative">
      <p className="text-[26px] lg:text-[58px] text-white w-[90vw] lg:w-[700px] mx-auto text-center leading-8 lg:leading-[60px] pt-14 sm:pt-20 lg:pt-28 xl:pt-36 inter-medium">
        Transforming Technology into Possibilities
      </p>
      <p className="w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] text-center mt-4 lg:mt-10 text-white text-[11px] lg:text-[16px] mx-auto text-opacity-70">
        At TuneUp Technologies, what goes in as technology comes out as
        opportunity, success, and growth. Together, let’s redefine what’s
        possible in the digital world. Innovation starts here.
      </p>
      <svg
        ref={svgRef}
        width="100%"
        height="1000px"
        viewBox="0 0 1590 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.95] -mt-80 sm:-mt-68 md:-mt-[280px] lg:-mt-44"
      >
        {/* Define gradients */}
        <defs>
          {pathData.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#021734" />
              <stop offset="20%" stopColor="#2267b2" />
              <stop offset="50%" stopColor="#0e57a5" />
              <stop offset="80%" stopColor="#2267b2" />
              <stop offset="100%" stopColor="#021734" />
            </linearGradient>
          ))}
        </defs>

        {/* Draw the paths first */}
        {pathData.map((path, index) => (
          <path
            key={`path-${index}`}
            id={`path-${index}`}
            d={path}
            fill="transparent"
            stroke={`url(#gradient-${index})`}
            strokeWidth="2.5"
          />
        ))}

        {/* Render icons with the transition */}
        {iconOrder.map((index, i) => {
          return (
            <g key={`icon-${index}`}>
              <image
                href={
                  swappedIcons[index]
                    ? iconUrls[(index + 10) % iconUrls.length]
                    : iconUrls[index % iconUrls.length]
                } // Swap icons after 15 seconds for each individual icon
                width="100"
                height="100"
              >
                {pathLengths.length > 0 && (
                  <>
                    <animateMotion
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3 - 45}s`}
                      rotate="auto"
                    >
                      <mpath href={`#path-${index}`} />
                    </animateMotion>

                    {/* Animate the width */}
                    <animate
                      attributeName="width"
                      values="50;100;25;100;50"
                      keyTimes="0;0.25;0.5;0.75;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3 - 45}s`}
                    />

                    {/* Animate the height */}
                    <animate
                      attributeName="height"
                      values="50;100;25;100;50"
                      keyTimes="0;0.25;0.5;0.75;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3 - 45}s`}
                    />

                    {/* Adjust vertical position of the images */}
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={
                        i === 0
                          ? "0 -25;0 -50; 0 -13; 0 -50;0 -25"
                          : "0 -25;0 -45; 0 -12.5; 0 -45;0 -25"
                      }
                      keyTimes="0;0.25;0.5;0.75;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3 - 45}s`}
                    />
                  </>
                )}
              </image>
            </g>
          );
        })}

        {/* Add logo at the center */}
        <image
          href={Logo}
          width="140"
          height="140"
          x="735"
          y="325"
          className="z-[99999] opacity-100"
          style={{ pointerEvents: "none" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;
