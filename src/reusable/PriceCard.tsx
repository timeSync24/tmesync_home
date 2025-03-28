import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

const PriceCard = ({ price }: { price: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      style={{ border: "1px solid #E7E9ED" }}
      className="w-[33%] bg-[#F9F9F9] p-10 rounded-md shadow-md"
    >
      <div className="flex flex-col">
        <h3 className="text-[#1D24CA] text-[13px] font-[700]">STARTER</h3>
        <h3 className="text-[24px] font-[400]">
          $<span className="font-[700] text-[60px]">{price}</span>{" "}
          <span className="text-[17px] font-[400] text-[#060606]">/month</span>
        </h3>
        <h3 className="text-[#161C2D] font-[400] text-[15px]">
          billed monthly
        </h3>

        <div className="flex flex-col gap-2 mt-5">
          <div className="flex flex-row gap-2 items-center">
            <IoMdCheckmark color="#68D585" />
            <h3 className="font-[400] text-[16px] text-[#060606]">
              Commercial License
            </h3>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <IoMdCheckmark color="#68D585" />
            <h3 className="font-[400] text-[16px] text-[#060606]">
              Commercial License
            </h3>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <LiaTimesSolid color="red" />
            <h3 className="font-[400] text-[16px] text-[#060606]">
              Limited Access
            </h3>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <LiaTimesSolid color="red" />
            <h3 className="font-[400] text-[16px] text-[#060606]">
              Limited Access
            </h3>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <LiaTimesSolid color="red" />
            <h3 className="font-[400] text-[16px] text-[#060606]">
              Limited Access
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[16px] p-2 mt-7 font-[600] bg-[#F1F0FE] text-[#473BF0] w-full flex items-center justify-center gap-2 rounded-md"
          >
            Start Free Trial <FaArrowRight className="text-[14px]" />
          </motion.button>

          <h3 className="font-[400] text-[15px] text-[#161C2D]">
            No credit card required
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
