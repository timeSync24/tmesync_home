import axios from "axios";
import TestCard from "../reusable/TestCard";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          "https://timesync-backend.onrender.com/timesync/v1/getAllTestimony"
        );
        setTestimonialData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-10">
        <h3
          className="font-[700] text-[56px] w-[50%] text-center text-[#2A323F]"
          style={{ lineHeight: "76px", fontFamily: "Inter" }}
        >
          Testimonials
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-[90%] md:mx-10 mt-6">
          {testimonialData?.map(
            (t: {
              rating: string;
              testimony: string;
              name: string;
              jobTitle: string;
            }) => (
              <TestCard
                rate={Number(t.rating)}
                desc={t?.testimony}
                name={t?.name}
                jobTitle={t?.jobTitle}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
