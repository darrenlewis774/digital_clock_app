import React, {useState, useEffect} from 'react';

function DigitalClock(){

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    /* Clear setInterval if component dismounted */
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    // If hours % 12 equals 0, this equates to false. The
    // OR logical operator then returns 12. This is only
    // required when hours is 0.
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number){
    // Return number concatenated with a leading 0 if single digit
    return (number < 10 ? "0" : "") + number;
  }

  return(
          <div className="clock-container">
            <div className="clock">
              <span>{formatTime()}</span>
            </div>
          </div>);
}

export default DigitalClock