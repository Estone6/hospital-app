import { convertTime } from "../../utils/convertTime";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message + "Try again");
      }

      if (data.success) {
        window.location.href = data.session.url;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} ₹
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots
        </p>
        <ul className="mt-3">
          {timeSlots.map((timeSlot, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2"
            >
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {timeSlot.day.charAt(0).toUpperCase() + timeSlot.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(timeSlot.startingTime)} -{" "}
                {convertTime(timeSlot.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={bookingHandler}
        className="btn px-2 w-full rounded-md"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
