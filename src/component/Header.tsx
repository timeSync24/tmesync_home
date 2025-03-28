const Header = () => {
  return (
    <div className=" h-[75px] flex items-center w-full ">
      <div className="flex flex-row justify-between items-center w-full">
        <div className=" w-full flex justify-center items-center ">
          <h2
            className="  font-extrabold text-[#1D24CA] text-[26px]"
            style={{ fontFamily: "Plus Jakarta Sans " }}
          >
            TimeSync
          </h2>
        </div>
        <div className="  w-full mt-2">
          <ul
            className="flex flex-row gap-8 items-center"
            style={{ fontFamily: "Plus Jakarta Sans " }}
          >
            <li className="font-[600] text-[#1D24CA] text-[16px]">Home</li>
            <li className="font-[400] text-[#060606] text-[16px]">Product</li>
            <li className="font-[400] text-[#060606] text-[16px]">Resources</li>
            <li className="font-[400] text-[#060606] text-[16px]">Pricing</li>
          </ul>
        </div>
        <div className=" w-full flex justify-center items-center gap-3 mt-1">
          <button
            className="text-[16px] font-[500] border border-[#E8EAED] p-1 px-3 text-[#393939]"
            style={{
              borderRadius: "12px",
              fontFamily: "Plus Jakarta Sans ",
              fontSize: "16px",
            }}
          >
            Book a Demo
          </button>
          <button
            className="text-[16px] font-[500]  bg-[#1D24CA] p-1 px-5 text-white"
            style={{
              borderRadius: "12px",
              fontFamily: "Plus Jakarta Sans ",
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
