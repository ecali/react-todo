import { useEffect, useState } from "react";

export const DigitalClock = (props: {format24: boolean}) => {
  const [clock, setClock] = useState("");
  useEffect(() => {
    setInterval(() => {
        const clockData = props.format24 ? new Date().toLocaleTimeString() : from24to12;
     setClock(clockData);
    }, 1000);
  }, []);

  const from24to12 = () => {
    var dt = new Date();
    var hours = dt.getHours(); 
    var AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    var finalTime = formatNumber(hours) + ":" + formatNumber(dt.getMinutes())  +":" +  formatNumber(dt.getSeconds()) + " " + AmOrPm;
    return finalTime;
  };

  const formatNumber = (value: number) => {
    return value < 10 ? '0' + value : value;
  }

  return (
    <div className="clock">
      <p>{clock}</p>
    </div>
  );
};
