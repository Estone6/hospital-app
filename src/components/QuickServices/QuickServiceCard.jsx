import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const QuickServiceCard = ({ icon, title, link }) => (
  <div className="py-[30px] px-5">
    <div className="flex items-center justify-center">
      <img
        src={icon}
        alt={`${title} Icon`}
      />
    </div>
    <div className="mt-[30px]">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
        {title}
      </h2>
      <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
        World class care for everyone. Our health System offers unmatched,
        expert health care.
      </p>
      <Link
        to={link}
        className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
      >
        <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
      </Link>
    </div>
  </div>
);

export default QuickServiceCard;

QuickServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
