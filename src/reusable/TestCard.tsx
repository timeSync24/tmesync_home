import { Avatar, Rate } from "antd";

const TestCard = ({ rate, desc }: { rate: number; desc: string }) => {
  return (
    <div
      style={{ border: "1px solid #E7E9ED" }}
      className="w-[33%]  bg-[#F9F9F9] p-4 rounded-md "
    >
      <div className="flex flex-col">
        <Rate style={{ color: "#FF881B" }} allowHalf defaultValue={rate} />
      </div>
      <h3
        style={{
          fontFamily: "Plus Jakarta Sans ",
        }}
        className="text-[#697586] font-[400] text-[14px] mt-3"
      >
        {desc}
      </h3>
      <div>
        <div className="flex flex-row gap-2 mt-5">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <div className="flex flex-col">
            <h1
              style={{
                fontFamily: "Inter",
              }}
              className="text-[#202939] font-[600] text-[16px]"
            >
              Tyra Dillion
            </h1>
            <h1
              style={{
                fontFamily: "Inter",
              }}
              className="text-[#202939] font-[400] text-[16px]"
            >
              Program Manager
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
