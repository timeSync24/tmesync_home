import { Avatar, Rate } from "antd";

const TestCard = ({
  rate,
  desc,
  name,
  jobTitle,
}: {
  rate: number;
  desc: string;
  name: string;
  jobTitle: string;
}) => {
  return (
    <div
      style={{ border: "1px solid #E7E9ED" }}
      className="w-full bg-[#F9F9F9] p-4 rounded-md flex flex-col justify-between h-[250px]" // Fixed height
    >
      <div>
        <Rate style={{ color: "#FF881B" }} allowHalf defaultValue={rate} />
        <h3
          style={{ fontFamily: "Plus Jakarta Sans" }}
          className="text-[#697586] font-[400] text-[14px] mt-3 line-clamp-5 overflow-hidden"
        >
          {desc.length > 120 ? `${desc.slice(0, 120)}...` : desc}{" "}
        </h3>
      </div>

      <div className="flex flex-row gap-2 mt-5 items-center">
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <div className="flex flex-col">
          <h1 className="text-[#202939] font-[600] text-[16px] font-inter">
            {name}
          </h1>
          <h1 className="text-[#202939] font-[400] text-[14px] font-inter">
            {jobTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
