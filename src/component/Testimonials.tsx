import TestCard from "../reusable/TestCard";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-10">
        <h3
          className="font-[700] text-[56px] w-[50%] text-center text-[#2A323F]"
          style={{ lineHeight: "76px", fontFamily: "Inter" }}
        >
          Testimonials
        </h3>
        <div className="flex flex-row gap-3 w-full max-w-[90%] md:mx-10 mt-6">
          <TestCard
            rate={4}
            desc="This CRM has transformed how we interact with our customers. The
        marketing automation and customer insights have been game-changers for
        us. Highly recommended!"
          />
          <TestCard
            desc="This CRM has transformed how we interact with our customers. The
        marketing automation and customer insights have been game-changers for
        us. Highly recommended! "
            rate={3.5}
          />
          <TestCard
            desc="This CRM has transformed how we interact with our customers. The
        marketing automation and customer insights have been game-changers for
        us. Highly recommended!"
            rate={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
