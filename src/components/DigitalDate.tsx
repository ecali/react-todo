import { useEffect, useState } from "react";

export const DigitalDate = () => {
    const [clock, setClock] = useState("");
    const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        const dt = new Date();
        setClock(dt.toLocaleDateString('en-US', {weekday: 'short'}) + ' ' + (dt.getDay() + 1) + ' ' + mS[dt.getMonth()] + ' ' + dt.getFullYear())
    }, [])
  return (
    <div className="clock">
      <p>{clock}</p>
    </div>
  );
};
