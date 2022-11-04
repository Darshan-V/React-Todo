import React, { useEffect, useState } from "react";
import "./clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    let hr = hour12();
    const min = time
      .getMinutes()
      .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

    const sec = time.getSeconds();

    function hour12() {
      let hour = time.getHours();

      if (hour >= 12) {
        hour = hour - 12;
      }
      if (hour === 0) {
        hour = 12;
      }
      return hour;
    }
    const hour = document.getElementById("hr");
    const mn = document.getElementById("mn");
    const sc = document.getElementById("sc");
    //prettier-ignore
    hour.style.transform = `rotate(${((hr / 12 ) * 360) + ((min/60)*30) + 360}deg)`;
    mn.style.transform = `rotate(${min * 6}deg)`;
    sc.style.transform = `rotate(${sec * 6}deg)`;

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="clock">
      <div className="hour">
        <div className="hr" id="hr"></div>
      </div>
      <div className="min">
        <div className="mn" id="mn"></div>
      </div>
      <div className="sec">
        <div className="sc" id="sc"></div>
      </div>
    </div>
  );
}
export default Clock;
