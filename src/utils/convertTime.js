export const convertTime = (time) => {
  const timeParts = time.split(":");
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  let meridian = "AM";

  if (hours >= 12) {
    meridian = "PM";

    if (hours > 12) {
      hours -= 12;
    }
  }
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${meridian}`;
};
