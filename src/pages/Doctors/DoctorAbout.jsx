/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/formatDate";

const DoctorAbout = ({
  name,
  about,
  qualifications = [],
  experiences = [],
}) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text_para">{about}</p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications.map((qualification, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate(qualification.startingDate)} -{" "}
                  {formatDate(qualification.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {qualification.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {qualification.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="p-4 rounded bg-[#fff9ea]"
            >
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formatDate(experience.startingDate)} -{" "}
                {formatDate(experience.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {experience.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {experience.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
