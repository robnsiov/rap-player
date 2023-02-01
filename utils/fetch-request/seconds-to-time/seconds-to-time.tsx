const secondsToTime = (sec: number) => {
  const date = new Date(0);
  date.setSeconds(sec);
  const timeString = date.toISOString().substring(14, 19);
  return timeString;
};
export default secondsToTime;
