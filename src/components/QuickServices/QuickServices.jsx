import QuickServiceCard from "./QuickServiceCard";

import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";

const QuickServicesSection = () => (
  <section>
    <div className="container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="heading text-center">
          Providing the best medical services
        </h2>
        <p className="text_para text-center">
          World class care for everyone. Our health System offers unmatched,
          expert health care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <QuickServiceCard
          icon={icon01}
          title="Find a Doctor"
          link="/doctors"
        />
        <QuickServiceCard
          icon={icon02}
          title="Find a Location"
          link="/locations"
        />
        <QuickServiceCard
          icon={icon03}
          title="Book Appointment"
          link="/appointments"
        />
      </div>
    </div>
  </section>
);

export default QuickServicesSection;
