import Servic from "../assets/servic.png";

const Services = () => {
  return (
    <div className="mt-10 justify-center items-center  flex flex-col">
      <button
        className="text-[16px] font-[500] border border-[#E8EAED] p-1 px-3 text-[#393939]"
        style={{
          borderRadius: "12px",
          fontFamily: "Plus Jakarta Sans sans-serif",
          fontSize: "16px",
        }}
      >
        Services
      </button>
      <h3
        className="font-[700] text-[56px] w-[40%] text-center text-[#393939]"
        style={{ lineHeight: "68px", fontFamily: "Inter" }}
      >
        See Our HR Solution In action
      </h3>
      <h4
        className="font-[400] text-[20px] w-[40%] text-center text-[#5F6368]"
        style={{ fontFamily: "Inter" }}
      >
        Streamline HR processes, manage shifts, track performance, and more —
        all in one place.
      </h4>
      <img src={Servic} alt="" />
    </div>
  );
};

export default Services;
