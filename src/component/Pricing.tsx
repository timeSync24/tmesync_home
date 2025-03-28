import { Switch } from "antd";
import PriceCard from "../reusable/PriceCard";
import { motion } from "framer-motion";

const Pricing = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-10">
        <button
          className="text-[16px] font-[500] border border-[#E8EAED] p-1 px-3 text-[#393939]"
          style={{
            borderRadius: "12px",
            fontFamily: "Plus Jakarta Sans sans-serif",
            fontSize: "16px",
          }}
        >
          Pricing
        </button>
        <h3
          className="font-[600] text-[56px] w-[50%] text-center text-[#222222]"
          style={{ lineHeight: "68px", fontFamily: "Inter" }}
        >
          Explore More with Timesync
        </h3>
        <div>
          <div className="flex flex-row items-center gap-3 mt-4">
            <h2 className="text-[19px] font-[400] text-[#161C2D]">Monthly</h2>
            <Switch defaultChecked={false} onChange={onChange} />
            <h2 className="text-[19px] font-[400] text-[#161C2D]">Yearly</h2>
          </div>
        </div>
        <motion.div
          className="flex flex-row gap-3 w-full max-w-[90%] md:mx-10 mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <PriceCard price={19} />
          <PriceCard price={49} />
          <PriceCard price={69} />
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
