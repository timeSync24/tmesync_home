import ShiftCard from "../reusable/ShiftCard";

const Features = () => {
  return (
    <div className="h-auto mb-20 bg-[#F9F9F9] ">
      <div className="flex flex-col justify-center items-center p-10">
        <button
          className="text-[16px] font-[500] border border-[#E8EAED] p-1 px-3 text-[#393939]"
          style={{
            borderRadius: "12px",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "16px",
          }}
        >
          Features
        </button>
        <h3
          className="font-[600] text-[56px] w-[50%] text-center text-[#393939]"
          style={{ lineHeight: "68px", fontFamily: "Inter" }}
        >
          Some of our features
        </h3>
        <h3
          className="font-[400] text-[20px] w-[50%] text-center text-[#5F6368]"
          style={{ fontFamily: "Inter" }}
        >
          Streamline HR processes, manage shifts, track performance, and more —
          all in one place.
        </h3>
      </div>
      <div className="max-w-[90%] md:mx-20  mt-4  ">
        <div className="flex flex-row gap-20">
          <ShiftCard />
          <div className="w-[50%]">
            <h3
              style={{
                fontFamily: "Plus Jakarta Sans ",
              }}
              className="font-[500] text-[48px]"
            >
              Real-Time Attendance Tracking
            </h3>
            <h4 className="font-[400] text-[18px] text-[#393939]">
              Employees can clock in and out from multiple devices, including
              desktops, mobile phones, and designated on-site kiosks.
            </h4>
            <button
              className="text-[16px] font-[500] border border-[#000000] mt-3 p-1 px-3 text-[#393939]"
              style={{
                borderRadius: "4px",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-20 mt-10">
          <div className="w-[40%]">
            <h3
              style={{
                fontFamily: "Plus Jakarta Sans ",
              }}
              className="font-[500] text-[48px]"
            >
              Create & Manage Shifts
            </h3>
            <h4 className="font-[400] text-[18px] text-[#393939]">
              Employees can clock in and out from multiple devices, including
              desktops, mobile phones, and designated on-site kiosks.
            </h4>
            <button
              className="text-[16px] font-[500] border border-[#000000] mt-3 p-1 px-3 text-[#393939]"
              style={{
                borderRadius: "4px",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Learn more
            </button>
          </div>
          <ShiftCard />
        </div>
        <div className="flex flex-row gap-20 mt-10">
          <ShiftCard />
          <div className="md:w-[415px]">
            <h3
              style={{
                fontFamily: "Plus Jakarta Sans ",
              }}
              className="font-[500] text-[48px]"
            >
              Handle pay periods
            </h3>
            <h4 className="font-[400] text-[18px] text-[#393939]">
              Employees can clock in and out from multiple devices, including
              desktops, mobile phones, and designated on-site kiosks.
            </h4>
            <button
              className="text-[16px] font-[500] border border-[#000000] mt-3 p-1 px-3 text-[#393939]"
              style={{
                borderRadius: "4px",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
