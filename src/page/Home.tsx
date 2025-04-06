import Banner from "../component/Banner";
import Faq from "../component/Faq";
import Features from "../component/Features";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Pricing from "../component/Pricing";
import Services from "../component/Services";
import Testimonials from "../component/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
