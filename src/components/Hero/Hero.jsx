import StatCard from "../StatCard/StatCard";

import heroImg01 from "../../assets/images/hero-img01.png";
import heroImg02 from "../../assets/images/hero-img02.png";
import heroImg03 from "../../assets/images/hero-img03.png";

const HeroSection = () => (
  <section className="hero_section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        <div>
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              We help patients live a healthy, longer life.
            </h1>
            <p className="text_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
            <button className="btn">Request an Appointment</button>
          </div>
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <StatCard
              value="30+"
              label="Years of Experience"
              color="yellow"
            />
            <StatCard
              value="15+"
              label="Clinic Location"
              color="purple"
            />
            <StatCard
              value="100%"
              label="Patient Satisfaction"
              color="irisBlue"
            />
          </div>
        </div>
        <div className="flex gap-[30px] justify-end">
          <div>
            <img
              className="w-full"
              src={heroImg01}
              alt="Hero Image 01"
            />
          </div>
          <div className="mt-[30px]">
            <img
              className="w-full mb-[30px]"
              src={heroImg02}
              alt="Hero Image 02"
            />
            <img
              className="w-full"
              src={heroImg03}
              alt="Hero Image 03"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
