import React from "react";
import s from "./LocationStatus.module.css";
function LocationStatus({ issPosition }) {
  return (
    <>
      <div className={s.div}>
        <h2>ISS is now located at:</h2>
        <ul className={s.ul}>
          {Object.entries(issPosition).map(([name, value]) => {
            return (
              <li key={name} className={s.li}>
                {name}: {value}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default LocationStatus;
