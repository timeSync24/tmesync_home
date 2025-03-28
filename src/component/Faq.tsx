import { Collapse, CollapseProps } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
          className="font-[400] text-[18px] text-[#000000] bg-[#F2F2F2]"
        >
          Question text goes here
        </p>
      ),
      children: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
          className="font-[400] text-[14px] text-[#2A323F] bg-[#F2F2F2]"
        >
          {text}
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
          className="font-[400] text-[18px] text-[#000000] mt-1"
        >
          Question text goes here
        </p>
      ),
      children: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="font-[400] text-[14px] text-[#2A323F]"
        >
          {text}
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
          className="font-[400] text-[18px] text-[#000000]"
        >
          Question text goes here
        </p>
      ),
      children: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="font-[400] text-[14px] text-[#2A323F]"
        >
          {text}
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
          className="font-[400] text-[18px] text-[#000000]"
        >
          Question text goes here
        </p>
      ),
      children: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="font-[400] text-[14px] text-[#2A323F]"
        >
          {text}
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans ",
          }}
          className="font-[400] text-[18px] text-[#000000]"
        >
          Question text goes here
        </p>
      ),
      children: (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="font-[400] text-[14px] text-[#2A323F]"
        >
          {text}
        </p>
      ),
    },
  ];
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
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
