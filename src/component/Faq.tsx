/* eslint-disable @typescript-eslint/no-explicit-any */
import { Collapse, CollapseProps } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get(
          "https://timesync-backend.onrender.com/timesync/v1/getAllFaqs"
        );
        setFaqData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFaqs();
  }, []);
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items: CollapseProps["items"] = faqData.map((faq: any, index) => ({
    key: String(index + 1),
    label: (
      <p
        style={{ fontFamily: "Plus Jakarta Sans" }}
        className="font-[400] text-[18px] text-[#000000]"
      >
        {faq.question}
      </p>
    ),
    children: (
      <p
        style={{ fontFamily: "Plus Jakarta Sans" }}
        className="font-[400] text-[14px] text-[#2A323F]"
      >
        {faq.answer}
      </p>
    ),
  }));
  return (
    <div className="h-auto">
      <div className="flex flex-col justify-center items-center p-10">
        <h3
          className="font-[600] text-[48px] w-[50%] text-center text-[#000000]"
          style={{ lineHeight: "68px", fontFamily: "Inter" }}
        >
          FAQS
        </h3>
        <h3
          className="font-[500] text-[16px] w-[50%] text-center text-[#2A323F]"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          HR & Workforce FAQs: Everything You Need to Know
        </h3>
      </div>
      <div className="w-2/3 flex justify-center items-center mx-auto">
        <Collapse
          className="w-full"
          items={items}
          defaultActiveKey={["1"]}
          onChange={onChange}
          bordered={false}
          expandIcon={({ isActive }) =>
            isActive ? (
              <AiOutlineMinus className="text-[#473BF0]" />
            ) : (
              <AiOutlinePlus className="text-[#473BF0]" />
            )
          }
          expandIconPosition={"end"}
          style={{ background: "#F2F2F2" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <h3
          className="font-[700] text-[32px] w-[50%] text-center text-[#000000]"
          style={{ fontFamily: "Inter" }}
        >
          Still have a question?
        </h3>
        <h3
          className="font-[400] text-[16px] w-[50%] text-center text-[#2A323F]"
          style={{ fontFamily: "Inter" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h3>
      </div>
    </div>
  );
};

export default Faq;
