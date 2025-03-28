import { Input } from "antd";

const Footer = () => {
  return (
    <div className="max-w-[90%] mx-auto h-[50vh] mt-20">
      <div className="flex justify-between">
        <div
          className="flex flex-row gap-20"
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
        >
          <h3 className="text-[#393939] font-[800] text-[36px]">Timesync</h3>
          <div className="flex flex-col gap-3">
            <div className="text-[#757682] font-[600] text-[12px]">Company</div>
            <div className="text-[14px] font-[400]">Docs</div>
            <div className="text-[14px] font-[400]">Product</div>
            <div className="text-[14px] font-[400]">Changelog</div>
            <div className="text-[14px] font-[400]">Blog</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[#757682] font-[600] text-[12px]">Company</div>
            <div className="text-[14px] font-[400]">Docs</div>
            <div className="text-[14px] font-[400]">Product</div>
            <div className="text-[14px] font-[400]">Changelog</div>
            <div className="text-[14px] font-[400]">Blog</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[#757682] font-[600] text-[12px]">Legal</div>
            <div className="text-[14px] font-[400]">Status</div>
            <div className="text-[14px] font-[400]">Privacy</div>
            <div className="text-[14px] font-[400]">Terms of Service</div>
            <div className="text-[14px] font-[400]">DPA</div>
          </div>
        </div>
        <div>
          <div className="bg-[#F7F7F8] p-5 rounded-md ">
            <h3
              style={{ fontFamily: "Inter" }}
              className="text-[14px] font-[400] text-[#060606]"
            >
              Subscribe to our email newsletter
            </h3>
            <Input
              placeholder="Email address"
              type="email"
              allowClear
              suffix={
                <button
                  className="bg-[#1D24CA] text-white font-semibold rounded-full"
                  style={{
                    height: "57px",
                    padding: "0 20px",
                    borderRadius: "99px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "-10px",
                    fontFamily: "Inter",
                  }}
                >
                  Subscribe
                </button>
              }
              style={{
                borderRadius: "99px",
                height: "57px",
                display: "flex",
                alignItems: "center",
                fontFamily: "Inter",
                paddingRight: "0px",
                marginTop: "6px",
              }}
              size="large"
            />
          </div>
        </div>
      </div>
      <hr className="border-[0.5px] mt-4 border-b border-gray-200" />
      <div className="flex flex-row justify-between mt-5">
        <h3
          className="text-[#92939E] font-[400] text-[12px]"
          style={{ fontFamily: "Inter" }}
        >
          © {new Date().getFullYear()} Timesync HQ Ltd
        </h3>
        <h3
          className="text-[#92939E] font-[400] text-[12px]"
          style={{ fontFamily: "Inter" }}
        >
          Registered at Camburgh House, 27 New Dover Road, Canterbury, CT1 3DN,
          England
        </h3>
      </div>
    </div>
  );
};

export default Footer;
