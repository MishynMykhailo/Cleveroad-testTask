import React from "react";
import s from "./TimeStatus.module.css";
import fromUnixTime from "date-fns/fromUnixTime";

function TimeStatus({ timestamp }) {
  const date = fromUnixTime(timestamp);

  var utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const minutes =
    utc.getMinutes() > 9 ? utc.getMinutes() : `0${utc.getMinutes()}`;
  const hours = utc.getHours() > 9 ? utc.getHours() : `0${utc.getHours()}`;
  return (
    <>
      {timestamp && (
        <>
          <div className={s.div}>
            <p>
              Current UTC time:
              <b>
                {hours}:{minutes}
              </b>
            </p>
            <p>
              <b>{utc.toDateString()}</b>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default TimeStatus;
