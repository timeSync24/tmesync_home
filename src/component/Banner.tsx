import Img from "../assets/image.png";
import coin from "../assets/coin.png";
import arrowup from "../assets/arrowup.png";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const Banner = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-10">
      <div className="max-w-[90%] mx-auto h-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
            <motion.h4
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-[36px] md:text-[72px] font-[800] text-[#393939] leading-tight"
            >
              Simplify Your Workforce Management
            </motion.h4>

            <motion.h4
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-[16px] md:text-[20px] font-[600] text-[#8E98A8] md:w-[75%] mt-3"
            >
              Streamline HR processes, manage shifts, track performance, and
              more — all in one place.
            </motion.h4>
            <button className="text-[16px] font-[600] w-[60%] md:w-[30%] bg-[#1D24CA] p-3 md:p-2 px-5 text-white mt-5 rounded-lg">
              Start a Free Trial
            </button>
          </div>

          <div className="relative w-full md:w-fit mt-8 md:mt-0">
            <div className="bg-white absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/3 shadow-xl rounded-lg w-[160px] md:w-[199px] h-[120px] md:h-[143px] p-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                  <img
                    className="bg-[#E0E6FF] rounded-sm p-2"
                    src={profile}
                    alt=""
                  />
                  <h3 className="text-[#50D1AA] text-[12px] font-[500]">
                    +48.50%
                  </h3>
                  <img
                    className="bg-[#88E0913D] rounded-lg p-2"
                    src={arrowup}
                    alt=""
                  />
                </div>
                <h3 className="text-[#12141D] font-[600] text-[20px] md:text-[28px]">
                  $36,845.00
                </h3>
                <h3 className="text-[#00000040] font-[500] text-[12px] md:text-[14px]">
                  Total Revenue
                </h3>
              </div>
            </div>
            <img
              src={Img}
              alt=""
              className="w-full max-w-[350px] md:max-w-none mx-auto"
            />
            <div className="bg-white absolute top-3/4 left-0 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-lg w-[160px] md:w-[199px] h-[120px] md:h-[143px] p-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                  <img className="bg-[#FFF8E8] p-2" src={coin} alt="" />
                  <h3 className="text-[#50D1AA] text-[12px] font-[500]">
                    +48.50%
                  </h3>
                  <img
                    className="bg-[#88E0913D] rounded-lg p-2"
                    src={arrowup}
                    alt=""
                  />
                </div>
                <h3 className="text-[#12141D] font-[600] text-[20px] md:text-[28px]">
                  $36,845.00
                </h3>
                <h3 className="text-[#00000040] font-[500] text-[12px] md:text-[14px]">
                  Total Revenue
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
