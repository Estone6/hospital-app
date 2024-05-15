import PropTypes from "prop-types";

const StatCard = ({ value, label, color }) => (
  <div>
    <h2
      className={`text-[36px] leading-[56px] lg:[text-[44px] lg:leading-[54px] font-[700] text-headingColor`}
    >
      {value}
    </h2>
    <span
      className={`w-[100px] h-2 bg-${color}Color rounded-full block mt-[-14px]`}
    ></span>
    <p className="text_para">{label}</p>
  </div>
);

export default StatCard;

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
