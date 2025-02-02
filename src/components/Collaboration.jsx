import { brainwaveSymbol, check } from "../assets";
import Sections from "./Sections";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Sections crosses>
      <div className="container lg:flex items-center justify-between">
        {/* Left Section with Text and Button */}
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check-icon" />
                  <h6 className="body-2 ml-5 ">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        {/* Right Section with Circular Icon Layout */}
        <div className="xl:w-[38rem] mt-4 lg:mt-0">
          <div className="relative left-1/2 flex w-[28rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            {/* Inner Circle with Brainwave Symbol */}
            <div className="flex w-[10rem] aspect-square m-auto border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            {/* Icons Placed in a Circle */}
            <ul className="absolute inset-0 flex items-center justify-center">
              {collabApps.map((item, index) => (
                <li
                  key={index}
                  className="absolute w-[3.2rem] h-[3.2rem] flex items-center justify-center"
                  style={{
                    transform: `rotate(${index * (360 / collabApps.length)}deg) translate(11rem) rotate(-${
                      index * (360 / collabApps.length)
                    }deg)`,
                  }}
                >
                  <div className="flex w-[3.2rem] h-[3.2rem] bg-n-7 border-n-1/15 rounded-xl">
                    <img
                      className="m-auto"
                      height={item.height}
                      width={item.width}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative Left and Right Curves */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Sections>
  );
};

export default Collaboration;
