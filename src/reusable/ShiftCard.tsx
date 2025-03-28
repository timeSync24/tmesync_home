import { BsBagDash } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ShiftCard = () => {
  return (
    <div className="bg-[white] w-[35%] rounded-md h-auto shadow-lg p-4 ">
      <div className="flex justify-between">
        <h3 className="font-[600] text-[#000000] text-[17px]">Shift details</h3>
        <LiaTimesCircleSolid />
      </div>
      <div className="bg-[#D5D5D5] h-auto p-1 rounded-md mt-3">
        <div className="flex flex-col p-2 gap-3 mt-3">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <BsBagDash />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "Plus Jakarta Sans ",
                }}
                className="font-[500] text-[14px] text-[#060606]"
              >
                Afternoon Shift
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              <GoClock />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "Plus Jakarta Sans",
                }}
                className="font-[500] text-[14px] text-[#060606]"
              >
                02:00 - 20:00
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              <GoClock />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "Plus Jakarta Sans",
                }}
                className="font-[500] text-[14px] text-[#060606]"
              >
                01 Novermber 2024
              </h3>
            </div>
          </div>
        </div>
      </div>
      <button
        className="text-[16px] flex items-center justify-center gap-2 p-2 mt-7 font-[600] bg-[#060606] text-[#FFFFFF] w-full"
        style={{
          borderRadius: "5px",
          fontFamily: "Plus Jakarta Sans ",
          fontSize: "16px",
        }}
      >
        Clock In
        <BsArrowRightCircleFill />
      </button>
    </div>
  );
};

export default ShiftCard;
