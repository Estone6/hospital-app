import faqImg from "../assets/images/faq-img.png";

import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import HeroSection from "../components/Hero/Hero";
import QuickServicesSection from "../components/QuickServices/QuickServices";
import FeatureSection from "../components/Features/Features";

const Home = () => {
  return (
    <>
      <HeroSection />
      <QuickServicesSection />
      <About />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-headingColor">Our medical services</h2>
            <p className="text_para text-center">
              World class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      <FeatureSection />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-headingColor">Our Great Doctors</h2>
            <p className="text_para text-center">
              World class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img
                src={faqImg}
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-headingColor">What our patients say</h2>
            <p className="text_para text-center">
              World class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
