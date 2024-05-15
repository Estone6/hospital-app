import BookedSlotCard from "./BookedSlotCard";

import featureImg from "../../assets/images/feature-img.png";
import { Link } from "react-router-dom";

const FeatureSection = () => (
  <section>
    <div className="container">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <div className="xl:w-[670px]">
          <h2 className="heading">
            Get virtual treatment <br /> anytime.
          </h2>
          <ul className="pl-4">
            <li className="text_para">1. Schedule appointment directly</li>
            <li className="text_para">
              2. Search for your physician here, and contact their office
            </li>
            <li className="text_para">
              3. View our physicians who are accepting new patients, use the
              online scheduling tool to select an appointment time
            </li>
          </ul>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
          <img
            className="w-3/4"
            src={featureImg}
            alt="Feature Image"
          />
          <BookedSlotCard />
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
